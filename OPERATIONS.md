# 运维与交接

> 记录部署形态、发布流程、以及尚未清理的历史账。
> 最后更新：2026-08-28
> [PROTOCOL]: 变更时更新此文件，然后检查 CLAUDE.md

## 当前部署形态

**对外只有一处**：GitHub Pages 托管的静态站，域名 `blog.yingtongxue.cn`。

- 发布源：`main` 分支的 `docs/` 目录
- 自定义域名靠 `app/public/CNAME`（构建时复制进产物）与仓库 Pages 设置共同生效
- 证书 Let's Encrypt，GitHub 自动签发与续期
- **服务器在境外，不适用国内 ICP 备案要求**——这是选择此形态的主要原因
- 不依赖本机：关机、断网、出差均不影响线上

DNS：`blog` 一条 CNAME 指向 `speedking7.github.io`，托管在贝锐（`console.oray.com`）。
解析结果是 IPv6（GitHub Pages 优先给 IPv6）。若有人反馈打不开，先排查对方网络是否支持 IPv6——
这类问题最容易被误判成网站故障。

## 发布一篇新文章

1. 写好 markdown，放进 `app/src/content/posts/`，文件名即路由 id
2. 顶部必须有 frontmatter，`tags` 用方括号数组格式，否则标签解析不出来：

```
---
title: 标题
category: 技术
tags: [标签A, 标签B]
cover: covers/xxx.jpg
date: 2026-08-27
readTime: 7
excerpt: 摘要，不写会截取正文第二段前 100 字
---
```

3. 封面放 `app/public/covers/`，frontmatter 写相对路径（代码会补部署 base）
4. 封面建议压到 200KB 内、1920px 宽、渐进式 JPEG。**主体往画面中间放**——
   列表页容器会把宽图裁成约 1.2:1，构图偏两侧的图会被切秃
5. **构建前确认 `app/.env` 里有 `VITE_VIEW_COUNTER_URL`**。该文件是 gitignored 的，
   只存在于站主本机；一旦缺失，上报代码会被 Vite 摇树消除，站点照常工作但阅读量
   静默停止记录，且页面上看不出任何异样。核对方法：构建后 `grep -c '/hit' docs/assets/*.js`
   应为 1，为 0 就是漏了
6. `npm run build`（在 `app/` 下），产物进 `docs/`
7. 提交并推送，GitHub Pages 自动更新

行文风格见项目根 `WRITING_STYLE.md`，里面有可对表的量化指标。

## 阅读量计数（已部署 2026-08-28）

阅读量**只给站主看，页面不展示**。未配置时前端一个请求都不发。

当前实例：`https://personalweb-views.speedkingblock.workers.dev`，
KV namespace id `17e044a9f85c498fa0140efda9636d42`，`STATS_TOKEN` 在 Worker secret 里。

线上已实测通过：`/stats` 无口令与错口令均 401、未知路径 404、对 `/hit` 发 GET 为 404、
外站来源 403、非法 slug 400、请求体非 JSON 400、爬虫 UA 回 204 但不计数、
OPTIONS 预检 204、CORS 头精确回显单一来源而非 `*`、连续三次上报均 204（KV 运行时可写）。
KV 里有一条 `1970-01-01-smoke-test` 是当时的连通性测试残留，可随时删除。

重新部署（改了 Worker 代码之后）：

```bash
cd analytics && node test/counter.test.mjs && npx wrangler deploy
```

首次部署的完整步骤见下方。

**先跑测试**，它不需要网络和凭据，逻辑有错在这一步就会暴露：

```bash
cd analytics && node test/counter.test.mjs     # 应输出「通过 16 项，失败 0 项」
```

确认通过后再部署：

```bash
cd analytics
npx wrangler login                                  # 首次需授权 Cloudflare 账号
npx wrangler kv namespace create VIEWS              # 记下输出的 id
#  把 id 填进 wrangler.toml 的 REPLACE_WITH_KV_NAMESPACE_ID
npx wrangler secret put STATS_TOKEN                 # 自己取一个长口令，只存在这里
npx wrangler deploy                                 # 输出形如 https://personalweb-views.xxx.workers.dev
```

然后把那个地址填进 `app/.env` 的 `VITE_VIEW_COUNTER_URL`，重新 `npm run build` 并提交。

看数据：

```bash
curl 'https://personalweb-views.xxx.workers.dev/stats?token=你的口令'
```

按阅读量倒序返回 JSON。几条须知：

- **端点地址随前端产物公开**，任何人都能 POST 刷数。它是给站主看趋势的参考，
  不是可信的统计口径。Worker 已校验 slug 形如 `YYYY-MM-DD-slug`，防的是 KV 被垃圾键塞满
  （免费额度按键数算），防不了有心人灌水。
- **KV 最终一致，并发写会丢计数**。个人博客量级可接受；要精确得上 Durable Object，
  为这个数字不值得。
- `STATS_TOKEN` 未配置时 `/stats` 一律 401，不会默认放行。
- CORS 只放行 `wrangler.toml` 里的 `ALLOWED_ORIGIN` 单一来源，本地调试需临时改成
  `http://localhost:5173`。

## 两种构建形态，不可混用

| 命令 | base | 输出 | 用途 |
|---|---|---|---|
| `npm run build` | `/` | `docs/` | GitHub Pages（自定义域名，入库） |
| `npm run build:selfhost` | `/` | `app/dist/` | 自托管静态服务（不入库） |

要退回 `github.io/personalweb/` 那种项目站点形态，构建时设 `VITE_BASE_PATH=/personalweb/`。
**带错 base 上线是全站资源 404，且本地预览发现不了**——本地始终从根提供服务。

## 已停止的服务（需要时可恢复）

内网穿透方案已弃用，改走 GitHub Pages。相关服务已停且取消开机自启：

- systemd 单元仍在 `~/.config/systemd/user/personalweb.service`
- 恢复内网预览：`systemctl --user start personalweb`（静态服务，监听 4173）
- 该单元的 `ExecStart` 路径含 nvm 的 node 版本号，**升级 node 后会失效**，
  届时用 `command -v serve` 取新路径同步修改，否则服务静默启动失败

飞书代理（`server/`，端口由 `server/.env` 的 PORT 决定，当前 3003）也已停止。
本机 3000–3002 被其他项目占用，故不用默认的 3001。

## 评论系统

giscus，数据存在本仓库的 GitHub Discussions（Announcements 分类）。

- 配置在 `app/src/config/giscus.ts`，`repoId` 与 `categoryId` 已填
- **mapping 必须用 `specific` 而非 giscus 默认的 `pathname`**：本站是 HashRouter，
  全站路由的 pathname 相同，按路径映射会让所有文章共用一个讨论串
- 文章页传文章 id，`/guestbook` 传固定的 `guestbook`
- 讨论串懒创建：首条留言发出时才会建，此前 giscus 的 API 返回 404 属正常

**已知局限**：读者需要 GitHub 账号。国内普通读者多半没有。
若要支持匿名评论，可选 Waline / Twikoo 这类自建方案（填昵称邮箱即可留言），
代价是要自己维护一个后端与防垃圾。

## 关于备案（已调研，结论备查）

想给国内读者提供更好的访问速度、或接入微信/QQ 登录，绕不开 ICP 备案。要点：

- **个人可以备案**，用身份证，不需要营业执照
- 但必须先买国内服务器，通过持牌 IDC 作为接入商提交。**家庭宽带 + 内网穿透不满足条件**
- 域名实名信息、备案主体、服务器账号实名三者必须完全一致
- 个人备案属非经营性，不得有商品售卖、付费服务、广告联盟
- 各地管局要求个人站用中性名称，**名称含「博客」二字可能被驳回**
- ICP 备案通过后 30 天内还需完成公安联网备案
- **微信开放平台的网站登录要求企业备案**，个人备案不够；QQ 互联个人备案有机会

结论：现阶段读者规模不足以支撑这套成本，维持 GitHub Pages + giscus。

## 尚未清理的历史账

按影响排序，都不阻塞日常使用：

1. **`app/node_modules` 整体被 git 跟踪**。`.gitignore` 有规则但对已跟踪文件无效，
   需 `git rm -r --cached` 显式移除，会产生一次巨大的删除提交。
   `app/dist` 与 tsbuildinfo 已按此法清理，node_modules 尚未动。
2. ~~**`docs/` 三重身份**~~ —— 已还清。三份手写指南迁至仓库根 `guides/`，
   `docs/` 只剩构建产物，`emptyOutDir` 随即开启。`assets/` 从 11 个（其中 9 个
   早已无人引用）降到 2 个，且此后不再累积。附带修掉一个安全问题：那三份指南
   位于 Pages 发布根，一直被当作静态文件公开提供，其中 FEISHU_SETUP_GUIDE
   还在教人把 App Secret 写成 `VITE_` 前缀的前端变量——代码早已修掉，文档没跟上。
3. **飞书应用已被删除**。后端日志报 `app has been deleted`，主数据源不可用。
   页面照常显示本地文章，因为 auto 模式会静默回落到备源。要恢复飞书需重建应用、
   回填 `app/.env` 与 `server/.env`。
4. `app/src/data/` 下 music.ts 与 photos.ts 是空数组，音乐与相册页面显示空状态。
   这是真实的（尚未添加内容），不是故障。

## 反复踩到的一类坑

本项目已多次遇到同一种问题：**故障状态与正常状态在页面上长得一模一样**。

- 飞书应用被删后，页面照常渲染占位文章，不看控制台无从察觉
- 博客页归档栏曾把「2024年12月 2篇」写死在 JSX 里，数据删光了它照样报数
- 留言板曾是纯 useState 实现，能提交能显示，刷新即丢，站主永远收不到
- `.gitignore` 的 `.omc/*` 只匹配仓库根，子目录的状态目录一路漏出
- 标签云长期为空、分类栏显示凭空捏造的「生活/旅行」：`feishuBlogClient.fetchBlogPosts()`
  失败时不抛异常而是返回空数组，于是 `getTags`/`getCategories` 里的 `catch` 永不触发，
  降级永不发生。判据必须是「结果为空」而非「捕获到异常」——`getBlogPosts` 因为多查了
  一次 `posts.length > 0` 而侥幸正确，另两个没查，就一直错着。已改为一律从
  `getBlogPosts` 派生，判定只留一处

因此本项目的约定是：**宁可显式报错或明说「未配置」，也不要留空白让人以为在加载**。
`config/giscus.ts` 的 `isGiscusReady()` 与 Comments 组件的提示分支就是这条约定的实现。

## 验证自身也会骗人

同一种病也会长在验证环节上，而且更隐蔽——因为出错时你收到的是「通过」。

- **别把构建命令管道给 grep**。`npm run build 2>&1 | grep -E '...'` 拿到的是 grep 的
  退出码，不是 npm 的。构建报 TS 错误照样显示成功，随后针对 `docs/` 的检查全部通过——
  因为查的是上一次的旧产物。正确写法是 `npm run build > /tmp/build.log 2>&1; echo $?`，
  或先跑一次 `npx tsc --noEmit`。
- **判断构建是否真的生效，看产物 hash 变没变**。源码改了而 `docs/assets/index-*.js`
  文件名没变，就是没吃到改动。
- **批量替换必须配一个结构性校验**，光看「替换了 N 处」不算数。已经栽过三次：
  frontmatter 的 `tags` 半角逗号被换成全角导致标签解析成一整条、中文冒号漏换、
  引号被连续替换成两个开引号。校验方式各不相同——数配对、跑真实解析器、逐行核对计数。
- **在块注释里不要写 `*/`**。L3 头部里写 `getPostsBy*/searchPosts` 会提前终止注释，
  报出的却是十几行之后的语法错误，很难一眼归因。
