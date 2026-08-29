#!/usr/bin/env node
/**
 * [INPUT]: 依赖 scripts/wechat/.env 的 WECHAT_APPID 与 WECHAT_APPSECRET；
 *          依赖 app/public/covers 下任意一张图作为封面素材样本
 * [OUTPUT]: 命令行诊断。逐步探测 access_token → 素材上传 → 新增草稿，各步单独报结论
 * [POS]: scripts/wechat 的一次性诊断工具，不参与 build 流程。
 *        存在的理由：官方文档说 draft/add 与 add_material 对公众号一律可用、
 *        不写认证要求，而开放社区有大量个人主体账号实测报 48001。
 *        文档与实测冲突时，只有拿自己的账号跑一次才算数——这个脚本就是那一次
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '../..');
const ENV_PATH = join(HERE, '.env');
const COVERS_DIR = join(REPO_ROOT, 'app/public/covers');

const API = 'https://api.weixin.qq.com';

// ─────────────────────────────────────────────────────────────
// 凭据
//
// 放 scripts/wechat/.env 而非 server/.env：后者是飞书代理运行期的 app_secret 归处，
// 公众号凭据与网站运行期毫无关系。两者唯一的共同点是都绝不能带 VITE_ 前缀——
// 那个前缀的含义就是「交给浏览器」。.gitignore 的 **/.env 已经挡住这个文件。
// ─────────────────────────────────────────────────────────────
function loadEnv() {
  if (!existsSync(ENV_PATH)) {
    fail(
      `没有 ${ENV_PATH}。\n` +
      `  去公众号后台「设置与开发 → 基本配置」拿 AppID 与 AppSecret，建这个文件：\n\n` +
      `    WECHAT_APPID=wx????????????????\n` +
      `    WECHAT_APPSECRET=????????????????????????????????\n\n` +
      `  AppSecret 只显示一次，错过要重置。该文件已被 .gitignore 挡住，不会入库。`
    );
  }
  const env = {};
  for (const line of readFileSync(ENV_PATH, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (match) env[match[1]] = match[2];
  }
  if (!env.WECHAT_APPID || !env.WECHAT_APPSECRET) {
    fail(`${ENV_PATH} 里缺 WECHAT_APPID 或 WECHAT_APPSECRET。`);
  }
  return env;
}

function fail(message) {
  console.error(`\n${message}\n`);
  process.exit(1);
}

/** 微信的错误码在 HTTP 200 的响应体里，不看 status 只看 errcode */
async function call(path, init) {
  const res = await fetch(`${API}${path}`, init);
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { _raw: text, _status: res.status };
  }
}

function explain(errcode) {
  const known = {
    40013: 'AppID 不合法——检查有没有抄错，或用成了小程序/开放平台的 AppID',
    40125: 'AppSecret 不合法——检查有没有抄错，或已被重置',
    40164: '调用方 IP 不在白名单里。后台「设置与开发 → 基本配置 → IP 白名单」加上报错里那个 IP',
    48001: 'API 功能未授权。这正是社区反馈里个人主体账号会撞上的那个码',
    45009: '接口调用超过限额',
    89503: '需要管理员在后台确认此次调用',
  };
  return known[errcode] ?? null;
}

// ─────────────────────────────────────────────────────────────
// 探测
// ─────────────────────────────────────────────────────────────
let step = 0;
function announce(title) {
  step += 1;
  console.log(`\n[${step}] ${title}`);
}

function report(result) {
  if (result.errcode) {
    const hint = explain(result.errcode);
    console.log(`    ✗ errcode ${result.errcode}：${result.errmsg ?? ''}`);
    if (hint) console.log(`      ${hint}`);
    return false;
  }
  return true;
}

async function main() {
  const env = loadEnv();
  console.log('\n探测公众号接口权限。文档说这些接口对公众号一律可用且不写认证要求，');
  console.log('而开放社区有大量个人主体账号实测报 48001。以本次实跑为准。');

  // ── 1. access_token：先撞 IP 白名单，撞不过后面都没意义
  announce('获取 access_token');
  const token = await call(
    `/cgi-bin/token?grant_type=client_credential&appid=${env.WECHAT_APPID}&secret=${env.WECHAT_APPSECRET}`
  );
  if (!report(token)) {
    fail('拿不到 access_token，后面的探测无从谈起。先解决上面那条。');
  }
  console.log('    ✓ 拿到了');
  const accessToken = token.access_token;

  // ── 2. 永久素材：draft/add 的封面字段要永久素材的 media_id，这一步过不去草稿就建不成
  announce('上传永久素材（图文封面必须是永久素材的 media_id）');
  const covers = existsSync(COVERS_DIR)
    ? readdirSync(COVERS_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f))
    : [];
  if (covers.length === 0) fail(`${COVERS_DIR} 下没有找到图片，无法做这一步探测。`);
  const coverPath = join(COVERS_DIR, covers[0]);
  console.log(`    用 ${covers[0]} 试`);

  const form = new FormData();
  form.append('media', new Blob([readFileSync(coverPath)], { type: 'image/jpeg' }), covers[0]);
  const material = await call(`/cgi-bin/material/add_material?access_token=${accessToken}&type=image`, {
    method: 'POST',
    body: form,
  });
  const materialOk = report(material);
  if (materialOk) console.log(`    ✓ media_id: ${material.media_id}`);

  // ── 3. 新增草稿：即使上一步失败也试一次，好区分「素材不让传」与「草稿不让建」
  announce('新增草稿');
  if (!materialOk) {
    console.log('    素材没传上去，用一个假 media_id 试——目的是分辨究竟是哪一步被拦：');
    console.log('    若这里报 48001，说明草稿接口本身没权限；若报素材相关的错，说明草稿接口是通的。');
  }
  const draft = await call(`/cgi-bin/draft/add?access_token=${accessToken}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      articles: [
        {
          title: '接口权限探测（可删）',
          author: '',
          digest: '这是一次接口权限探测产生的草稿，确认结果后请删除。',
          content: '<p>探测用草稿。若你在后台看到它，说明 draft/add 可用。</p>',
          content_source_url: '',
          thumb_media_id: materialOk ? material.media_id : 'PROBE_INVALID_MEDIA_ID',
          need_open_comment: 0,
          only_fans_can_comment: 0,
        },
      ],
    }),
  });
  const draftOk = report(draft);
  if (draftOk) console.log(`    ✓ media_id: ${draft.media_id}`);

  // ── 4. 清理：探测不该在别人的草稿箱里留垃圾
  if (draftOk) {
    announce('删除刚建的探测草稿');
    const del = await call(`/cgi-bin/draft/delete?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ media_id: draft.media_id }),
    });
    if (report(del)) console.log('    ✓ 已删除');
    else console.log('    ⚠ 没删掉，去后台草稿箱手工删掉那条「接口权限探测（可删）」');
  }
  if (materialOk) {
    announce('删除刚传的探测素材');
    const del = await call(`/cgi-bin/material/del_material?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ media_id: material.media_id }),
    });
    if (report(del)) console.log('    ✓ 已删除');
    else console.log('    ⚠ 没删掉，去后台素材库手工删');
  }

  // ── 结论
  console.log('\n' + '─'.repeat(56));
  if (materialOk && draftOk) {
    console.log('结论：素材与草稿两个接口都可用。');
    console.log('  这条路走得通——工具可以把文章直接送进草稿箱，');
    console.log('  标题、摘要、正文、封面、阅读原文全部自动填，你只需在后台点「发表」。');
    console.log('  注意 freepublish（真正发布）仍然不可用，那是官方明文回收的，人工点那一下跑不掉。');
  } else if (!materialOk && draftOk) {
    console.log('结论：草稿接口通，素材接口不通。');
    console.log('  封面必须是永久素材的 media_id，所以还不能一步到位。');
    console.log('  下一步可以试临时素材 media/upload 拿到的 media_id 草稿接口收不收。');
  } else {
    console.log('结论：这条路走不通，个人主体的接口权限确实被限制了。');
    console.log('  文档表格没写限制，但实际调用以这次结果为准。');
    console.log('  维持现状：build.mjs 产出 .md 或 .html，后台导入或粘贴。');
  }
  console.log('把上面的结论回填进 guides/WECHAT_SYNC.md，省得以后再查一遍。');
  console.log('─'.repeat(56) + '\n');
}

main().catch((error) => fail(`探测中断：${error.message}\n${error.stack}`));
