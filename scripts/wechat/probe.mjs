#!/usr/bin/env node
/**
 * [INPUT]: 依赖 api.mjs 与微信通信，依赖 app/public/covers 下任意一张图作为素材样本
 * [OUTPUT]: 命令行诊断。逐步探测 access_token → 永久素材 → 新增草稿，各步单独报结论
 * [POS]: scripts/wechat 的一次性诊断工具，不参与 build 与 draft 流程。
 *        存在的理由：官方文档给 draft/add 与 add_material 的适用范围只写
 *        「公众号 ✔ 服务号 ✔」、不写认证要求，而开放社区有大量个人主体账号实测报 48001。
 *        这种冲突查不出结论，只能拿账号跑一次——换账号或换网络环境时重跑它
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import {
  loadCredentials, getAccessToken, uploadPermanentImage, deleteMaterial, postJson, WechatApiError,
} from './api.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const COVERS_DIR = join(resolve(HERE, '../..'), 'app/public/covers');

let step = 0;
function announce(title) {
  console.log(`\n[${++step}] ${title}`);
}

/** 跑一步，把失败转成「记录下来继续」而不是中断——分步探测的价值就在于知道是哪一步断的 */
async function attempt(fn) {
  try {
    return { ok: true, value: await fn() };
  } catch (error) {
    console.log(`    ✗ ${error instanceof WechatApiError ? error.message.replace(/^调用 \S+ 失败：/, '') : error.message}`);
    return { ok: false, error };
  }
}

async function main() {
  console.log('\n探测公众号接口权限。官方文档说这些接口对公众号一律可用且不写认证要求，');
  console.log('而开放社区有大量个人主体账号实测报 48001。以本次实跑为准。');

  const credentials = loadCredentials();

  // ── 1. access_token：先撞 IP 白名单，撞不过后面都没意义
  announce('获取 access_token');
  const token = await attempt(() => getAccessToken(credentials));
  if (!token.ok) {
    console.log('\n拿不到 access_token，后面的探测无从谈起。先解决上面那条。\n');
    process.exit(1);
  }
  console.log('    ✓ 拿到了');
  const accessToken = token.value;

  // ── 2. 永久素材：图文封面只收永久素材的 media_id，这一步过不去草稿就建不成
  announce('上传永久素材（图文封面只收永久素材的 media_id）');
  const covers = existsSync(COVERS_DIR)
    ? readdirSync(COVERS_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f))
    : [];
  if (covers.length === 0) {
    console.log(`    ✗ ${COVERS_DIR} 下没有图片，这一步没法探\n`);
    process.exit(1);
  }
  console.log(`    用 ${covers[0]} 试`);
  const material = await attempt(() => uploadPermanentImage(accessToken, join(COVERS_DIR, covers[0])));
  if (material.ok) console.log(`    ✓ media_id: ${material.value.mediaId}`);

  // ── 3. 新增草稿：即便上一步失败也试，好区分「素材不让传」与「草稿不让建」——
  //       两者的后续处置完全不同，前者还能试临时素材，后者是死路
  announce('新增草稿');
  if (!material.ok) {
    console.log('    素材没传上去，用一个假 media_id 试，目的是分辨究竟哪一步被拦：');
    console.log('    报 48001 说明草稿接口本身没权限；报素材相关的错说明草稿接口是通的。');
  }
  const draft = await attempt(() =>
    postJson('/cgi-bin/draft/add', accessToken, {
      articles: [{
        title: '接口权限探测（可删）',
        digest: '这是一次接口权限探测产生的草稿，确认结果后请删除。',
        content: '<p>探测用草稿。若你在后台看到它，说明 draft/add 可用。</p>',
        thumb_media_id: material.ok ? material.value.mediaId : 'PROBE_INVALID_MEDIA_ID',
      }],
    })
  );
  if (draft.ok) console.log(`    ✓ media_id: ${draft.value.media_id}`);

  // ── 4. 清理：探测不该在账号里留垃圾，与 analytics 的 /forget 是同一条规矩
  if (draft.ok) {
    announce('删除刚建的探测草稿');
    const del = await attempt(() => postJson('/cgi-bin/draft/delete', accessToken, { media_id: draft.value.media_id }));
    console.log(del.ok ? '    ✓ 已删除' : '    ⚠ 没删掉，去后台草稿箱手工删掉那条「接口权限探测（可删）」');
  }
  if (material.ok) {
    announce('删除刚传的探测素材');
    const del = await attempt(() => deleteMaterial(accessToken, material.value.mediaId));
    console.log(del.ok ? '    ✓ 已删除' : '    ⚠ 没删掉，去后台素材库手工删');
  }

  // ── 结论
  console.log('\n' + '─'.repeat(56));
  if (material.ok && draft.ok) {
    console.log('结论：素材与草稿两个接口都可用。');
    console.log('  `node scripts/wechat/draft.mjs <文章 id>` 可以直接送稿，');
    console.log('  标题、摘要、正文、封面、阅读原文全部自动填，你只需在后台点「发表」。');
    console.log('  freepublish（真正发布）仍不可用，那是官方明文回收的，人工点那一下跑不掉。');
  } else if (!material.ok && draft.ok) {
    console.log('结论：草稿接口通，素材接口不通。');
    console.log('  封面必须是永久素材的 media_id，所以还差一步。');
    console.log('  下一步可试临时素材 media/upload 拿到的 media_id 草稿接口收不收。');
  } else {
    console.log('结论：这条路走不通，个人主体的接口权限确实被限制了。');
    console.log('  文档表格没写限制，但实际调用以这次结果为准。');
    console.log('  退回 build.mjs 产出的 .md 或 .html，走后台导入或粘贴。');
  }
  console.log('结论请回填进 guides/WECHAT_SYNC.md，省得以后再查一遍。');
  console.log('─'.repeat(56) + '\n');
}

main().catch((error) => {
  console.error(`\n探测中断：${error.message}\n`);
  process.exit(1);
});
