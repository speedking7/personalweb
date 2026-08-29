/**
 * [INPUT]: 依赖 postcss 解析 app/src/index.css，取其中的 .prose 规则
 * [OUTPUT]: 对外提供 buildStylesheet —— 返回喂给 juice 做内联化的完整 CSS 文本
 * [POS]: scripts/wechat 的样式来源层。刻意不自带正文样式表：
 *        index.css 是站内正文样式的唯一出处，另写一份必然与博客分家
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { readFileSync } from 'node:fs';
import postcss from 'postcss';

/**
 * 微信环境里无意义、必须从基线中剔除的声明。
 * 公众号正文是静态图文，没有指针悬停，也不存在过渡动画的触发时机。
 */
const DROPPED_PROPS = new Set(['transition']);

/**
 * 手机阅读覆盖层。
 *
 * 存在的唯一理由：index.css 的 .prose 是照着桌面网页写的，字号行距由页面上下文继承而来；
 * 公众号读者几乎全在手机上，直接照搬会偏紧。**每加一条都必须在这里写明理由，
 * 否则这层会慢慢长成一份独立样式表，那正是复用 index.css 想避免的事。**
 */
const MOBILE_OVERRIDES = `
/* 正文字号与行高。.prose 本身不定义这两项（网页上由 body 继承），
   到了公众号没有继承源，落到微信默认值会偏小偏挤。16px/1.75 是公众号长文的常见舒适值。 */
.prose p, .prose li, .prose blockquote {
  font-size: 16px;
  line-height: 1.75;
}

/* 段间距。桌面上 1rem 够用，手机窄屏行数翻倍，段落之间需要更明显的呼吸。 */
.prose p {
  margin-bottom: 1.2em;
}

/* 代码块字号。手机屏宽不足桌面一半，沿用正文字号会让每行代码都触发横向滚动。
   压到 13px/1.6 可以让本站现有代码块在多数机型上整行放下。 */
.prose pre {
  font-size: 13px;
  line-height: 1.6;
}

/* 标题与前文的间距。.prose h2 的 margin-top 是 2rem，在手机上视觉分量不足以
   把章节切开——公众号没有目录，章节标题是读者唯一的定位锚点。 */
.prose h2 {
  margin-top: 2.4em;
}
`;

/**
 * 组装最终样式表：index.css 的 .prose 基线 + 手机覆盖层。
 *
 * @param {string} indexCssPath  app/src/index.css 的绝对路径
 * @returns {{ css: string, baseRuleCount: number, droppedSelectors: string[] }}
 */
export function buildStylesheet(indexCssPath) {
  const source = readFileSync(indexCssPath, 'utf8');
  const root = postcss.parse(source);

  const kept = [];
  const droppedSelectors = [];

  root.walkRules((rule) => {
    // 逐个比对逗号分隔的选择器，而非整串 startsWith：
    // 写成 `.foo, .prose p` 时前者会漏判，而只取其中 .prose 的部分才是我们要的
    const proseSelectors = rule.selectors.filter((s) => s.startsWith('.prose'));
    if (proseSelectors.length === 0) return;

    // walkRules 会下探进 at-rule 内部。@media 里的规则若被抽出来，
    // 条件就丢了——譬如深色模式下的 .prose 取值会被无条件内联进白底的公众号正文，
    // 而公众号发布后正文不可修改。这类规则一律丢弃并上报，绝不悄悄提升为无条件。
    if (rule.parent.type !== 'root') {
      const scope = rule.parent.name ? `@${rule.parent.name}` : rule.parent.type;
      droppedSelectors.push(`${proseSelectors.join(', ')}（在 ${scope} 内，条件无法内联）`);
      return;
    }

    // 伪类整条丢弃。:hover / :focus 在公众号里永远不会触发，
    // 内联化时 juice 也无处安放它们。
    const usable = proseSelectors.filter((s) => !s.includes(':'));
    const pseudo = proseSelectors.filter((s) => s.includes(':'));
    if (pseudo.length > 0) droppedSelectors.push(pseudo.join(', '));
    if (usable.length === 0) return;

    const decls = [];
    rule.walkDecls((decl) => {
      if (DROPPED_PROPS.has(decl.prop)) return;
      decls.push(`  ${decl.prop}: ${decl.value};`);
    });

    if (decls.length > 0) {
      kept.push(`${usable.join(', ')} {\n${decls.join('\n')}\n}`);
    }
  });

  if (kept.length === 0) {
    throw new Error(
      `在 ${indexCssPath} 里没有找到任何 .prose 规则。\n` +
      `正文样式的唯一出处是该文件里手写的 .prose 段落，它若被移动或改名，本工具必须同步改。`
    );
  }

  return {
    css: `${kept.join('\n\n')}\n${MOBILE_OVERRIDES}`,
    baseRuleCount: kept.length,
    droppedSelectors,
  };
}
