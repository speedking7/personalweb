/**
 * [INPUT]: 依赖 Cloudflare Workers 运行时的 fetch 事件与 KV 绑定 VIEWS；
 *          依赖环境变量 ALLOWED_ORIGIN（放行的站点来源）与 STATS_TOKEN（读取统计的口令）
 * [OUTPUT]: 对外提供两个端点 —— POST /hit 累加某篇文章的阅读数（不回传数字），
 *           GET /stats?token=… 返回全部计数的 JSON（仅站主可读）
 * [POS]: analytics/ 的全部实现。存在的唯一理由是 GitHub Pages 是纯静态托管，
 *        页面本身没有任何地方可以记录「这篇被读了多少次」。
 *        它刻意不把数字回传给页面：本站的阅读量只给站主看，不展示给读者，
 *        因此 /hit 返回 204 空响应，前端拿不到也不需要拿到任何计数。
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

// 只接受形如 2026-08-28-some-slug 的文章 id。
// 这一条不是洁癖：端点地址随前端产物公开，任何人都能往里 POST，
// 不做校验的话 KV 会被随手写进来的垃圾键塞满，而 KV 的免费额度是按键数算的。
const SLUG = /^\d{4}-\d{2}-\d{2}-[a-z0-9-]{1,80}$/;

// 明显的爬虫不计入。这不可能穷尽，只是把最廉价的噪声挡掉——
// 真要精确区分人和机器，得付出与这个功能不相称的代价。
const BOT = /bot|crawler|spider|crawling|headless|preview|fetch|curl|wget|python-requests/i;

function cors(origin, allowed) {
  // 只回显被允许的来源，不写 *：写 * 等于邀请任何站点替你刷数。
  const ok = allowed && origin === allowed;
  return {
    'Access-Control-Allow-Origin': ok ? origin : allowed || '',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const headers = cors(origin, env.ALLOWED_ORIGIN);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    // ---- 累加：POST /hit  body = {"slug":"2026-08-28-xxx"} ----
    if (request.method === 'POST' && url.pathname === '/hit') {
      if (env.ALLOWED_ORIGIN && origin !== env.ALLOWED_ORIGIN) {
        return new Response(null, { status: 403, headers });
      }
      if (BOT.test(request.headers.get('User-Agent') || '')) {
        // 对爬虫也回 204：让它以为成功，避免它换个姿势重试
        return new Response(null, { status: 204, headers });
      }

      let slug;
      try {
        ({ slug } = await request.json());
      } catch {
        return new Response(null, { status: 400, headers });
      }
      if (typeof slug !== 'string' || !SLUG.test(slug)) {
        return new Response(null, { status: 400, headers });
      }

      // KV 是最终一致的，并发写会丢计数。对个人博客的量级这是可接受的误差，
      // 要精确就得上 Durable Object——那是为这个数字付出的不相称的复杂度。
      const key = `v:${slug}`;
      const current = parseInt((await env.VIEWS.get(key)) || '0', 10) || 0;
      await env.VIEWS.put(key, String(current + 1));

      // 刻意不回传数字。页面不展示阅读量，回传即是多余的信息暴露。
      return new Response(null, { status: 204, headers });
    }

    // ---- 读取：GET /stats?token=…  仅站主 ----
    if (request.method === 'GET' && url.pathname === '/stats') {
      // 口令只存在于 Worker 的 secret 里，绝不出现在前端产物中。
      // 未配置 STATS_TOKEN 时一律拒绝，而不是默认放行——
      // 「忘了配置」不应该等于「对全世界开放」。
      if (!env.STATS_TOKEN || url.searchParams.get('token') !== env.STATS_TOKEN) {
        return new Response('unauthorized', { status: 401 });
      }
      const out = {};
      let cursor;
      do {
        const list = await env.VIEWS.list({ prefix: 'v:', cursor });
        for (const k of list.keys) {
          out[k.name.slice(2)] = parseInt((await env.VIEWS.get(k.name)) || '0', 10) || 0;
        }
        cursor = list.list_complete ? undefined : list.cursor;
      } while (cursor);

      const sorted = Object.entries(out).sort((a, b) => b[1] - a[1]);
      return new Response(JSON.stringify(Object.fromEntries(sorted), null, 2), {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      });
    }

    return new Response(null, { status: 404, headers });
  },
};
