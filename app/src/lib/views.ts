/**
 * [INPUT]: 依赖 import.meta.env 的 VITE_VIEW_COUNTER_URL（analytics/ 那个 Worker 的地址），
 *          依赖浏览器的 sessionStorage 做同会话去重
 * [OUTPUT]: 对外提供 recordView(slug) —— 上报一次阅读，无返回值
 * [POS]: lib/ 层的埋点发送器，被 pages/BlogDetail 在文章加载成功后调用一次。
 *        与 lib/feishu、lib/markdown 是兄弟关系但互不依赖：它不参与任何渲染路径，
 *        拿掉它页面照常工作。这个主次关系是刻意的，见下方注释
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

/**
 * 上报一次阅读。
 *
 * 三条约束，都是刻意的：
 *
 * 一、没配置就一个请求都不发，而不是发了再吞错误。Worker 未部署是常态
 *     （本地开发、别人 clone 这个仓库），那种状态下不该产生任何网络噪声。
 *
 * 二、不接收也不返回任何数字。本站的阅读量只给站主看，页面不展示，
 *     所以 Worker 的 /hit 回的是 204 空响应。前端拿不到，也不需要拿到。
 *
 * 三、失败一律静默。计数失败绝不能影响文章阅读——这是主次关系，
 *     不是偷懒。同理，sessionStorage 在隐私模式下可能直接抛错，
 *     那时去重能力降级，但计数本身继续。
 */
export function recordView(slug: string): void {
  const endpoint = import.meta.env.VITE_VIEW_COUNTER_URL as string | undefined;
  if (!endpoint) return;

  // 同一会话内同一篇只计一次。刷新页面、来回切换文章都不重复计数。
  // 这是去重，不是伪造：它减少的是同一个人的重复上报，不凭空制造任何数字。
  try {
    const key = `viewed:${slug}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');
  } catch {
    // 隐私模式或存储被禁用：去重失效，继续上报
  }

  // keepalive 让请求在页面立刻被关闭时仍能发出
  fetch(`${endpoint.replace(/\/$/, '')}/hit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug }),
    keepalive: true,
  }).catch(() => {
    // 静默。见上面第三条。
  });
}
