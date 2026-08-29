/**
 * [INPUT]: 依赖 scripts/wechat/.env 的 WECHAT_APPID 与 WECHAT_APPSECRET
 * [OUTPUT]: 对外提供 loadCredentials、getAccessToken、callApi、uploadPermanentImage、
 *          deleteMaterial、WechatApiError
 * [POS]: scripts/wechat 与微信服务端之间的唯一通道。probe.mjs 与 draft.mjs 共用它——
 *        错误码翻译只该有一份，两处各写一遍必然有一处漏掉新码
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ENV_PATH = join(HERE, '.env');
const API_BASE = 'https://api.weixin.qq.com';

/**
 * 已知错误码 → 下一步该做什么。
 *
 * 只翻译成动作，不翻译成名词解释：站主看到报错时要的是「我现在该干嘛」，
 * 「API 功能未授权」这种官方措辞对他没有任何指导作用。
 */
const ERROR_HINTS = {
  40013: 'AppID 不合法——检查有没有抄错，或用成了小程序/开放平台的 AppID',
  40125: 'AppSecret 不合法——检查有没有抄错，或已被重置',
  40164: '调用方 IP 不在白名单里。后台「设置与开发 → 基本配置 → IP 白名单」加上报错里那个 IP。\n' +
         '      家用宽带的公网 IP 会变，重启光猫或断线重拨之后多半要重加一次',
  45009: '接口调用超过限额，明天再试',
  48001: 'API 功能未授权——这个账号没有该接口的权限',
  89503: '需要管理员在后台确认此次调用',
};

/** 微信的错误码在 HTTP 200 的响应体里，故不看 status 只看 errcode */
export class WechatApiError extends Error {
  constructor(path, result) {
    const hint = ERROR_HINTS[result.errcode];
    super(
      `调用 ${path} 失败：errcode ${result.errcode}，${result.errmsg ?? ''}` +
      (hint ? `\n      ${hint}` : '')
    );
    this.name = 'WechatApiError';
    this.errcode = result.errcode;
  }
}

export function loadCredentials() {
  if (!existsSync(ENV_PATH)) {
    throw new Error(
      `没有 ${ENV_PATH}。\n` +
      `  去公众号后台「设置与开发 → 基本配置」拿 AppID 与 AppSecret，建这个文件：\n\n` +
      `    WECHAT_APPID=wx????????????????\n` +
      `    WECHAT_APPSECRET=????????????????????????????????\n\n` +
      `  AppSecret 只显示一次，错过要重置。该文件已被 .gitignore 挡住，不会入库。`
    );
  }
  const env = {};
  for (const line of readFileSync(ENV_PATH, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (match) env[match[1]] = match[2];
  }
  if (!env.WECHAT_APPID || !env.WECHAT_APPSECRET) {
    throw new Error(`${ENV_PATH} 里缺 WECHAT_APPID 或 WECHAT_APPSECRET。`);
  }
  return { appId: env.WECHAT_APPID, appSecret: env.WECHAT_APPSECRET };
}

/**
 * 发起调用。errcode 非 0 即抛，调用方不必逐个判空。
 * @param {boolean} [tolerate] 传 true 时返回结果而非抛错，供探测类场景区分失败原因
 */
export async function callApi(path, init, tolerate = false) {
  const response = await fetch(`${API_BASE}${path}`, init);
  const text = await response.text();

  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(`调用 ${path} 返回了非 JSON（HTTP ${response.status}）：${text.slice(0, 200)}`);
  }

  if (result.errcode && !tolerate) throw new WechatApiError(path, result);
  return result;
}

export async function getAccessToken({ appId, appSecret }) {
  const result = await callApi(
    `/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`
  );
  return result.access_token;
}

/**
 * 上传永久图片素材，返回 { mediaId, url }。
 *
 * 图文消息的封面只收永久素材的 media_id，临时素材不行——
 * 临时素材三天过期，而文章会一直挂在那儿。
 */
export async function uploadPermanentImage(accessToken, imagePath) {
  const form = new FormData();
  const type = imagePath.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
  form.append('media', new Blob([readFileSync(imagePath)], { type }), basename(imagePath));

  const result = await callApi(`/cgi-bin/material/add_material?access_token=${accessToken}&type=image`, {
    method: 'POST',
    body: form,
  });
  return { mediaId: result.media_id, url: result.url };
}

export async function deleteMaterial(accessToken, mediaId, tolerate = false) {
  return callApi(
    `/cgi-bin/material/del_material?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ media_id: mediaId }),
    },
    tolerate
  );
}

export function postJson(path, accessToken, body, tolerate = false) {
  return callApi(
    `${path}?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
    tolerate
  );
}
