/**
 * [INPUT]: 依赖 ../src/counter.js 的默认导出 fetch handler；
 *          依赖 Node 18+ 内建的 Request/Response 全局对象
 * [OUTPUT]: 可执行测试，`node test/counter.test.mjs`，失败时退出码非 0
 * [POS]: analytics/ 的唯一测试。存在的理由很实际——这个 Worker 部署在别人的
 *        基础设施上，部署一次要走登录、建 KV、存 secret 四步，
 *        把逻辑错误留到那时候才发现，代价远高于在这里跑一遍。
 *        它用内存对象顶替 KV，因此不碰网络、不需要任何凭据
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import worker from '../src/counter.js';

// 内存版 KV。只实现 Worker 真正用到的方法，不多实现——
// 多出来的部分没有被测代码覆盖，等于凭空增加一份可能与真实 KV 不符的假设。
// 加 /forget 时这里漏了 delete，测试当场报「env.VIEWS.delete is not a function」。
// 仿冒件与真件的差距就是这样暴露的：它只在被用到时才暴露。
function makeKV(init = {}) {
  const store = new Map(Object.entries(init));
  return {
    get: async (k) => (store.has(k) ? store.get(k) : null),
    put: async (k, v) => void store.set(k, String(v)),
    delete: async (k) => void store.delete(k),
    list: async ({ prefix = '', cursor } = {}) => ({
      keys: [...store.keys()].filter((k) => k.startsWith(prefix)).map((name) => ({ name })),
      list_complete: true,
      cursor,
    }),
    _dump: () => Object.fromEntries(store),
  };
}

const ORIGIN = 'https://blog.yingtongxue.cn';
const UA = 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/120 Safari/537.36';

function env(over = {}) {
  return { VIEWS: makeKV(over.kv), ALLOWED_ORIGIN: ORIGIN, STATS_TOKEN: 'secret-token', ...over };
}

const hit = (slug, { origin = ORIGIN, ua = UA, body } = {}) =>
  new Request('https://w.dev/hit', {
    method: 'POST',
    headers: { Origin: origin, 'User-Agent': ua, 'Content-Type': 'application/json' },
    body: body !== undefined ? body : JSON.stringify({ slug }),
  });

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

console.log('\n累加端点 POST /hit');

await check('正常上报返回 204，且不回传任何内容（阅读量不给页面看）', async () => {
  const e = env();
  const res = await worker.fetch(hit('2026-08-28-ai-is-not-a-wishing-well'), e);
  eq(res.status, 204, '状态码');
  eq((await res.text()).length, 0, '响应体长度');
});

await check('计数确实落到 KV，键名带 v: 前缀', async () => {
  const e = env();
  await worker.fetch(hit('2026-08-26-prompt-engineering'), e);
  eq(e.VIEWS._dump()['v:2026-08-26-prompt-engineering'], '1', 'KV 值');
});

await check('重复上报累加而非覆盖', async () => {
  const e = env();
  for (let i = 0; i < 5; i++) await worker.fetch(hit('2026-08-27-context-for-everyone'), e);
  eq(e.VIEWS._dump()['v:2026-08-27-context-for-everyone'], '5', '累加结果');
});

await check('从既有计数继续累加，不从零重来', async () => {
  const e = env({ kv: { 'v:2026-08-26-geb-claude-md': '42' } });
  await worker.fetch(hit('2026-08-26-geb-claude-md'), e);
  eq(e.VIEWS._dump()['v:2026-08-26-geb-claude-md'], '43', '累加结果');
});

await check('外站来源被拒（403），且不写入任何计数', async () => {
  const e = env();
  const res = await worker.fetch(hit('2026-08-28-ai-is-not-a-wishing-well', { origin: 'https://evil.com' }), e);
  eq(res.status, 403, '状态码');
  eq(Object.keys(e.VIEWS._dump()).length, 0, 'KV 写入条数');
});

await check('爬虫回 204 但不计数（让它以为成功，免得换姿势重试）', async () => {
  const e = env();
  const res = await worker.fetch(hit('2026-08-28-ai-is-not-a-wishing-well', { ua: 'Googlebot/2.1' }), e);
  eq(res.status, 204, '状态码');
  eq(Object.keys(e.VIEWS._dump()).length, 0, 'KV 写入条数');
});

await check('非法 slug 一律 400，KV 不被垃圾键污染', async () => {
  const e = env();
  for (const bad of ['../../etc/passwd', '__proto__', '随便写', '2026-8-1-x', '', 'x'.repeat(200)]) {
    const res = await worker.fetch(hit(bad), e);
    eq(res.status, 400, `slug=${JSON.stringify(bad.slice(0, 20))} 的状态码`);
  }
  eq(Object.keys(e.VIEWS._dump()).length, 0, 'KV 写入条数');
});

await check('请求体不是合法 JSON 时返回 400 而不是崩溃', async () => {
  const e = env();
  eq((await worker.fetch(hit(null, { body: '这不是 json' }), e)).status, 400, '状态码');
});

await check('CORS 头只回显放行来源，绝不是 *', async () => {
  const res = await worker.fetch(hit('2026-08-28-ai-is-not-a-wishing-well'), env());
  const allow = res.headers.get('Access-Control-Allow-Origin');
  eq(allow, ORIGIN, 'Allow-Origin');
  if (allow === '*') throw new Error('回了 *，等于允许任何站点刷数');
});

await check('OPTIONS 预检返回 204 并带 CORS 头', async () => {
  const res = await worker.fetch(new Request('https://w.dev/hit', { method: 'OPTIONS', headers: { Origin: ORIGIN } }), env());
  eq(res.status, 204, '状态码');
  eq(res.headers.get('Access-Control-Allow-Origin'), ORIGIN, 'Allow-Origin');
});

console.log('\n读取端点 GET /stats');

const stats = (token) =>
  new Request(`https://w.dev/stats${token === undefined ? '' : `?token=${token}`}`, { method: 'GET' });

await check('口令正确时返回计数 JSON，并按阅读量倒序', async () => {
  const e = env({ kv: { 'v:a-1': '3', 'v:b-2': '99', 'v:c-3': '10' } });
  const res = await worker.fetch(stats('secret-token'), e);
  eq(res.status, 200, '状态码');
  const keys = Object.keys(await res.json());
  eq(keys.join(','), 'b-2,c-3,a-1', '排序');
});

await check('口令错误返回 401', async () => {
  eq((await worker.fetch(stats('wrong'), env())).status, 401, '状态码');
});

await check('不带口令返回 401', async () => {
  eq((await worker.fetch(stats(), env())).status, 401, '状态码');
});

await check('未配置 STATS_TOKEN 时一律 401 —— 忘了配置不等于对全世界开放', async () => {
  const e = env({ STATS_TOKEN: undefined });
  eq((await worker.fetch(stats(), e)).status, 401, '不带口令');
  eq((await worker.fetch(stats('any'), e)).status, 401, '带任意口令');
  eq((await worker.fetch(stats(''), e)).status, 401, '带空口令');
});

console.log('\n删除端点 POST /forget');

const forget = (slug, token) =>
  new Request(`https://w.dev/forget${token === undefined ? '' : `?token=${token}`}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug }),
  });

await check('口令正确时删除该条，其余条目不受影响', async () => {
  const e = env({ kv: { 'v:1970-01-01-smoke-test': '3', 'v:2026-08-28-real-post': '7' } });
  const res = await worker.fetch(forget('1970-01-01-smoke-test', 'secret-token'), e);
  eq(res.status, 204, '状态码');
  const left = e.VIEWS._dump();
  eq('v:1970-01-01-smoke-test' in left, false, '目标是否已删');
  eq(left['v:2026-08-28-real-post'], '7', '其余条目');
});

await check('不带口令 401，且不删除任何东西', async () => {
  const e = env({ kv: { 'v:1970-01-01-smoke-test': '3' } });
  eq((await worker.fetch(forget('1970-01-01-smoke-test'), e)).status, 401, '状态码');
  eq(Object.keys(e.VIEWS._dump()).length, 1, '剩余条数');
});

await check('口令错误 401，且不删除任何东西', async () => {
  const e = env({ kv: { 'v:1970-01-01-smoke-test': '3' } });
  eq((await worker.fetch(forget('1970-01-01-smoke-test', 'wrong'), e)).status, 401, '状态码');
  eq(Object.keys(e.VIEWS._dump()).length, 1, '剩余条数');
});

await check('未配置 STATS_TOKEN 时一律 401，删除通道不默认敞开', async () => {
  const e = env({ STATS_TOKEN: undefined, kv: { 'v:1970-01-01-smoke-test': '3' } });
  eq((await worker.fetch(forget('1970-01-01-smoke-test', 'any'), e)).status, 401, '状态码');
  eq(Object.keys(e.VIEWS._dump()).length, 1, '剩余条数');
});

await check('非法 slug 返回 400', async () => {
  eq((await worker.fetch(forget('../../etc/passwd', 'secret-token'), env())).status, 400, '状态码');
});

console.log('\n面板 GET /');

const dash = () => new Request('https://w.dev/', { method: 'GET' });

await check('返回 200 且是 HTML', async () => {
  const res = await worker.fetch(dash(), env());
  eq(res.status, 200, '状态码');
  eq(res.headers.get('Content-Type'), 'text/html; charset=utf-8', 'Content-Type');
});

await check('页面本身不含任何口令 —— 口令由浏览器端输入并存本地', async () => {
  const html = await (await worker.fetch(dash(), env({ STATS_TOKEN: 'super-secret-value' }))).text();
  if (html.includes('super-secret-value')) throw new Error('口令被写进了页面');
});

await check('页面不需要鉴权即可打开（它只是张空壳，数据仍要口令才拿得到）', async () => {
  eq((await worker.fetch(dash(), env({ STATS_TOKEN: undefined }))).status, 200, '状态码');
});

await check('带 noindex，不被搜索引擎收录', async () => {
  const html = await (await worker.fetch(dash(), env())).text();
  if (!/name="robots"[^>]*noindex/.test(html)) throw new Error('缺 noindex');
});

await check('面板含删除入口，清理不必回到命令行', async () => {
  const html = await (await worker.fetch(dash(), env())).text();
  if (!html.includes("'/forget?token='")) throw new Error('面板没有删除通道');
  if (!html.includes('confirm(')) throw new Error('删除没有二次确认');
});

await check('口令仍然只走 /stats，面板拿不到任何捷径', async () => {
  // 面板页面里出现的应当是 fetch('/stats?token=…) 这个调用，而非任何已填好的值
  const html = await (await worker.fetch(dash(), env())).text();
  if (!html.includes("fetch('/stats?token='")) throw new Error('面板未通过 /stats 取数');
});

console.log('\n其它');

await check('未知路径返回 404', async () => {
  eq((await worker.fetch(new Request('https://w.dev/nope', { headers: { Origin: ORIGIN } }), env())).status, 404, '状态码');
});

await check('对 /hit 发 GET 不会被当成累加', async () => {
  const e = env();
  const res = await worker.fetch(new Request('https://w.dev/hit', { headers: { Origin: ORIGIN } }), e);
  eq(res.status, 404, '状态码');
  eq(Object.keys(e.VIEWS._dump()).length, 0, 'KV 写入条数');
});

console.log(`\n通过 ${pass} 项，失败 ${fail} 项\n`);
process.exit(fail ? 1 : 0);
