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
 * 公众号阅读覆盖层。
 *
 * 存在的理由：index.css 的 .prose 是照着桌面网页写的，字号行距由页面上下文继承而来；
 * 公众号读者几乎全在手机上，直接照搬会偏紧。
 *
 * **下面的数值不是估的。** 2026-08 送第一篇进草稿箱后，站主在后台套了微信自带的格式模板，
 * 用 draft/get 把成品拉回来量出了这套取值——公众号的阅读场景微信比我们懂，
 * 这是它给的答案，不是谁拍脑袋定的。改动前请先想清楚凭什么比微信的默认更好。
 *
 * 一并量到的两件事，决定了这层该怎么写：
 *   · 微信会把 <p> 全部重写成 <section>、外面各包一层 <span>，<h2> 提升为 <h1>，
 *     但**内联的 style 属性一路保留**——所以送内联样式是有效的，管骨架的是它，管外观的是我们。
 *   · 因此这里的选择器写 .prose p / .prose h2 即可，juice 内联之后微信换什么标签都不影响。
 *
 * **每加一条都必须在这里写明理由**，否则这层会慢慢长成一份独立样式表，
 * 那正是复用 index.css 想避免的事。
 */
const MOBILE_OVERRIDES = `
/* 正文。.prose 本身不定义字号行高（网页上由 body 继承），到了公众号没有继承源。
   17px / 行高 2.0 / 段距 24px / 300 字重 / rgba(0,0,0,0.9) 全部照搬微信格式模板实测值。
   比先前估的 16px/1.75 舒展一档，长文尤其明显。 */
.prose p, .prose li, .prose blockquote {
  font-size: 17px;
  font-weight: 300;
  line-height: 2.0;
  color: rgba(0, 0, 0, 0.9);
}

.prose p {
  margin-bottom: 24px;
}

/* 章节标题。20px、居中、下距 12px 取自同一套模板；
   颜色则换成 #A65D1E——那是 index.css 里正文链接的取色，与封面烧橙同色相且过 WCAG AA。
   模板原本给的是更亮的 #EA7800，改用博客这一个是为了两边色彩语言统一。

   注意微信会把 h2 提升成 h1，但内联样式跟着走，所以这里仍按 h2 写。 */
.prose h2 {
  font-size: 20px;
  color: #A65D1E;
  text-align: center;
  margin-top: 2.4em;
  margin-bottom: 12px;
}

/* 三级标题模板没覆盖到（本站文章目前也没用到）。只跟着正文提一档字号，
   不染色也不居中——居中加橙色是章节（h2）的视觉语言，h3 跟着用会稀释它。 */
.prose h3 {
  font-size: 18px;
}

/* 代码块字号。手机屏宽不足桌面一半，沿用正文字号会让每行代码都触发横向滚动。
   压到 13px/1.6 可以让本站现有代码块在多数机型上整行放下。
   深色底与字号已实测保留；换行则不然——微信会把代码块里的换行符换成 &nbsp;，
   故换行在 build.mjs 的 renderCodeBlock 里就转成了 <br>，不靠这里的样式。 */
.prose pre {
  font-size: 13px;
  line-height: 1.6;
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
