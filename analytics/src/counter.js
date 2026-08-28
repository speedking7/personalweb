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

    // ---- 面板：GET /  仅一张静态页面，本身不含任何口令 ----
    // 存在的理由是摩擦：为看一眼数字而开终端、翻口令、敲一长串 curl，
    // 这种代价会让人三天后就不看了，功能等于白做。
    // 口令不放 URL 里——那样会留在浏览器历史与书签中。页面首次打开时问一次，
    // 存进 localStorage，此后自动带上；换口令按钮清掉它。
    if (request.method === 'GET' && url.pathname === '/') {
      return new Response(DASHBOARD, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return new Response(null, { status: 404, headers });
  },
};

// 配色取自博客本体：奶白底、炭黑字、烧橙点缀，数字用等宽体。
// 这页面只有站主会看，但没有理由让它难看。
const DASHBOARD = `<!doctype html>
<html lang="zh"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>阅读量</title>
<style>
 *{box-sizing:border-box}
 body{margin:0;padding:2.5rem 1.25rem;background:#f0efe9;color:#1a1a1a;
      font:16px/1.7 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}
 main{max-width:640px;margin:0 auto}
 h1{font-size:1.25rem;font-weight:500;margin:0 0 .25rem}
 .sub{color:#6b6b6b;font-size:.875rem;margin:0 0 1.75rem}
 .card{background:#fff;border-radius:.75rem;padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,.05)}
 input{width:100%;padding:.7rem .85rem;border:1px solid #e5e5e5;border-radius:.5rem;
       font-size:1rem;font-family:inherit;background:#fafafa}
 input:focus{outline:none;border-color:#A65D1E;background:#fff}
 button{margin-top:.75rem;padding:.7rem 1.25rem;border:0;border-radius:.5rem;
        background:#1a1a1a;color:#fff;font-size:.9375rem;font-family:inherit;cursor:pointer}
 button:hover{background:#A65D1E}
 table{width:100%;border-collapse:collapse}
 td{padding:.7rem 0;border-bottom:1px solid #f0f0f0;vertical-align:baseline}
 tr:last-child td{border-bottom:0}
 td.n{text-align:right;width:5.5rem;font-family:'JetBrains Mono',ui-monospace,monospace;
      font-size:1.0625rem;color:#A65D1E}
 a{color:#1a1a1a;text-decoration:none}
 a:hover{color:#A65D1E;text-decoration:underline;text-underline-offset:3px}
 .slug{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.8125rem;color:#9ca3af}
 .total{display:flex;justify-content:space-between;margin-top:1.25rem;padding-top:1rem;
        border-top:1px solid #e5e5e5;color:#6b6b6b;font-size:.875rem}
 .total b{font-family:'JetBrains Mono',ui-monospace,monospace;color:#1a1a1a;font-weight:500}
 .err{color:#b91c1c;font-size:.875rem;margin-top:.75rem}
 .foot{margin-top:1.25rem;font-size:.8125rem;color:#9ca3af}
 .foot span{cursor:pointer;text-decoration:underline;text-underline-offset:3px}
</style></head><body><main>
<h1>阅读量</h1>
<p class="sub">仅站主可见，页面不对读者展示</p>
<div class="card" id="box">加载中…</div>
<div class="foot" id="foot"></div>
<script>
const K='stats-token', box=document.getElementById('box'), foot=document.getElementById('foot');
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function ask(msg){
  box.innerHTML='<label>输入统计口令</label>'
    +'<input id="t" type="password" autocomplete="current-password" placeholder="wrangler secret put STATS_TOKEN 时设的那个">'
    +'<button id="go">查看</button>'+(msg?'<div class="err">'+esc(msg)+'</div>':'');
  foot.innerHTML='';
  const go=()=>{const v=document.getElementById('t').value.trim(); if(v){localStorage.setItem(K,v); load();}};
  document.getElementById('go').onclick=go;
  document.getElementById('t').onkeydown=e=>{if(e.key==='Enter')go()};
  document.getElementById('t').focus();
}

async function load(){
  const tk=localStorage.getItem(K);
  if(!tk) return ask('');
  box.textContent='加载中…';
  let res;
  try{ res=await fetch('/stats?token='+encodeURIComponent(tk)); }
  catch(e){ box.innerHTML='<div class="err">连接失败，检查网络后重试</div>'; return; }
  if(res.status===401){ localStorage.removeItem(K); return ask('口令不对，重新输入'); }
  if(!res.ok){ box.innerHTML='<div class="err">服务返回 '+res.status+'</div>'; return; }

  const data=await res.json();
  const rows=Object.entries(data);
  if(!rows.length){
    box.innerHTML='<div class="sub" style="margin:0">还没有任何记录。'
      +'去博客点开一篇文章再回来刷新——同一浏览器会话只计一次，想再测一次请用无痕窗口。</div>';
  }else{
    const total=rows.reduce((s,[,v])=>s+v,0);
    box.innerHTML='<table>'+rows.map(([slug,n])=>
      '<tr><td><a href="https://blog.yingtongxue.cn/#/blog/'+encodeURIComponent(slug)+'" target="_blank" rel="noopener">'
      +'<div class="slug">'+esc(slug)+'</div></a></td><td class="n">'+n+'</td></tr>').join('')
      +'</table><div class="total"><span>'+rows.length+' 篇</span><span>合计 <b>'+total+'</b></span></div>';
  }
  foot.innerHTML='<span id="rf">刷新</span> · <span id="lo">换口令</span>';
  document.getElementById('rf').onclick=load;
  document.getElementById('lo').onclick=()=>{localStorage.removeItem(K); ask('');};
}
load();
</script></main></body></html>`;
