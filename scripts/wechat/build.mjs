#!/usr/bin/env node
/**
 * [INPUT]: 依赖 app/src/lib/markdown.ts 的 parseBlogMetadata 解析标准 frontmatter，
 *          依赖同目录 links.mjs 改写链接、styles.mjs 提供样式，依赖 marked/juice 渲染与内联
 * [OUTPUT]: 对外提供 renderArticle（供测试驱动真管线）与 readWechatUrl；
 *          直接执行时为命令行入口，产出 out/{id}.html 与终端发布清单
 * [POS]: scripts/wechat 的编排层。自身不含格式规则——frontmatter 规则在 markdown.ts，
 *        样式在 index.css，链接规则在 links.mjs；它负责把三处串起来，并在出厂前做一道不变量校验
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { Marked } from 'marked';
import juice from 'juice';
import { parseBlogMetadata } from '../../app/src/lib/markdown.ts';
import { createLinkRewriter, escapeHtml, WECHAT_URL_PATTERN } from './links.mjs';
import { buildStylesheet } from './styles.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '../..');
const POSTS_DIR = join(REPO_ROOT, 'app/src/content/posts');
const INDEX_CSS = join(REPO_ROOT, 'app/src/index.css');
const OUT_DIR = join(HERE, 'out');
const CONFIG_PATH = join(HERE, 'config.json');

// ─────────────────────────────────────────────────────────────
// frontmatter 里的公众号链接
//
// 刻意不加进 parseBlogMetadata：那份契约服务于前端渲染，而 wechat 是发布侧的元数据，
// 前端一个字段都不消费它。标准字段仍走 parseBlogMetadata，规则保持一份。
// ─────────────────────────────────────────────────────────────
export function readWechatUrl(markdown) {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return null;
  // 容忍行尾注释与前导空白：YAML 允许，站主也容易这么写
  const match = frontmatter[1].match(/^[ \t]*wechat:[ \t]*["']?([^"'#\s]+)["']?[ \t]*(?:#.*)?$/m);
  return match ? match[1] : null;
}

function readPostFromDisk(id) {
  const path = join(POSTS_DIR, `${id}.md`);
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
}

function listPostIds() {
  return readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.slice(0, -3))
    .sort();
}

// ─────────────────────────────────────────────────────────────
// 出厂不变量
// ─────────────────────────────────────────────────────────────
/**
 * 产物里每一个 <a href> 都必须指向 mp.weixin.qq.com，否则抛错。
 *
 * 这是「事后不变量」，与 links.mjs 的「事前分类」互补且不可互相取代。
 * 分类负责把链接分流并给出精确诊断，不变量负责保证分流真的做到了——
 * 无论是 wechat 字段回填时贴错地址、blogBase 配错、正文里直接写裸 HTML 的 <a> 绕过 renderer，
 * 还是将来 marked 新增了别的产链接的 token 类型，最终都被这一条判断接住。
 *
 * 之所以值得多花这一道：微信正文里非公众号域名的链接点不动，
 * 而公众号发布后正文不可修改——这类错误没有补救机会，只能挡在出厂前。
 *
 * 注意这里只认双引号包裹的 href，靠的是 juice(cheerio) 在序列化时已把属性统一归一化——
 * 单引号、无引号、大写 HREF 的写法进来时长什么样都无所谓，出去时都是双引号。
 * **换掉 juice 时这条正则必须一起改**，否则它会安静地失效，而失效的安全网比没有更危险。
 */
function assertOnlyWechatLinks(html) {
  const offenders = [];
  for (const match of html.matchAll(/<a\s[^>]*?href\s*=\s*"([^"]*)"/gi)) {
    if (!WECHAT_URL_PATTERN.test(match[1])) offenders.push(match[1]);
  }
  if (offenders.length > 0) {
    throw new BadOutputError(offenders);
  }
}

/**
 * markdown 通道的同一道不变量。
 *
 * 公众号后台的「文档导入」直接吃 markdown，那条通道同样会被坏链接穿过，
 * 所以两种产物各有一道，不能只守 HTML 那边。
 *
 * 走 lexer 而非正则扫全文：围栏代码块里的 `[文字](地址)` 不是链接，
 * 正则分不清而 lexer 分得清——本项目的文章里正好有展示 markdown 写法的代码块。
 * 裸 HTML 的 <a> 也要查，markdown 允许内嵌 HTML；这里引号要兼容单双引号，
 * 因为没有 juice 那一步归一化。
 */
function assertOnlyWechatLinksInMarkdown(markdown) {
  const offenders = [];
  const lexer = new Marked({
    walkTokens: (token) => {
      if (token.type === 'link' && !WECHAT_URL_PATTERN.test(token.href ?? '')) {
        offenders.push(token.href ?? '');
      }
      if (token.type === 'html') {
        for (const match of (token.raw ?? '').matchAll(/<a\s[^>]*?href\s*=\s*["']([^"']*)["']/gi)) {
          if (!WECHAT_URL_PATTERN.test(match[1])) offenders.push(match[1]);
        }
      }
    },
  });
  lexer.parse(markdown);
  if (offenders.length > 0) {
    throw new BadOutputError(offenders);
  }
}

/**
 * 用户侧条件：要改的是文章或配置，不是代码。CLI 只打 message，不打堆栈——
 * 堆栈会让人以为工具坏了，而不是文件该改一下。
 *
 * 存在的理由是 OCP，不是整洁。先前 CLI 用 `instanceof` 白名单逐个列举，
 * 每新增一种用户侧错误都要回头改 main()，而忘了改不会报错，
 * 只会安静地把「这篇得改稿」呈现成崩溃——这是最难被测试发现的一种退化
 * （测试断言的是 message 含某关键词，压根不关心走了哪个分支）。
 * 这个模式已经栽过三次：image 抛裸 Error、FrontmatterDriftError 初版、找不到文章。
 * 新增这类错误继承本类即可。
 */
export class UserFacingError extends Error {
  constructor(message) {
    super(message);
    this.name = new.target.name;
  }
}

/** 两份 frontmatter 正则漂移了 */
export class FrontmatterDriftError extends UserFacingError {
  constructor(id, isCrlf) {
    super(
      `《${id}》的 frontmatter 没有被 parseBlogMetadata 剥掉，元数据会跟着正文一起出厂。\n` +
      (isCrlf
        // 实测而非猜测：换行符一判就知道，指错方向会让人跑完 dos2unix 发现毫无变化后卡住
        ? `  这个文件用的是 CRLF 换行，而 app/src/lib/markdown.ts 的边界正则只认 \\n。\n` +
          `  用 dos2unix 转一下该文件，或给 markdown.ts 那份正则补上 \\r?。`
        : `  这个文件不是 CRLF，说明两份 frontmatter 边界正则以别的方式漂移了。\n` +
          `  对照 build.mjs 的 readWechatUrl 与 app/src/lib/markdown.ts:18 两处的边界写法。`)
    );
  }
}

/** 文章 id 打错了 */
export class PostNotFoundError extends UserFacingError {
  constructor(id, availableIds) {
    super(
      [
        `posts/ 里没有《${id}》。`,
        '',
        '  可用的文章 id：',
        ...availableIds.map((available) => `    · ${available}`),
      ].join('\n')
    );
  }
}

export class BadOutputError extends UserFacingError {
  constructor(offenders) {
    const lines = [
      '产物里出现了指向站外的链接，已中止。公众号正文只有 mp.weixin.qq.com 的链接点得动：',
      '',
      ...[...new Set(offenders)].map((href) => `    · ${href || '(空地址)'}`),
      '',
      '  常见原因：某篇文章 frontmatter 的 wechat: 填成了博客地址或占位符；',
      '  config.json 的 blogBase 与文章里写的地址对不上；',
      '  或正文里直接写了 HTML 的 <a> 标签（那会绕过链接改写）。',
    ];
    super(lines.join('\n'));
  }
}

// ─────────────────────────────────────────────────────────────
// 渲染
// ─────────────────────────────────────────────────────────────
/** frontmatter 的键，用于识别「这段不是分隔线，是没被剥掉的元数据」 */
const FRONTMATTER_KEY = /^[ \t]*(?:title|date|cover|excerpt|category|tags|readTime|wechat):/m;

/**
 * 判断正文开头是否还残留着 frontmatter。
 *
 * 两处都不能放宽，各自对应一种误判：
 *
 * 其一，不能只看「以 --- 开头」——分隔线也长这样，而本项目每篇文章有七到九处分隔线，
 * 写到正文第一行只是时间问题。误判的代价不只是拦错，是给出一句指错方向的诊断：
 * 让人去跑 dos2unix，跑完毫无变化然后卡住。真漂移的特征是 frontmatter 的**键**紧跟其后。
 *
 * 其二，只看**开头**，不在全文里搜。文章正文完全可能有一段展示 frontmatter 写法的代码块
 * （BLOG_PLAYBOOK 里就有一段），全文搜索会把那段当成漂移证据。
 */
function hasLeftoverFrontmatter(content) {
  const match = content.trimStart().match(/^---\r?\n([\s\S]{0,500})/);
  return match !== null && FRONTMATTER_KEY.test(match[1]);
}

/**
 * 把一篇文章渲染成可粘贴的正文 HTML。
 *
 * 导出而非内联在 CLI 里，是为了让测试驱动真实管线——
 * 链接改写、juice 内联、文末清单三者的接缝处只有在这一层才看得见。
 *
 * @param {string} id
 * @param {object} deps
 * @param {object} deps.config      blogBase 与 collectionUrl
 * @param {object} deps.stylesheet  buildStylesheet 的返回值
 * @param {(id: string) => string | null} [deps.readPost]  注入点，测试用来避开真实发布状态
 */
export function renderArticle(id, { config, stylesheet, readPost = readPostFromDisk, listIds = listPostIds }) {
  const raw = readPost(id);
  if (raw === null) {
    throw new PostNotFoundError(id, listIds());
  }

  const meta = parseBlogMetadata(raw, id);

  // frontmatter 边界的正则有两份：markdown.ts 那份服务前端契约，不该为发布侧字段改动；
  // 本文件的 readWechatUrl 是另一份。与其复用（那要么导出前端内部实现、要么把 wechat
  // 塞进前端契约，两条都不该走），不如让两份互相对账。
  // 一旦漂移，症状是 frontmatter 被当正文渲染出去——标题、封面、摘要同时失效，
  // 元数据以一个二级标题的形态印在公众号正文开头，而公众号发布后正文不可修改。
  // 已知的触发方式是 CRLF 换行（markdown.ts 的边界正则只认 \n），但这条断言接住的是
  // 「任何一份漂移」，不只是这一次。
  if (hasLeftoverFrontmatter(meta.content)) {
    throw new FrontmatterDriftError(id, raw.includes('\r\n'));
  }

  const deps = {
    blogBase: config.blogBase,
    collectionUrl: config.collectionUrl,
    lookupPost: (targetId) => {
      const target = readPost(targetId);
      return target === null
        ? { exists: false, url: null }
        : { exists: true, url: readWechatUrl(target) };
    },
  };

  // 两条通道各建一个实例：收集器是实例内的，共用一个会把 footnotes 收两遍。
  // 分流规则仍只有 links.mjs 的 classify 一份。
  const htmlRewriter = createLinkRewriter(deps);
  const body = new Marked({ renderer: htmlRewriter.renderer }).parse(meta.content);
  if (htmlRewriter.missing.length > 0) {
    throw new MissingLinkError(id, htmlRewriter.missing);
  }

  const mdRewriter = createLinkRewriter(deps);
  const mdBody = mdRewriter.rewriteMarkdown(meta.content);
  // 两条通道的 missing 理应一致；不一致就说明规则没真正共用，让它当场暴露而不是产出半成品
  if (mdRewriter.missing.length > 0) {
    throw new MissingLinkError(id, mdRewriter.missing);
  }

  const { footnotes, internalLinks } = htmlRewriter;

  const article = `<div class="prose">\n${body}${renderFootnotes(footnotes)}</div>`;
  const inlined = juice.inlineContent(article, stylesheet.css);
  assertOnlyWechatLinks(inlined);

  const markdown = `${mdBody}${renderFootnotesMarkdown(footnotes)}`;
  assertOnlyWechatLinksInMarkdown(markdown);

  return { meta, html: inlined, markdown, footnotes, internalLinks };
}

/**
 * 文末「文中链接」区。
 * 微信会丢弃非 mp.weixin.qq.com 的链接地址，正文里留着 <a> 只会让读者以为能点，
 * 因此外链一律降级为文字，地址集中列在文末供长按复制。
 */
function renderFootnotes(footnotes) {
  if (footnotes.length === 0) return '';
  const items = footnotes
    .map(({ text, href }) => `<li>${text ? `${escapeHtml(text)}：` : ''}${escapeHtml(href)}</li>`)
    .join('\n');
  return `\n<h2>文中链接</h2>\n<ul>\n${items}\n</ul>\n`;
}

/**
 * 同一份文末清单的 markdown 形态，供导入通道使用。
 *
 * 地址用反引号锁成行内代码：裸露的地址会被 GFM 的 autolink 变回链接，
 * 导入公众号后就成了一个点不动的可点样式——文末清单存在的意义恰恰是「这个点不动，请复制」。
 */
function renderFootnotesMarkdown(footnotes) {
  if (footnotes.length === 0) return '';
  const items = footnotes.map(({ text, href }) => `- ${text ? `${text}：` : ''}\`${href}\``).join('\n');
  return `\n\n## 文中链接\n\n${items}\n`;
}

/**
 * 产物外壳。
 *
 * 页面上除正文外不放任何可见内容——使用方式是 Ctrl+A 全选后复制，
 * 多一行说明文字就会被一起粘进公众号。预览样式全部挂在 body 上、不另设容器元素：
 * 浏览器复制富文本时会把选区内元素的计算样式序列化进 style 属性，
 * 多一层 div 就多一个会被带走的祖先（它的 max-width/padding 会给公众号正文套上一个壳）。
 * body 本身一般不会被序列化进片段，因此这是最省事也最安全的写法。
 */
function wrapPage(title, articleHtml) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
  body { max-width: 677px; margin: 24px auto; padding: 0 16px; background: #fff; }
</style>
</head>
<body>${articleHtml}</body>
</html>
`;
}

// ─────────────────────────────────────────────────────────────
// 报错
// ─────────────────────────────────────────────────────────────
/**
 * 把同一篇文章的多处引用文字合成一句话。
 * 同一措辞出现多次时计数而非重复罗列，例如：「第一篇」2 处。
 */
function describeMentions(texts) {
  const counts = new Map();
  for (const text of texts) {
    counts.set(text, (counts.get(text) ?? 0) + 1);
  }
  return [...counts]
    .map(([text, count]) => (count > 1 ? `「${text}」${count} 处` : `「${text}」`))
    .join('、');
}

/** 按 kind 归组，返回 Map<key, {…, texts: string[]}> */
function groupBy(items, keyOf) {
  const grouped = new Map();
  for (const item of items) {
    const key = keyOf(item);
    if (!grouped.has(key)) grouped.set(key, { ...item, texts: [] });
    grouped.get(key).texts.push(item.text);
  }
  return grouped;
}

export class MissingLinkError extends UserFacingError {
  constructor(id, missing) {
    const lines = [`《${id}》无法生成，正文里的链接有以下问题：`, ''];
    const of = (kind) => missing.filter((m) => m.kind === kind);

    // 尚未发布：读者要知道的是「还差哪几篇」，而不是「有几处引用」，
    // 同一篇被引四次仍然只是一篇待发布的文章。
    const unpublished = groupBy(of('article'), (m) => m.id);
    if (unpublished.size > 0) {
      lines.push(`  尚未发布到公众号的文章（${unpublished.size} 篇）：`);
      for (const [targetId, { texts }] of unpublished) {
        lines.push(`    · ${targetId}（正文里写作 ${describeMentions(texts)}）`);
      }
      lines.push('  先把这些发到公众号，把拿到的永久链接回填进各自 frontmatter 的 wechat: 字段，再重跑。');
      lines.push('');
    }

    // id 写错与尚未发布是两回事：指使站主去发一篇根本不存在的文章，只会让人白找一圈。
    const notFound = groupBy(of('noSuchPost'), (m) => m.id);
    if (notFound.size > 0) {
      lines.push('  posts/ 里没有这些 id，链接八成写错了：');
      for (const [targetId, { texts }] of notFound) {
        lines.push(`    · ${targetId}（正文里写作 ${describeMentions(texts)}）`);
      }
      lines.push('');
    }

    for (const item of of('badWechatUrl')) {
      lines.push(`  ${item.id} 的 wechat: 字段不是公众号链接：${item.url}`);
      lines.push('    公众号永久链接形如 https://mp.weixin.qq.com/s/…，回填时可能贴错了。');
      lines.push('');
    }

    // 长得像文章页却没被识别：blogBase 配错时全篇互指会一起掉进这一类，
    // 若不拦住，产出的是「互指全部消失但 exit 0」的成品。
    // 按地址归并——blogBase 一配错就是满篇，逐处罗列只会把真正的原因淹掉。
    const unmatched = groupBy(of('unmatchedBlogLink'), (m) => m.url);
    if (unmatched.size > 0) {
      lines.push(`  这些站内地址没被识别为文章或列表页（${unmatched.size} 个）：`);
      for (const [url, { texts }] of unmatched) {
        lines.push(`    · ${url}（写作 ${describeMentions(texts)}）`);
      }
      lines.push('    对照 scripts/wechat/config.json 的 blogBase 是否与正文里写的地址完全一致（尾斜杠也算），');
      lines.push('    以及该地址是否形如 /#/blog/<文章 id> 或 /#/blog。');
      lines.push('    若这确实是别处站点的地址，说明它的路由形状与本站撞了——');
      lines.push('    把那个链接改写成正文直述即可（反正外链在公众号里也点不动）。');
      lines.push('');
    }

    for (const item of of('unsupportedScheme')) {
      lines.push(`  公众号里没有等价物的链接：${item.url || '(空地址)'}（写作「${item.text}」）`);
      lines.push('    先检查是不是漏写了 https:// 前缀——这比下面两种常见得多。');
      lines.push('    另外页内锚点在公众号里失效（id 属性会被微信整个删掉），mailto 与空链接同样点不动，');
      lines.push('    那两类需要人工改稿，改成正文直述或外链。');
      lines.push('');
    }

    // 图片与链接一样走 missing：它是用户侧条件而非程序异常，
    // 抛异常会穿过 marked 被包上一句「请向 markedjs 提 issue」，把改稿需求伪装成崩溃。
    const images = of('bodyImage');
    if (images.length > 0) {
      lines.push(`  正文里有 ${images.length} 张图片，本工具不处理：`);
      for (const item of images) {
        lines.push(`    · ${item.url}${item.text ? `（alt「${item.text}」）` : ''}`);
      }
      lines.push('    公众号正文的图片必须先传微信素材库、换成 mmbiz.qpic.cn 开头的地址，');
      lines.push('    否则在读者那里是一个红叉。要么把图片挪出正文（封面走后台单独上传，不算正文），');
      lines.push('    要么按 guides/WECHAT_SYNC.md 二节的说明扩展本工具。');
      lines.push('');
    }

    if (of('collection').length > 0) {
      lines.push('  正文引用了博客列表页，需要公众号合集链接。');
      lines.push('  去公众号后台建一个合集，把它的链接填进 scripts/wechat/config.json 的 collectionUrl。');
      lines.push('');
    }

    for (const item of of('badCollectionUrl')) {
      lines.push(`  config.json 的 collectionUrl 不是公众号链接：${item.url}`);
      lines.push('');
    }

    super(lines.join('\n').trimEnd());
  }
}

// ─────────────────────────────────────────────────────────────
// 发布清单
//
// 公众号后台有几个格子不在正文里，漏填在发布后无法补救（「阅读原文」尤其是永久锁死的）。
// ─────────────────────────────────────────────────────────────
function printChecklist({ meta, id, config, mdPath, htmlPath, footnotes, internalLinks }) {
  const excerpt = meta.excerpt ?? '';

  console.log('');
  console.log('─'.repeat(64));
  console.log('两种产物，选一种用（第一次两种都试一遍，把哪种好看写进 guides/WECHAT_SYNC.md）：');
  console.log('');
  console.log(`  导入  ${mdPath}`);
  console.log('        后台正文区「文档导入」→ 拖进去。排版走公众号默认样式');
  console.log('');
  console.log(`  粘贴  ${htmlPath}`);
  console.log('        浏览器打开 → 全选(Ctrl+A) → 复制 → 粘进编辑器。排版与博客一致');
  console.log('─'.repeat(64));
  console.log('');
  console.log('后台要填的格子：');
  console.log(`  标题      ${meta.title ?? id}`);
  console.log(`  摘要      ${excerpt}`);
  if (excerpt.length > 120) {
    console.log(`  ⚠ 摘要超出公众号 120 字上限 ${excerpt.length - 120} 字，需手工裁剪`);
  }
  console.log(`  封面      ${meta.coverImage ? join(REPO_ROOT, 'app/public', meta.coverImage) : '(frontmatter 未写 cover)'}`);
  console.log(`  阅读原文  ${config.blogBase}/#/blog/${id}`);
  console.log('            ↑ 这是整篇唯一能对外跳转的位置，发布后永久锁死，别漏填');

  if (internalLinks.length > 0) {
    console.log('');
    console.log(`导入或粘贴之后，核对这 ${internalLinks.length} 处链接还在不在（两条通道都还没在真账号上验证过）：`);
    for (const { text, href } of internalLinks) {
      console.log(`  · 「${text}」→ ${href}`);
    }
  }

  if (footnotes.length > 0) {
    console.log('');
    console.log(`文末已附「文中链接」${footnotes.length} 条（外链在公众号里点不动，故降级为文字）`);
  }

  console.log('');
  console.log('发布后：把公众号永久链接回填进');
  console.log(`  ${join(POSTS_DIR, id + '.md')}  的 frontmatter，加一行  wechat: https://mp.weixin.qq.com/s/...`);
  console.log('');
}

// ─────────────────────────────────────────────────────────────
// 入口
// ─────────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log('用法：node scripts/wechat/build.mjs <文章 id>');
    console.log('');
    console.log('可用的文章 id：');
    for (const id of listPostIds()) {
      console.log(`  ${id}${readWechatUrl(readPostFromDisk(id)) ? '  (已发公众号)' : ''}`);
    }
    process.exit(args.length === 0 ? 1 : 0);
  }

  const id = args[0].replace(/\.md$/, '');
  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  const stylesheet = buildStylesheet(INDEX_CSS);

  const { meta, html, markdown, footnotes, internalLinks } = renderArticle(id, { config, stylesheet });

  mkdirSync(OUT_DIR, { recursive: true });
  const htmlPath = join(OUT_DIR, `${id}.html`);
  const mdPath = join(OUT_DIR, `${id}.md`);
  writeFileSync(htmlPath, wrapPage(meta.title ?? id, html), 'utf8');
  writeFileSync(mdPath, markdown, 'utf8');

  console.log(`样式基线：从 index.css 取 ${stylesheet.baseRuleCount} 条 .prose 规则` +
    (stylesheet.droppedSelectors.length > 0
      ? `，丢弃 ${stylesheet.droppedSelectors.join('、')}`
      : '') +
    '（只作用于 .html 那份；.md 走公众号默认排版）');

  printChecklist({ meta, id, config, mdPath, htmlPath, footnotes, internalLinks });
}

// 仅在被直接执行时跑 CLI；被 import 时（测试）只取导出的函数
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  try {
    main();
  } catch (error) {
    console.error('');
    if (error instanceof UserFacingError) {
      console.error(error.message);
    } else {
      // 其余是预料之外的错误，留住 stack——否则 config.json 少个括号
      // 只会得到一句「Unexpected token }」，既没有文件名也没有行号
      console.error(`失败：${error.message}`);
      console.error(error.stack);
    }
    console.error('');
    process.exit(1);
  }
}
