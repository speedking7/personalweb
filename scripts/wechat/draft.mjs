#!/usr/bin/env node
/**
 * [INPUT]: 依赖 build.mjs 的 renderArticle 产出内联样式的正文 HTML 与元数据，
 *          依赖 api.mjs 与微信通信，依赖 config.json 的 blogBase 拼「阅读原文」
 * [OUTPUT]: 命令行入口。把一篇文章送进公众号草稿箱，人工在后台点「发表」
 * [POS]: scripts/wechat 的发布侧入口，与 build.mjs（产文件）并列。
 *        走到草稿箱为止是刻意的：freepublish 对个人主体已被官方回收，
 *        而公众号发布不可逆、正文发出去改不了，那一下本就该由人来点
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { renderArticle, readWechatUrl, UserFacingError } from './build.mjs';
import { buildStylesheet } from './styles.mjs';
import {
  loadCredentials, getAccessToken, uploadPermanentImage, deleteMaterial, postJson,
} from './api.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '../..');
const POSTS_DIR = join(REPO_ROOT, 'app/src/content/posts');
const INDEX_CSS = join(REPO_ROOT, 'app/src/index.css');
const CONFIG_PATH = join(HERE, 'config.json');

// 公众号后台对这几个字段有硬上限，超了接口直接拒绝。
// 提前在本地拦住，比让人等一次网络往返再看 errcode 强。
const TITLE_LIMIT = 32;
const DIGEST_LIMIT = 120;

class DraftError extends UserFacingError {}

function readPost(id) {
  const path = join(POSTS_DIR, `${id}.md`);
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
}

/**
 * 送稿前的本地检查。
 * 全部检查完再一次性报，不要让人改一条跑一次。
 */
function precheck(id, meta, html, force) {
  const problems = [];

  const title = meta.title ?? '';
  if (!title) problems.push('frontmatter 没有 title');
  else if ([...title].length > TITLE_LIMIT) {
    problems.push(`标题 ${[...title].length} 字，超出公众号 ${TITLE_LIMIT} 字上限：${title}`);
  }

  const digest = meta.excerpt ?? '';
  if ([...digest].length > DIGEST_LIMIT) {
    problems.push(`摘要 ${[...digest].length} 字，超出公众号 ${DIGEST_LIMIT} 字上限，需裁剪 frontmatter 的 excerpt`);
  }

  if (!meta.coverImage) {
    problems.push('frontmatter 没有 cover，图文消息的封面是必填项');
  } else {
    const coverPath = join(REPO_ROOT, 'app/public', meta.coverImage);
    if (!existsSync(coverPath)) problems.push(`封面文件不存在：${coverPath}`);
  }

  // 官方文档对 content 的说明自相矛盾（既写「不超过 2kb」又写「小于 1M」），
  // 按宽的那个来，真超了接口会拒，不在本地擅自加严
  const bytes = Buffer.byteLength(html, 'utf8');
  if (bytes > 1024 * 1024) problems.push(`正文 ${(bytes / 1024 / 1024).toFixed(2)}M，超出 1M 上限`);

  const already = readWechatUrl(readPost(id) ?? '');
  if (already && !force) {
    problems.push(
      `这篇的 frontmatter 已有 wechat 链接，多半已经发过了：\n` +
      `      ${already}\n` +
      `      确实要再送一次草稿就加 --force`
    );
  }

  if (problems.length > 0) {
    throw new DraftError(
      `《${id}》还不能送稿：\n\n` + problems.map((p) => `    · ${p}`).join('\n')
    );
  }
}

/**
 * 在草稿箱里找这篇文章对应的草稿。
 *
 * 判据用 `content_source_url` 而非标题：那个字段是 `blogBase/#/blog/{id}`，
 * 与文章一一对应，改标题也不会漂——跟「用路由形状而非域名识别站内链接」是同一个道理，
 * 拿一个会变的东西当判据，等于在最需要认准的时候认错。
 *
 * 分页扫完整个草稿箱：batchget 一次最多 20 条，只看第一页会在草稿攒多之后悄悄漏掉目标。
 */
async function findExistingDraft(accessToken, id, config) {
  const sourceUrl = `${config.blogBase}/#/blog/${id}`;
  const matches = [];

  for (let offset = 0; ; offset += 20) {
    const page = await postJson('/cgi-bin/draft/batchget', accessToken, {
      offset, count: 20, no_content: 1,
    });
    const items = page.item ?? [];
    for (const item of items) {
      const article = item.content?.news_item?.[0];
      if (article?.content_source_url === sourceUrl) {
        matches.push({ mediaId: item.media_id, thumbMediaId: article.thumb_media_id, title: article.title });
      }
    }
    if (items.length < 20 || offset + 20 >= (page.total_count ?? 0)) break;
  }

  if (matches.length === 0) {
    throw new DraftError(
      `草稿箱里没有《${id}》对应的草稿（按「阅读原文」= ${sourceUrl} 匹配）。\n` +
      `    可能它已经发表了（发表后就不在草稿箱里），也可能压根没送过。\n` +
      `    去掉 --update 就是新建一篇。`
    );
  }
  if (matches.length > 1) {
    throw new DraftError(
      `草稿箱里有 ${matches.length} 条草稿指向《${id}》，不知道该更新哪一条：\n` +
      matches.map((m) => `      · ${m.title}（${m.mediaId}）`).join('\n') +
      `\n    先去后台删掉多余的那些。`
    );
  }
  return matches[0];
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const update = args.includes('--update');
  const id = args.find((a) => !a.startsWith('--'))?.replace(/\.md$/, '');

  if (!id) {
    console.log('用法：node scripts/wechat/draft.mjs <文章 id> [--update] [--force]');
    console.log('');
    console.log('把文章送进公众号草稿箱，标题/摘要/正文/封面/阅读原文全部填好，');
    console.log('你只需要去后台点「发表」——freepublish 对个人主体已被官方回收，');
    console.log('而且公众号发布不可逆，那一下本就该由人来点。');
    console.log('');
    console.log('  --update  刷新草稿箱里已有的那篇（样式改了之后用），封面沿用不重传');
    console.log('  --force   这篇 frontmatter 已有 wechat 链接、多半发过了，仍要送稿');
    process.exit(1);
  }

  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  const stylesheet = buildStylesheet(INDEX_CSS);

  // 链接改写与出厂不变量都在这一步跑完；有坏链接会在联网之前就中断
  const { meta, html, internalLinks } = renderArticle(id, { config, stylesheet });
  // --update 下不查 wechat 字段：那条检查防的是「已发过还重复送稿」，
  // 而 update 是明确要改草稿箱里那一篇，两回事
  precheck(id, meta, html, force || update);

  const credentials = loadCredentials();
  const accessToken = await getAccessToken(credentials);
  console.log('已取得 access_token');

  const article = {
    title: meta.title,
    author: '',
    digest: meta.excerpt ?? '',
    content: html,
    content_source_url: `${config.blogBase}/#/blog/${id}`,
    need_open_comment: 0,
    only_fans_can_comment: 0,
  };

  let draftMediaId;

  if (update) {
    const existing = await findExistingDraft(accessToken, id, config);
    console.log(`找到草稿：${existing.title}`);

    // 封面沿用草稿箱里那张，不重传。重传等于在素材库留一份内容相同的副本，
    // 而素材库有配额上限；要换封面就删掉草稿重新送稿。
    await postJson('/cgi-bin/draft/update', accessToken, {
      media_id: existing.mediaId,
      index: 0,
      articles: { ...article, thumb_media_id: existing.thumbMediaId },
    });
    draftMediaId = existing.mediaId;
    console.log('已更新，封面沿用原来那张（未重传）');
  } else {
    const coverPath = join(REPO_ROOT, 'app/public', meta.coverImage);
    const cover = await uploadPermanentImage(accessToken, coverPath);
    console.log(`封面已上传：${meta.coverImage}`);

    try {
      const created = await postJson('/cgi-bin/draft/add', accessToken, {
        articles: [{ ...article, thumb_media_id: cover.mediaId }],
      });
      draftMediaId = created.media_id;
    } catch (error) {
      // 草稿没建成，刚传的封面就是垃圾。不回滚的话素材库会随每次失败堆积，
      // 而素材库有配额上限。
      await deleteMaterial(accessToken, cover.mediaId, true);
      console.error('草稿创建失败，已回滚刚上传的封面素材。');
      throw error;
    }
  }

  console.log('');
  console.log('─'.repeat(60));
  console.log(`《${meta.title}》${update ? '已刷新' : '已进草稿箱'}`);
  console.log('─'.repeat(60));
  console.log('');
  if (update) {
    console.log('注意：正文被整篇替换成了本次生成的版本，');
    console.log('      你此前在后台对这篇做过的手工调整会被覆盖掉。');
    console.log('');
  }
  console.log(update ? '现在草稿里是：' : '已经替你填好的：');
  console.log(`  标题      ${meta.title}`);
  console.log(`  摘要      ${meta.excerpt ?? '(空)'}`);
  console.log(`  封面      ${update ? '沿用草稿里原有的那张' : meta.coverImage}`);
  console.log(`  阅读原文  ${config.blogBase}/#/blog/${id}`);
  console.log(`  正文      ${(Buffer.byteLength(html, 'utf8') / 1024).toFixed(1)}KB，样式已内联`);

  if (internalLinks.length > 0) {
    console.log('');
    console.log(`正文里有 ${internalLinks.length} 处公众号内链，发表前在后台预览里点一下确认：`);
    for (const { text, href } of internalLinks) {
      console.log(`  · 「${text}」→ ${href}`);
    }
  }

  console.log('');
  console.log('接下来（这几步只能人工）：');
  console.log('  1. 打开公众号后台的草稿箱，找到这篇');
  console.log('  2. 预览，确认排版与链接');
  console.log('  3. 点「发表」——发出去之后正文不可修改，阅读原文更是永久锁死');
  console.log('  4. 复制文章的永久链接，回填进');
  console.log(`     ${join(POSTS_DIR, id + '.md')}  的 frontmatter：`);
  console.log('     wechat: https://mp.weixin.qq.com/s/...');
  console.log('');
  console.log(`草稿 media_id（要撤回时用得上）：${draftMediaId}`);
  console.log('');
}

main().catch((error) => {
  console.error('');
  console.error(error instanceof UserFacingError ? error.message : `失败：${error.message}`);
  if (!(error instanceof UserFacingError)) console.error(error.stack);
  console.error('');
  process.exit(1);
});
