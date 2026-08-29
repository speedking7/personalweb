/**
 * [INPUT]: 依赖 ./links.mjs 的 createLinkRewriter、./styles.mjs 的 buildStylesheet、
 *          ./build.mjs 的 renderArticle 与 readWechatUrl，依赖 marked 驱动 renderer
 * [OUTPUT]: 可执行测试，`node scripts/wechat/test.mjs`，失败时退出码非 0
 * [POS]: scripts/wechat 的唯一测试。分两层：链接分流的单元断言，
 *        以及经 renderArticle 驱动的真管线断言（juice 内联与出厂不变量只在那一层才看得见）。
 *        全部注入假文章，因此不读也不改真实文章的发布状态。
 *        存在的理由：链接分流错了不会在生成时报出来，要等文章发出去、读者点不动才暴露，
 *        而公众号正文发布后不可修改——这类错误没有补救机会
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { Marked } from 'marked';
import { createLinkRewriter } from './links.mjs';
import { buildStylesheet } from './styles.mjs';
import {
  renderArticle, readWechatUrl,
  UserFacingError, MissingLinkError, BadOutputError, FrontmatterDriftError, PostNotFoundError,
} from './build.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const INDEX_CSS = join(resolve(HERE, '../..'), 'app/src/index.css');

const BASE = 'https://blog.yingtongxue.cn';
const COLLECTION = 'https://mp.weixin.qq.com/mp/appmsgalbum?album_id=123';
const PUBLISHED_URL = 'https://mp.weixin.qq.com/s/FakeAbc123';

// 假文章库。已发布 / 未发布 / 回填错地址，三种状态各一篇。
const POSTS = {
  published: `---\ntitle: 已发布\nwechat: ${PUBLISHED_URL}\n---\n正文`,
  unpublished: '---\ntitle: 未发布\n---\n正文',
  badurl: `---\ntitle: 填错了\nwechat: ${BASE}/#/blog/published\n---\n正文`,
};
const readPost = (id) => POSTS[id] ?? null;
const lookupPost = (id) => {
  const raw = readPost(id);
  return raw === null ? { exists: false, url: null } : { exists: true, url: readWechatUrl(raw) };
};

/** 只跑链接分流层 */
function render(markdown, { collectionUrl = COLLECTION, blogBase = BASE } = {}) {
  const rewriter = createLinkRewriter({ blogBase, collectionUrl, lookupPost });
  const html = new Marked({ renderer: rewriter.renderer }).parse(markdown);
  return { html, ...rewriter };
}

/** 跑完整管线：分流 → juice 内联 → 出厂不变量 */
const STYLESHEET = buildStylesheet(INDEX_CSS);
function pipeline(markdown, { collectionUrl = COLLECTION, blogBase = BASE } = {}) {
  const posts = { ...POSTS, __main: `---\ntitle: 测试文\n---\n${markdown}` };
  return renderArticle('__main', {
    config: { blogBase, collectionUrl },
    stylesheet: STYLESHEET,
    readPost: (id) => posts[id] ?? null,
  });
}

let pass = 0, fail = 0;
async function check(name, fn) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    pass++;
  } catch (e) {
    console.log(`  ✗ ${name}\n      ${e.message}`);
    fail++;
  }
}
function eq(actual, expected, what) {
  if (actual !== expected) throw new Error(`${what}: 期望 ${expected}，实际 ${actual}`);
}
function has(haystack, needle, what) {
  if (!haystack.includes(needle)) throw new Error(`${what}: 没找到 ${needle}`);
}
function hasNot(haystack, needle, what) {
  if (haystack.includes(needle)) throw new Error(`${what}: 不该出现 ${needle}`);
}
/** 断言中断，并且报错文案里含有能指导下一步的关键词 */
function throws(fn, needle, what) {
  let error = null;
  try { fn(); } catch (e) { error = e; }
  if (!error) throw new Error(`${what}: 预期中断，但顺利产出了`);
  if (!error.message.includes(needle)) {
    throw new Error(`${what}: 报错里没有「${needle}」，实际是 ${error.message.split('\n')[0]}`);
  }
  return error;
}

console.log('\n站内互指（公众号里唯一点得动的链接）');

await check('指向已发布文章的互指，换成公众号永久链接', async () => {
  const { html, missing } = render(`看[第一篇](${BASE}/#/blog/published)`);
  has(html, `href="${PUBLISHED_URL}"`, '改写结果');
  hasNot(html, 'blog.yingtongxue.cn', '博客地址残留');
  eq(missing.length, 0, 'missing 条数');
});

await check('目标文章尚未发布时记入 missing，不产出链接', async () => {
  const { html, missing } = render(`看[上一篇](${BASE}/#/blog/unpublished)`);
  eq(missing.length, 1, 'missing 条数');
  eq(missing[0].kind, 'article', 'missing 类型');
  hasNot(html, '<a', '不该留下任何 a 标签');
});

await check('id 写错时报「没这篇」，而不是指使人去发一篇不存在的文章', async () => {
  const { missing } = render(`看[第一篇](${BASE}/#/blog/typo-id)`);
  eq(missing.length, 1, 'missing 条数');
  eq(missing[0].kind, 'noSuchPost', 'missing 类型');
});

await check('wechat 字段回填成非公众号地址时中断', async () => {
  const { html, missing } = render(`看[第一篇](${BASE}/#/blog/badurl)`);
  eq(missing.length, 1, 'missing 条数');
  eq(missing[0].kind, 'badWechatUrl', 'missing 类型');
  hasNot(html, '<a', '不该留下任何 a 标签');
});

await check('改写后的互指登记进 internalLinks，供粘贴后核对', async () => {
  const { internalLinks } = render(`看[第一篇](${BASE}/#/blog/published)`);
  eq(internalLinks.length, 1, 'internalLinks 条数');
  eq(internalLinks[0].text, '第一篇', '引用文字');
});

await check('结尾带斜杠的站内链接同样能识别', async () => {
  const { missing, html } = render(`看[第一篇](${BASE}/#/blog/published/)`);
  eq(missing.length, 0, 'missing 条数');
  has(html, PUBLISHED_URL, '改写结果');
});

console.log('\nblogBase 配错时不许静默降级（互指整片消失是最坏的失败）');

await check('blogBase 多一个尾斜杠，互指不会悄悄变成脚注', async () => {
  const { missing, footnotes } = render(`看[第一篇](${BASE}/#/blog/published)`, { blogBase: `${BASE}/` });
  eq(footnotes.length, 0, '不该掉进外链清单');
  eq(missing.length, 1, 'missing 条数');
  eq(missing[0].kind, 'unmatchedBlogLink', 'missing 类型');
});

await check('带 query 的站内链接不会被当外链', async () => {
  const { missing, footnotes } = render(`看[第一篇](${BASE}/#/blog/published?utm=x)`);
  eq(footnotes.length, 0, '不该掉进外链清单');
  eq(missing[0].kind, 'unmatchedBlogLink', 'missing 类型');
});

// blogHost 是从 blogBase 算出来的，拿它做判据等于「配错的那一项负责检查自己」——
// 换域名后忘改 config 时，同源检查根本不响。判据改看路由形状后这一条才接得住。
await check('blogBase 配成了别的域名，互指同样拦得住', async () => {
  const { missing, footnotes } = render(`看[第一篇](${BASE}/#/blog/published)`, {
    blogBase: 'https://old-domain.example',
  });
  eq(footnotes.length, 0, '不该掉进外链清单');
  eq(missing[0].kind, 'unmatchedBlogLink', 'missing 类型');
});

await check('文章里写了 www. 前缀的同站地址，也拦得住', async () => {
  const { missing } = render(`看[第一篇](https://www.blog.yingtongxue.cn/#/blog/published)`);
  eq(missing[0].kind, 'unmatchedBlogLink', 'missing 类型');
});

// 这个地址在博客上是好用的（浏览器把 #/blog/x 当 hash，HashRouter 照常路由），
// 所以日常浏览永远发现不了，是唯一「博客上正常、公众号上静默失效」的形态。
await check('# 前面少一个斜杠的地址，也拦得住', async () => {
  const { missing, footnotes } = render('看[第一篇](https://blog.yingtongxue.cn#/blog/published)');
  eq(footnotes.length, 0, '不该掉进外链清单');
  eq(missing[0].kind, 'unmatchedBlogLink', 'missing 类型');
});

await check('外站的 /blog/ 路径不受牵连，正常走外链清单', async () => {
  const { missing, footnotes } = render('见[某文](https://example.com/blog/post-1)');
  eq(missing.length, 0, '不该中断');
  eq(footnotes.length, 1, 'footnotes 条数');
});

// 「我的博客在 blog.yingtongxue.cn」是文末最常见的写法，
// 早先版本按域名判断，把它当成配置错误硬拦住，还把站主指去查一个没错的配置。
await check('指向本站首页的正常写法不被误伤，走外链清单', async () => {
  const { missing, footnotes } = render(`我的博客在 [blog.yingtongxue.cn](${BASE})`);
  eq(missing.length, 0, '不该中断');
  eq(footnotes.length, 1, 'footnotes 条数');
});

await check('本站非文章页（/#/about）同样走外链清单', async () => {
  const { missing, footnotes } = render(`看[关于](${BASE}/#/about)`);
  eq(missing.length, 0, '不该中断');
  eq(footnotes.length, 1, 'footnotes 条数');
});

console.log('\n列表页 → 合集');

await check('指向博客列表页的链接，换成合集地址', async () => {
  const { html, missing } = render(`见[前两篇](${BASE}/#/blog)`);
  has(html, `href="${COLLECTION}"`, '改写结果');
  eq(missing.length, 0, 'missing 条数');
});

await check('未配置合集地址时记入 missing，不静默降级', async () => {
  const { html, missing } = render(`见[前两篇](${BASE}/#/blog)`, { collectionUrl: '' });
  eq(missing[0].kind, 'collection', 'missing 类型');
  hasNot(html, '<a', '不该留下任何 a 标签');
});

await check('合集地址填成非公众号链接时中断', async () => {
  const { missing } = render(`见[前两篇](${BASE}/#/blog)`, { collectionUrl: 'https://example.com/album' });
  eq(missing[0].kind, 'badCollectionUrl', 'missing 类型');
});

console.log('\n外站链接（微信会丢弃地址，留 a 标签等于骗读者）');

await check('外链剥掉 a 标签，只留文字', async () => {
  const { html } = render('出处在 [某个站点](https://example.com/page)');
  hasNot(html, '<a', 'a 标签');
  has(html, '某个站点', '链接文字');
});

await check('外链地址收进文末清单，带上文字说明', async () => {
  const { footnotes } = render('出处在 [某个站点](https://example.com/page)');
  eq(footnotes.length, 1, 'footnotes 条数');
  eq(footnotes[0].text, '某个站点', '清单文字');
});

await check('链接文字本身就是网址时不重复记录', async () => {
  const { footnotes } = render('见 [chunxiang.space/geb-system](https://chunxiang.space/geb-system)');
  eq(footnotes.length, 1, 'footnotes 条数');
  eq(footnotes[0].text, null, '文字应为空，避免「x（网址：x）」');
});

// geb-claude-md 那篇在正文里引了同一个出处两次（第 51 行与第 166 行），
// 第一版把它在文末列了两遍。读者需要的是一条记录，不是引用次数。
await check('同一外链被引多次，文末只列一条', async () => {
  const { footnotes } = render(
    '出处在 [某站](https://example.com/page)。\n\n后面又提一次 [某站](https://example.com/page)。'
  );
  eq(footnotes.length, 1, 'footnotes 条数');
});

await check('首次是裸网址、再次带文字说明时，补上说明', async () => {
  const { footnotes } = render(
    '见 [example.com/page](https://example.com/page)。\n\n也就是[某个站点](https://example.com/page)。'
  );
  eq(footnotes[0].text, '某个站点', '补上的文字说明');
});

await check('站内互指不会被误收进外链清单', async () => {
  const { footnotes } = render(`看[第一篇](${BASE}/#/blog/published)`);
  eq(footnotes.length, 0, 'footnotes 条数');
});

console.log('\n公众号里没有等价物的链接，必须人工改稿');

await check('页内锚点中断，不印进文末让读者长按复制', async () => {
  const { missing, footnotes } = render('[回到上面](#some-heading)');
  eq(footnotes.length, 0, '不该进文末清单');
  eq(missing[0].kind, 'unsupportedScheme', 'missing 类型');
});

await check('mailto 中断', async () => {
  const { missing } = render('[写信](mailto:a@b.com)');
  eq(missing[0].kind, 'unsupportedScheme', 'missing 类型');
});

await check('漏写 https:// 的地址中断，且报错先提这一种', async () => {
  const { missing } = render('[某站](www.example.com/x)');
  eq(missing[0].kind, 'unsupportedScheme', 'missing 类型');
  throws(() => pipeline('[某站](www.example.com/x)'), 'https:// 前缀', '报错文案');
});

// 图片走 missing 而非 throw：抛异常会穿过 marked 被包上「请向 markedjs 提 issue」，
// 把一次正常的改稿需求呈现成崩溃。
await check('正文图片记入 missing，不作为程序异常抛出', async () => {
  const { missing } = render('![封面](/covers/x.jpg)');
  eq(missing.length, 1, 'missing 条数');
  eq(missing[0].kind, 'bodyImage', 'missing 类型');
  eq(missing[0].url, '/covers/x.jpg', '图片地址');
});

await check('图片的报错文案说清了该怎么办，且不带 marked 的堆栈', async () => {
  const error = throws(() => pipeline('![封面](/covers/x.jpg)'), 'mmbiz.qpic.cn', '图片报错');
  hasNot(error.message, 'markedjs', 'marked 的提 issue 提示');
  has(error.message, '封面走后台单独上传', '给出的出路');
});

console.log('\n真管线：juice 内联 + 出厂不变量');

// 这几个值取自微信自带格式模板的实测（2026-08 用 draft/get 拉回成品量的），
// 不是估的。断言它们是为了防止哪天有人"顺手调调"就把实测结论改回猜测。
await check('正文用的是模板实测值 17px/2.0/24px，且已内联到标签上', async () => {
  const { html } = pipeline('一段正文。');
  has(html, 'font-size: 17px', '正文字号');
  has(html, 'line-height: 2.0', '行高');
  has(html, 'margin-bottom: 24px', '段距');
  hasNot(html, '<p>', '不该有未内联的裸 p');
});

await check('章节标题取博客的 #A65D1E 而非模板的 #EA7800', async () => {
  const { html } = pipeline('## 一个章节\n\n正文。');
  has(html, '#A65D1E', '标题颜色');
  hasNot(html, '#EA7800', '模板原色不该出现');
  has(html, 'text-align: center', '标题居中');
});

await check('代码块内联了深色底与手机字号', async () => {
  const { html } = pipeline('```\nconst a = 1;\n```');
  has(html, 'background-color: #1a1a1a', '代码块底色');
  has(html, 'font-size: 13px', '代码块字号');
});

// 2026-08 实测：带真实换行符的 <pre><code> 送进 draft/add 后拉回来看，
// 标签与样式都在，但换行被微信换成了 &nbsp;，整段代码挤成一行。
// 换行必须在送进去之前就变成结构性的 <br>，加 white-space 救不回来。
await check('代码块换行用 <br>，不留裸换行给微信吃掉', async () => {
  const { html } = pipeline('```\nconst a = 1;\nconst b = 2;\n```');
  has(html, 'const a = 1;<br>const b = 2;', '换行');
});

await check('代码块行首缩进转 &nbsp;，普通空格会被 HTML 折叠', async () => {
  const { html } = pipeline('```\nif (x) {\n    return 1;\n}\n```');
  has(html, '&nbsp;&nbsp;&nbsp;&nbsp;return 1;', '四格缩进');
});

await check('代码块里的尖括号仍被转义，不会当成标签', async () => {
  const { html } = pipeline('```\n<identity>\n```');
  has(html, '&lt;identity&gt;', '转义');
  hasNot(html, '<identity>', '未转义的裸标签');
});

await check('产物里没有 style 标签与 class 选择器残留（微信一律过滤）', async () => {
  const { html } = pipeline('一段正文。');
  hasNot(html, '<style', 'style 标签');
  hasNot(html, ':hover', '悬停态');
});

await check('文末清单不双重转义，读者不会看到 &amp;amp;', async () => {
  const { html } = pipeline('见 [Barnes & Noble 的说明](https://example.com/a?x=1&y=2)');
  has(html, 'Barnes &amp; Noble', '清单文字');
  hasNot(html, '&amp;amp;', '双重转义');
});

await check('正文里的裸 HTML a 标签绕过 renderer，但被出厂不变量接住', async () => {
  throws(
    () => pipeline('见 <a href="https://example.com/x">某站</a> 一文。'),
    'mp.weixin.qq.com',
    '出厂不变量'
  );
});

await check('互指正常时，产物顺利出厂且只含公众号链接', async () => {
  const { html } = pipeline(`看[第一篇](${BASE}/#/blog/published)`);
  has(html, PUBLISHED_URL, '互指');
  eq([...html.matchAll(/<a\s/g)].length, 1, 'a 标签数量');
});

// 链接文字带行内格式时，取 token.text 会把原始 markdown 的星号反引号一路带到
// 终端清单和公众号正文里。取渲染结果再解实体才两头都对。
await check('加粗的链接文字，清单里不带星号', async () => {
  const { internalLinks } = render(`看[**第一篇**](${BASE}/#/blog/published)`);
  eq(internalLinks[0].text, '第一篇', '清单文字');
});

await check('行内代码的链接文字，文末清单不带反引号', async () => {
  const { footnotes } = render('见 [`config.json`](https://example.com/c)');
  eq(footnotes[0].text, 'config.json', '清单文字');
});

console.log('\nfrontmatter 的 wechat 字段');

await check('读得出标准写法', async () => {
  eq(readWechatUrl(`---\ntitle: x\nwechat: ${PUBLISHED_URL}\n---\n正文`), PUBLISHED_URL, '解析结果');
});

await check('容忍行尾注释与前导空白', async () => {
  eq(readWechatUrl(`---\n  wechat: ${PUBLISHED_URL}  # 08-28 发布\n---\n正文`), PUBLISHED_URL, '解析结果');
});

await check('容忍 CRLF 换行', async () => {
  eq(readWechatUrl(`---\r\nwechat: ${PUBLISHED_URL}\r\n---\r\n正文`), PUBLISHED_URL, '解析结果');
});

await check('没有该字段时返回 null，而不是空串', async () => {
  eq(readWechatUrl('---\ntitle: x\n---\n正文'), null, '解析结果');
});

// frontmatter 边界的正则有两份（这里一份、markdown.ts 一份），两份漂移的症状是
// 元数据被当正文渲染进公众号。CRLF 是已知的触发方式，但断言防的是任何一次漂移。
await check('两份 frontmatter 正则漂移时中断，不让元数据印进正文', async () => {
  const crlf = '---\r\ntitle: 我的标题\r\nwechat: ' + PUBLISHED_URL + '\r\n---\r\n正文第一段。';
  const error = throws(
    () => renderArticle('__crlf', {
      config: { blogBase: BASE, collectionUrl: COLLECTION },
      stylesheet: STYLESHEET,
      readPost: (id) => (id === '__crlf' ? crlf : null),
    }),
    'frontmatter',
    '对账断言'
  );
  has(error.message, 'CRLF', '指出最可能的原因');
});

console.log('\nMarkdown 通道（公众号后台的「文档导入」）');

await check('互指在 md 里仍是 markdown 链接，地址已换成公众号的', async () => {
  const { markdown } = pipeline(`看[第一篇](${BASE}/#/blog/published)`);
  has(markdown, `[第一篇](${PUBLISHED_URL})`, '改写结果');
  hasNot(markdown, 'blog.yingtongxue.cn', '博客地址残留');
});

await check('外链在 md 里剥成纯文字，不留 markdown 链接语法', async () => {
  const { markdown } = pipeline('出处在 [某个站点](https://example.com/page)');
  has(markdown, '出处在 某个站点', '剥后的文字');
  hasNot(markdown, '](https://example.com', '残留的链接语法');
});

// 剥掉语法后地址若裸露，GFM 的 autolink 会把它变回链接，
// 导入公众号就成了一个点不动的可点样式——与剥它的初衷相反。
await check('剥出来的裸地址被反引号锁住，不会被 autolink 变回链接', async () => {
  const { markdown } = pipeline('见 [https://example.com/x](https://example.com/x)');
  has(markdown, '`https://example.com/x`', '锁住的地址');
});

await check('文末清单的地址同样锁住', async () => {
  const { markdown } = pipeline('见 [某站](https://example.com/page)');
  has(markdown, '- 某站：`https://example.com/page`', '清单条目');
});

// 本项目的文章里就有展示 markdown 写法的代码块，正则扫全文会误伤，lexer 不会。
await check('围栏代码块里的链接语法不被改写', async () => {
  const { markdown } = pipeline('```\n看[第一篇](https://blog.yingtongxue.cn/#/blog/published)\n```');
  has(markdown, 'blog.yingtongxue.cn/#/blog/published', '代码块原样保留');
});

await check('md 产物同样有出厂不变量，裸 HTML 的 a 标签拦得住', async () => {
  throws(
    () => pipeline("见 <a href='https://example.com/x'>某站</a> 一文。"),
    'mp.weixin.qq.com',
    'md 出厂不变量'
  );
});

await check('两条通道的分流结论一致（规则确实只有一份）', async () => {
  const { html, markdown } = pipeline(
    `看[第一篇](${BASE}/#/blog/published)，另见 [某站](https://example.com/p)`
  );
  has(html, PUBLISHED_URL, 'html 里的互指');
  has(markdown, PUBLISHED_URL, 'md 里的互指');
  has(html, '文中链接', 'html 的文末清单');
  has(markdown, '文中链接', 'md 的文末清单');
});

console.log('\n错误分类（用户侧条件不该呈现成崩溃）');

// 这条测的是机制而非某一次行为：CLI 靠 instanceof UserFacingError 决定打不打堆栈，
// 漏继承不会报错，只会安静地把「这篇得改稿」呈现成崩溃——
// 而普通断言只查 message 含某关键词，压根不关心走了哪个分支，抓不到这种退化。
await check('所有用户侧错误都继承 UserFacingError，否则 CLI 会打堆栈', async () => {
  for (const E of [MissingLinkError, BadOutputError, FrontmatterDriftError, PostNotFoundError]) {
    if (!(E.prototype instanceof UserFacingError)) throw new Error(`${E.name} 没继承 UserFacingError`);
  }
});

await check('文章 id 打错时给出可用 id 列表，而不是一句堆栈', async () => {
  const error = throws(
    () => renderArticle('typo', {
      config: { blogBase: BASE, collectionUrl: COLLECTION },
      stylesheet: STYLESHEET,
      readPost: () => null,
      listIds: () => ['2026-08-26-prompt-engineering', '2026-08-27-context-for-everyone'],
    }),
    '可用的文章 id',
    '找不到文章'
  );
  if (!(error instanceof UserFacingError)) throw new Error('该是用户侧错误');
  has(error.message, '2026-08-27-context-for-everyone', '列出的 id');
});

// 本项目每篇文章有七到九处分隔线，写到正文第一行只是时间问题。
// 早先判据是 content.startsWith('---')，会把这种合法写法误判成 CRLF 漂移，
// 然后指使站主去跑 dos2unix——跑完毫无变化，人就卡住了。
await check('正文第一个元素是分隔线的文章，不被误判成 frontmatter 漂移', async () => {
  const { html } = pipeline('---\n\n正文第一段。');
  has(html, '正文第一段', '正文');
});

// 判据若在全文里搜 frontmatter 键，展示 frontmatter 写法的代码块就会被当成漂移证据。
// BLOG_PLAYBOOK 里就有这么一段，照搬进文章只是时间问题。
await check('正文里有展示 frontmatter 写法的代码块，不被误判', async () => {
  const { html } = pipeline(
    '发布时这样写：\n\n```\n---\ntitle: 标题\ncover: covers/x.jpg\n---\n```\n\n就这样。'
  );
  has(html, 'title: 标题', '代码块内容');
});

await check('真漂移时才中断，且诊断说明这个文件确实是 CRLF', async () => {
  const crlf = '---\r\ntitle: 我的标题\r\nwechat: ' + PUBLISHED_URL + '\r\n---\r\n正文第一段。';
  const error = throws(
    () => renderArticle('__crlf2', {
      config: { blogBase: BASE, collectionUrl: COLLECTION },
      stylesheet: STYLESHEET,
      readPost: (id) => (id === '__crlf2' ? crlf : null),
    }),
    '这个文件用的是 CRLF 换行',
    '漂移诊断'
  );
  hasNot(error.message, '最常见的原因', '不该再是猜测口吻');
});

console.log('\n样式来源（index.css 是唯一基线）');

await check('从 index.css 抽到了 .prose 规则', async () => {
  const { baseRuleCount } = buildStylesheet(INDEX_CSS);
  if (baseRuleCount < 5) throw new Error(`只抽到 ${baseRuleCount} 条规则，index.css 的 .prose 段落可能被改动`);
});

await check('丢弃 :hover 并显式上报（不是静默丢弃）', async () => {
  const { css, droppedSelectors } = buildStylesheet(INDEX_CSS);
  hasNot(css, ':hover', '内联样式');
  if (!droppedSelectors.some((s) => s.includes(':hover'))) throw new Error('未报告丢弃了 :hover');
});

await check('丢弃 transition —— 静态图文无过渡触发时机', async () => {
  hasNot(buildStylesheet(INDEX_CSS).css, 'transition:', '内联样式');
});

await check('保留了正文链接色 #A65D1E（与封面同色相，过 AA）', async () => {
  has(buildStylesheet(INDEX_CSS).css, '#A65D1E', '链接颜色');
});

console.log(`\n通过 ${pass} 项，失败 ${fail} 项\n`);
process.exit(fail ? 1 : 0);
