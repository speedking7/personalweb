# server/

> L2 | 父级: ../AGENTS.md

飞书 API 代理层，单文件 Express，只在本地开发时起。

它存在的唯一理由是 **`app_secret` 不可下发浏览器**——`VITE_` 前缀的含义就是「交给浏览器」，
任何密钥走那个前缀等于公开发布，所以换取 `tenant_access_token` 这一步必须在服务端做。
兼以 node-cache（600s）吸收飞书接口限流：token 按 `expire - 300` 提前五分钟过期缓存，
不缓存的话每篇文章加载都要先换一次 token。

**线上并不存在。** 站点托管在 GitHub Pages，是纯静态的，这个 Express 没有任何线上实例；
纯静态部署时前端直连飞书会 CORS 失败，随后降级到本地文章（`app/src/content/posts/`），
这是刻意的双源设计——飞书是主源，本地文章同时充当发布通道与故障兜底。
**当前实际已停止运行**，恢复方式与停止原因见 `../OPERATIONS.md`。

## 成员清单

src/feishu-proxy.ts: 全部实现，六个端点。`POST /api/feishu/auth` 换 token（前端实际不直调，
经 `FeishuBlogClient` 走后续端点时由服务端内部自取）；`GET /api/feishu/wiki/:wikiToken/nodes`
列知识库节点；`GET /api/feishu/docx/:docToken/raw` 与 `/blocks` 取文档原始内容与块结构，
前端把块解析成 BlogPost；`POST /api/feishu/cache/clear` 清缓存；`GET /health` 健康检查。
CORS 只放行 `CORS_ORIGIN` 单一来源（默认 `http://localhost:5173`），不写 `*`。
端口由 `.env` 的 `PORT` 决定，**当前 3003**——本机 3000–3002 被其他项目占用，
故不用默认的 3001（见 `../OPERATIONS.md`）；改端口必须同步 `app/` 侧的 `VITE_PROXY_TARGET`，
否则 dev 期 `/api/feishu` 转发落空，症状是前端静默降级到本地文章。

package.json: 依赖清单与三个脚本（`dev` 用 tsx watch 直跑 TS，无构建步骤；
`build` 产 `dist/`；`start` 跑产物）。`"type": "module"`，与 app 的依赖树无关。

package-lock.json: 上述依赖的锁定文件。

tsconfig.json: TS 5.3 编译配置，`strict` 开，`rootDir` 收 `src/`，产物进 `dist/`。

.env.example: 环境变量模板。`FEISHU_APP_ID` / `FEISHU_APP_SECRET` / `PORT` / `CORS_ORIGIN`
四项；真实凭据落 `.env`（已 gitignore），**`app_secret` 的唯一归处就是这里**。

法则: 成员完整·一行一文件·父级链接·技术词前置

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
