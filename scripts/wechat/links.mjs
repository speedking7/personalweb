/**
 * [INPUT]: 依赖调用方注入 blogBase、合集地址、以及「文章 id → 发布状态」的查询函数；
 *          依赖 marked 把链接文字的行内 markdown 解析成纯文本
 * [OUTPUT]: 对外提供 createLinkRewriter（同时给出 HTML renderer 与 markdown 改写器）、
 *          WECHAT_URL_PATTERN、escapeHtml、escapeAttr
 * [POS]: scripts/wechat 的业务核心。微信正文只认 mp.weixin.qq.com 域名的链接，
 *        其余外链地址会被丢弃、点击无反应，因此所有链接必须在渲染期分流。
 *        分流的**决策**只有 classify 一处，HTML 与 markdown 两种输出共用它——
 *        公众号后台既能粘贴 HTML 也能导入 markdown，两条通道的链接规则必须是同一份
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { Marked } from 'marked';

/** 公众号内可点击的链接，只有这一种形态 */
export const WECHAT_URL_PATTERN = /^https:\/\/mp\.weixin\.qq\.com\//;

/**
 * 博客文章与列表页的路由形状。
 *
 * 用它、而不是用域名来判断「这是不是一个本该被改写的站内链接」——
 * 域名来自 config.json，它本身就可能是配错的那一项，拿一个可能错的东西做判据，
 * 等于在最需要报警的时候不报警（换域名后忘改 config，互指会整片静默变脚注）。
 * 路由形状则由 App.tsx 的 HashRouter 固定，不随配置漂移。
 *
 * 不要求 # 前面有斜杠：`https://blog.yingtongxue.cn#/blog/x` 少一个斜杠，
 * 在博客上照样能用（浏览器把 #/blog/x 当 hash），因而日常浏览永远发现不了它，
 * 却会在公众号上静默失效。仍要求 # 与 /blog 紧邻，所以外站的 /blog/ 路径不受影响。
 */
const BLOG_ROUTE_PATTERN = /#\/blog(\/|$|\?)/;

/** 文本转义。用于放进标签内容的纯文本 */
export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** 属性值转义。href 里的引号若不处理，会截断属性并凭空长出新属性 */
export function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/**
 * 建立链接改写器。
 *
 * 三条分流规则，对应微信的两条硬约束（正文外链失效、本号内链有效）：
 *   1. 指向单篇博文  → 换成该文的公众号永久链接，可点
 *   2. 指向博客列表页 → 换成公众号合集链接，可点（公众号没有「文章列表页」，合集是最近的对应物）
 *   3. 其余 http(s) 外链 → 剥掉链接只留文字，地址按去重后收进文末「文中链接」区
 *
 * 走不通的一律记进 missing 交由调用方中断，**不做降级**。
 * 静默降级会让「链接坏了」和「一切正常」在成品上无从分辨，与本项目 dataflow 一节的约定相同。
 *
 * 返回的 renderer 与 rewriteMarkdown 共享同一份收集器与同一个 classify，
 * 但**一个实例只该用一种**：两个都跑会把 footnotes 收集两遍。
 *
 * @param {object}   opts
 * @param {string}   opts.blogBase       博客站点根地址，用于识别站内链接
 * @param {string?}  opts.collectionUrl  公众号合集地址，未配置时为空
 * @param {(id: string) => { exists: boolean, url: string | null }} opts.lookupPost
 *        查文章的发布状态。exists 区分「posts/ 里没这篇」与「有这篇但还没发公众号」，
 *        两者的处置完全不同：前者多半是 id 写错了，后者是发布顺序没到
 */
export function createLinkRewriter({ blogBase, collectionUrl, lookupPost }) {
  const footnotes = [];
  const missing = [];
  const internalLinks = [];

  // 站内链接形如 https://blog.yingtongxue.cn/#/blog/2026-08-26-xxx（末段是文章 id）
  // 或 https://blog.yingtongxue.cn/#/blog（列表页）。HashRouter 的 # 是路径的一部分，不是锚点。
  const escapedBase = blogBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const blogLinkPattern = new RegExp(`^${escapedBase}/#/blog(?:/([^/?#]+))?/?$`);

  // 文末清单按地址去重：同一个网址在正文里被引两次，读者需要的仍然只是一条记录。
  // 首次收录时若没有文字说明（链接文字本身就是网址），后续出现带说明的则补上。
  const footnoteIndex = new Map();
  function addFootnote(text, href) {
    const existing = footnoteIndex.get(href);
    if (existing) {
      if (!existing.text && text) existing.text = text;
      return;
    }
    const entry = { text, href };
    footnoteIndex.set(href, entry);
    footnotes.push(entry);
  }

  /**
   * 分流决策。**唯一的一份规则**，HTML 与 markdown 两条输出通道都走它。
   *
   * 返回 { action } 而不直接产出字符串，是为了让两种格式各自决定怎么渲染：
   * HTML 要 <a href>，markdown 要 [text](url)，但「这条链接该不该活着」是同一个判断。
   *
   * @returns {{action: 'link', url: string} | {action: 'plain'} | {action: 'reject'}}
   */
  function classify(href, plainText) {
    const match = blogLinkPattern.exec(href);

    if (match) {
      const articleId = match[1];

      if (articleId) {
        const { exists, url } = lookupPost(articleId);
        if (!exists) {
          missing.push({ kind: 'noSuchPost', id: articleId, text: plainText });
          return { action: 'reject' };
        }
        if (!url) {
          missing.push({ kind: 'article', id: articleId, text: plainText });
          return { action: 'reject' };
        }
        if (!WECHAT_URL_PATTERN.test(url)) {
          missing.push({ kind: 'badWechatUrl', id: articleId, text: plainText, url });
          return { action: 'reject' };
        }
        internalLinks.push({ text: plainText, href: url, target: articleId });
        return { action: 'link', url };
      }

      if (!collectionUrl) {
        missing.push({ kind: 'collection', text: plainText });
        return { action: 'reject' };
      }
      if (!WECHAT_URL_PATTERN.test(collectionUrl)) {
        missing.push({ kind: 'badCollectionUrl', text: plainText, url: collectionUrl });
        return { action: 'reject' };
      }
      internalLinks.push({ text: plainText, href: collectionUrl, target: '合集' });
      return { action: 'link', url: collectionUrl };
    }

    // 长得像文章或列表页、却没被上面的模式接住：blogBase 与正文里写的地址对不上。
    // 若放任它掉进外链分支，会得到「整片互指静默消失 + exit 0」——最坏的那种失败。
    if (BLOG_ROUTE_PATTERN.test(href)) {
      missing.push({ kind: 'unmatchedBlogLink', text: plainText, url: href });
      return { action: 'reject' };
    }

    // 锚点、mailto、写漏 https:// 的相对路径，在公众号里都没有等价物：
    // 约束 1 说明 id 属性会被整个删掉，把 #某标题 印进文末让读者长按复制纯属噪音。
    if (!/^https?:\/\//.test(href)) {
      missing.push({ kind: 'unsupportedScheme', text: plainText, url: href });
      return { action: 'reject' };
    }

    // 其余外站链接——**包括指向本站非文章页的地址**（比如文末写「我的博客在 …」）。
    // 微信会丢弃地址且点击无反应，留着链接只会让读者以为能点，
    // 剥成文字、地址进文末清单供长按复制，正是文末清单存在的意义。
    const isBareUrl = plainText === href || normalizeUrl(plainText) === normalizeUrl(href);
    addFootnote(isBareUrl ? null : plainText, href);
    return { action: 'plain' };
  }

  const renderer = {
    link(token) {
      const inner = this.parser.parseInline(token.tokens);
      // 从渲染结果反推纯文本，而不是用 token.text——后者是原始 markdown，
      // 「[**第一篇**](…)」会把星号原样带进终端清单和公众号正文。
      // parseInline 的结果已转义过一轮，故解回实体再交给下游的 escapeHtml。
      const plainText = decodeBasicEntities(stripTags(inner)).trim();
      const decision = classify(token.href ?? '', plainText);

      return decision.action === 'link'
        ? `<a href="${escapeAttr(decision.url)}">${inner}</a>`
        : inner;
    },

    // 正文图片走 missing 而非 throw：它是一个用户侧条件（文章里放了图），
    // 不是程序异常。抛异常会穿过 marked，被它包上一句「请向 markedjs 提 issue」，
    // 把一次正常的「这篇得改稿」呈现成崩溃。
    image(token) {
      missing.push({ kind: 'bodyImage', url: token.href ?? '', text: token.text ?? '' });
      return '';
    },
  };

  /**
   * 把 markdown 里的链接就地改写，仍然输出 markdown。
   *
   * 供公众号后台的「文档导入」通道使用。走 lexer 而非正则扫全文，
   * 是因为围栏代码块里的 `[文字](地址)` 不是链接——正则分不清，lexer 分得清。
   */
  function rewriteMarkdown(markdown) {
    const collected = [];
    const lexer = new Marked({
      walkTokens: (token) => {
        if (token.type === 'link' || token.type === 'image') collected.push(token);
      },
    });
    lexer.parse(markdown);

    let out = '';
    let rest = markdown;
    for (const token of collected) {
      const at = rest.indexOf(token.raw);
      if (at === -1) continue;
      out += rest.slice(0, at);
      rest = rest.slice(at + token.raw.length);

      if (token.type === 'image') {
        missing.push({ kind: 'bodyImage', url: token.href ?? '', text: token.text ?? '' });
        continue;
      }

      // md 输出保留链接文字里的行内格式（那是 markdown，本就该留），
      // 但送进 classify 与文末清单的仍是纯文本
      const plainText = decodeBasicEntities(stripTags(inlineToHtml(token.text ?? ''))).trim();
      const decision = classify(token.href ?? '', plainText);
      out += decision.action === 'link'
        ? `[${token.text}](${decision.url})`
        : lockAutolink(token.text ?? '');
    }
    return out + rest;
  }

  return { renderer, rewriteMarkdown, footnotes, missing, internalLinks };
}

const inlineParser = new Marked();
/** 把一段行内 markdown 渲染成 HTML，用于提取纯文本 */
function inlineToHtml(text) {
  return inlineParser.parseInline(text);
}

/**
 * 把一个「不该是链接」的地址锁成行内代码。
 *
 * 剥掉链接语法之后地址若裸露在 markdown 里，会被 GFM 的 autolink 重新识别成链接——
 * 导入公众号后微信同样可能自动把它变成可点的样子，而外链在公众号里点了没反应，
 * 那正是剥它的初衷。用反引号锁住既挡住 autolink，
 * 也让读者一眼看出这是一串该长按复制的字符，而不是一句话。
 */
function lockAutolink(text) {
  return /^https?:\/\//.test(text.trim()) ? `\`${text}\`` : text;
}

/** 去掉行内 HTML 标签，拿到纯文字 */
function stripTags(html) {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * 解回 marked 转出的那五个实体。
 * 顺序要紧：&amp; 必须最后解，否则 &amp;lt; 会被误还原成 <。
 */
function decodeBasicEntities(value) {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

/** 比对链接文字与地址是否实为同一个网址（忽略协议与结尾斜杠） */
function normalizeUrl(value) {
  return value.replace(/^https?:\/\//, '').replace(/\/$/, '');
}
