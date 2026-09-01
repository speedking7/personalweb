# 运维与交接

> 记录部署形态、发布流程、以及尚未清理的历史账。
> 最后更新：2026-08-30
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
8. 同步公众号（可选）：`node scripts/wechat/draft.mjs {文章 id}`，文章进草稿箱，
   人工在后台加合集、点发表，再把永久链接回填进 frontmatter 的 `wechat:` 字段。
   细节、五条微信硬约束与全部踩坑记录见 `guides/WECHAT_SYNC.md`

**构建前先跑发稿前验收**（闸门不过就别构建，它拦的都是页面上看不出来的静默失败）：

```bash
python3 scripts/preflight/prose.py app/src/content/posts/<文章>.md
python3 scripts/preflight/cover.py app/public/covers/<封面>.jpg
```

封面不合格时用 `python3 scripts/preflight/fit.py <源图> <输出.jpg> --inset` 加工后重验。
三个脚本的设计与判据来源见 `scripts/preflight/CLAUDE.md`。

行文风格见项目根 `WRITING_STYLE.md`，里面有可对表的量化指标。

**回填 `wechat:` 字段不需要重新构建部署**：前端一个字段都不消费它，页面显示完全一致。
下次发新文章时一并构建即可。

## 阅读量计数（已部署 2026-08-28）

阅读量**只给站主看，页面不展示**。未配置时前端一个请求都不发。

当前实例：`https://personalweb-views.speedkingblock.workers.dev`，
KV namespace id `17e044a9f85c498fa0140efda9636d42`，`STATS_TOKEN` 在 Worker secret 里。

线上已实测通过：`/stats` 无口令与错口令均 401、未知路径 404、对 `/hit` 发 GET 为 404、
外站来源 403、非法 slug 400、请求体非 JSON 400、爬虫 UA 回 204 但不计数、
OPTIONS 预检 204、CORS 头精确回显单一来源而非 `*`、连续三次上报均 204（KV 运行时可写）。
KV 里有一条 `1970-01-01-smoke-test` 是当时的连通性测试残留，可随时删除。

**换机或重启后要重新部署时**：`CLOUDFLARE_API_TOKEN` 只在当时的终端里 `export` 过，
没有写进任何配置文件，因此不会自动恢复。到
`https://dash.cloudflare.com/profile/api-tokens` 重新建一个自定义 Token 即可，
权限两条：Account → Workers Scripts → Edit，Account → Workers KV Storage → Edit。
不要用 `wrangler login` 的 OAuth 流程——实测在本机代理环境下会卡住不弹浏览器。

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

看数据，两种方式：

**日常用这个**——浏览器打开 Worker 根地址并收藏，首次输一次口令，之后点开即看：

```
https://personalweb-views.speedkingblock.workers.dev/
```

口令存在浏览器 localStorage，不进 URL、不进历史记录。面板上有「刷新」与「换口令」。

**脚本里用这个**：

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
5. **前三篇封面的橙色点会被列表页裁掉**，`cover.py` 跑全量因此恒为退出码 1。
   已知且**决定不修**，不是新问题——跑之前先看这里，别当成刚坏的：

   | 封面 | 橙色点横向 | 1.36:1 存活 | 1.2:1 存活 |
   |---|---|---|---|
   | `geb-claude-md.jpg` | 90.4% | 0% | 0% |
   | `context-engineering.jpg` | 84.6% | 100% | 0% |
   | `wishing-well.jpg` | 87.6% | 52% | 21% |

   后果是这三篇的读者在列表页看不到那个橙色点，而 BLOG_PLAYBOOK 第五节定的语义
   恰恰在它身上（点在有语义的物件上，读者读到对应段落会回头认出封面）。
   不修的理由是代价：`fit.py --inset` 能把三张都救到 100%，但物件要缩到 91%/78.6%/67%，
   其中两张还会丢纸纹——换已上线内容的观感，不值。**新封面按闸门走**，单跑仍是退出码 0。
   哪天想还这笔账：`python3 scripts/preflight/fit.py <原图> <同名输出> --inset` 后重新构建部署。

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

### 反过来的一种：看着像数据坏了，其实是资源没加载

2026-08-29 站主报「已发布的文章刷不出来」，过一会儿又自己好了。排查结论值得记下来，
因为这类自愈故障最容易被忘掉、下次重演又得从头查一遍。

**数据层可以被完全排除，而且排除得掉。** 三条同时成立：线上跑的是 `auto` 模式
（产物里 `"auto"` 有、`"feishu"` 无）；飞书无论返回空还是抛异常都会回落到本地文章
（两条路 `getBlogPosts` 都覆盖了）；四篇文章的正文已由构建期 glob 内联进
`docs/assets/index-*.js`。**所以只要页面的 JS 加载出来，文章就一定显示得出来，与飞书死活无关。**

于是「刷不出来」只可能是资源没加载——页面框架都没起来。最可能的原因是本文件开头记的
那条：DNS 解析给的是 IPv6，GitHub Pages 优先 IPv6，网络 IPv6 时好时坏就表现为这种自愈故障。

**下次的五秒判据**：F12 看 Network，JS/CSS 是红的或 pending 就是网络层，与站点内容无关；
JS 加载成功而列表仍空，才是代码问题。更直接的办法是手机关 WiFi 用流量打一次。

（附带一条排查环境的坑：在装了 Tailscale 的机器上 `getent` 解析本站域名会得到一个
无关的 IP，`curl` 又可能被本地代理接管、`remote_ip` 显示 `127.0.0.1`。
要验线上可达性，绕开本机解析直接问公共 DNS，或换台机器。）

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
- **断言「包含」证明不了「可用」**。面板的内联 JS 曾被一个转义错误截断成两行，
  整段脚本 SyntaxError、一行不执行，页面却照常返回 200，HTML 里「换口令」
  「/forget?token=」等所有片段一个不少——27 项断言全部通过，功能完全是坏的。
  补的那条是把 `<script>` 内容抽出来交给 `new vm.Script()` 真正编译一遍。
  验证过它确实能抓：坏代码上失败、好代码上通过，而其余 27 项在坏代码上全过。
- **模板字符串里的 `\n` 要写两个反斜杠**。Worker 的面板 HTML 存在一个反引号
  模板字符串里，写 `\n` 会被外层当转义符吃掉、变成真换行，插进内层的单引号
  字符串中间。这类「转义层数」错误在生成代码的代码里格外常见，且报错位置
  离原因很远。
- **在块注释里不要写 `*/`**。L3 头部里写 `getPostsBy*/searchPosts` 会提前终止注释，
  报出的却是十几行之后的语法错误，很难一眼归因。
- **搜索摘要不是结论，官方原文才是；而且要读对模块那一页**。做公众号同步时连错两次，
  两次都是"查过了、看着很确定"。第一次断言微信后台不支持 Markdown 导入——搜索翻上来的
  全是几年前的社区帖和第三方插件，而后台其实有原生的「文档导入」，站主截个图就推翻了。
  第二次更值钱：把「草稿箱」与「发布」当成一回事，据此宣布"发布这步自动不了"。
  实际上 2025-07 那条权限回收注记**只出现在 `freepublish` 模块那一页**，
  草稿箱与素材管理两个模块的文档压根没有它，实跑也确实全通。
  代价是这套东西差点停在"生成文件手工粘贴"，而它本可以一条命令进草稿箱。
  两次的共同形状是**拿二手信息下一手结论**：搜索引擎给的是热门内容不是当前内容，
  社区帖子有时效，而读了 A 模块的文档不等于知道 B 模块的规则。
  对策是本项目已经在用的那条——**冲突时以实跑为准**，`scripts/wechat/probe.mjs`
  就是为此存在的：文档与社区各执一词时，拿账号跑一次，几秒钟结束争论。
- **验证工具报红时，先怀疑自己调用错了，再怀疑数据**。回填第五篇公众号链接后验证，
  `readWechatUrl` 返回 null、`renderArticle` 直接抛异常，看着像 frontmatter 坏了。
  实际是两个函数的签名都没看：前者收的是 markdown 文本不是文章 id，后者还要
  config 与 stylesheet。数据一个字没错，差点去改一份没病的文件。
- **不要用截断后的渲染去否决未截断的匹配**。做西风语料分析时，一条 regex 在某篇上命中了，
  而核查脚本打印时写了 `x[:70]`，要找的那句话落在该段第 300 字左右、被自己的显示截断切掉了。
  看着前 70 字里没有，就判定那是假阳性，据此推翻了一条**正确的**正向证据。
  要否掉一个 regex 命中，必须打印 `re.search` 实际匹配到的那一段（group 或前后文），
  而不是段落开头。这类错与语料无关，任何长段落上都会重演。
  附带一条更隐蔽的：当时给出的根因是「这批文件整段开篇是一整行，按段截取窗口太小」，
  听起来很合理，实测却是**35 篇里只有 1 篇如此**（首段达中位段 16.7 倍，第二名才 2.7 倍）。
  **从孤例推出的全称根因比没有根因更糟**——照它写出的守则跑一遍会得到"没问题"的假放行，下次照漏。
  定位到根因后，回头量一下这个根因覆盖多少样本，再决定要不要把它写成守则。
- **同一轮里三方各栽一次，值得记住这个形状**：分析西风语料时，我的口径（数标点 vs 不数标点）、
  我的关键词表（把「他写什么题材」当成「他从哪儿取喻」）、复核方的截断视图，
  三处全是"工具本身在骗人"，且三处都不是被自查发现的，是被**另一方用不同方法复算**撞出来的。
  凡是结论要写进长期文档的，都值得让第二个人用**不同的方法**而不是同一套脚本重跑一遍。
- **改完 frontmatter 逐行看一眼**：`sed -n '1,12p' <文件> | cat -A`。用切片拼字符串
  （如 `old[:-4]`）容易把 `---` 前的换行一起吃掉，`wechat:` 于是挤进 excerpt 那一行——
  既毁摘要又没建成字段。这正是 `scripts/wechat/CLAUDE.md` 警告过的 frontmatter 漂移：
  元数据被当成标题印进公众号正文，而公众号发布后正文不可修改。
- **修一处矛盾时，第一次修复很可能只换了措辞、没换掉域。** 第 6 篇第五节把「一切牵扯到钱和
  法律责任的事」划进「验不了」那一堆，第六节却拿装修报价单当「能验」的例子，还补了一句
  「正是上一节说的那一堆」——**缝合两节的动作本身造出了矛盾**。第一次修复把例子换成
  「一件你一直想弄懂、又不好意思反复追问别人的事」，自以为修好了；独立审查二次复核直接
  指出：新措辞没锁定域，读者照样能把税务口径代进去，而且验证标准从「知道对错」偷换成了
  「能复述」——**漏洞从具体例子挪进了抽象措辞，比原来更不容易被发现**。第三次换成
  「一道没做过的菜，好不好吃你嘴里有数」才真封住，因为味觉是天然封闭的域，涉钱涉法的事
  代不进来。两条通用教训：**为了让 A 和 B 一致而新加的东西，必须回到 A 的判据上重跑一遍**；
  **把具体换成抽象不是修复，是把漏洞藏起来**。另记一次实证——这处矛盾是我自己写出来的，
  两轮都是独立审查抓的，自查一次都没发现，CLAUDE.md 那条「写稿与审稿分两趟、不得自我批准」
  不是形式主义。
- **`pkill -f <模式>` 会把发出这条命令的 shell 自己匹配进去**，当场自杀，退出码 144，
  而且前面已经执行的命令看起来「没有报错」。同一天踩了两次：清理 gstack 残留进程一次、
  停本地预览服务一次。改法是先取 PID 再杀：
  `for pid in $(ss -ltnp | grep <端口> | grep -oP 'pid=\K[0-9]+' | sort -u); do kill "$pid"; done`，
  或给 pkill 加 `-x`／改用精确的进程名。**凡是模式里含有当前命令行会出现的字符串，就不能用 `pkill -f`。**
