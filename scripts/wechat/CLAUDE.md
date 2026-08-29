# scripts/wechat/

> L2 | 父级: ../../CLAUDE.md

把 `app/src/content/posts/` 的文章转成微信公众号可粘贴的 HTML。**只做转换，不做发布**——
公众号所属账号是个人主体，微信 2025 年 7 月起对该类主体回收了 `freepublish` 接口权限，
发布这一步是制度性死路而非本工具偷懒；能绕开的浏览器自动化又正撞在 2026 年 3 月平台规范的枪口上。
完整来龙去脉与四条微信环境硬约束见 `guides/WECHAT_SYNC.md`。

自带 `package.json` 与依赖，不进 app 的依赖树：它与网站运行期毫无关系，
混进去只会让人误以为构建需要它。Node 24 原生剥离 TypeScript，故 `.mjs` 可直接 import `markdown.ts`，无需构建步骤。

## 两道防线

链接正确性上有**事前分类**与**事后不变量**两层，互补且不可互相取代。
分类（`links.mjs`）按规则分流并给出精确诊断——哪篇没发、哪个 id 写错、哪个字段填歪；
不变量（`build.mjs` 的 `assertOnlyWechatLinks`）在 juice 之后扫一遍最终 HTML，
凡 `<a href>` 不指向 `mp.weixin.qq.com` 一律中止。

两层都要，因为分类只覆盖它认识的 token：正文里直接写的裸 HTML `<a>` 走 `html` token，
从 renderer 旁边绕过去；将来 marked 新增别的产链接的 token 也一样。不变量是兜底的那张网。
之所以值得多花这一道：微信正文里非公众号域名的链接点不动，**而公众号发布后正文不可修改**，
这类错误没有补救机会，只能挡在出厂前。

## 成员清单

`build.mjs`: 编排层与命令行入口。读文章 → marked 渲染 → juice 内联 → 出厂不变量 → 写 `out/{id}.html`，
另打一份终端发布清单（公众号后台那几个格子不在正文里，其中「阅读原文」发布后永久锁死）。
导出 `renderArticle` 与 `readWechatUrl` 供测试驱动真管线——不导出的话，juice 内联与文末清单这两段
就只能靠肉眼验，而它们恰恰是缺陷最容易藏身的接缝。自身不含格式规则：
frontmatter 规则在 `app/src/lib/markdown.ts`，样式在 `app/src/index.css`，链接规则在 `links.mjs`。

`links.mjs`: 链接分流核心，业务逻辑最密的一块。微信正文只认 `mp.weixin.qq.com` 域名，
其余外链地址会被丢弃且点击无反应，因此所有链接必须在渲染期分流：站内单篇换公众号永久链接、
列表页换合集链接、外链剥 `<a>` 并按地址去重收进文末清单。`lookupPost` 返回 `{ exists, url }`
而非单个 url，是因为「posts/ 里没这篇」与「有这篇但没发公众号」处置完全不同——
前者是 id 写错，后者是发布顺序没到，把人指使去发一篇不存在的文章只会白找一圈。

「长得像文章页却没被识别」用**路由形状** `BLOG_ROUTE_PATTERN` 判断，不看域名。
这一条值得记住理由：域名来自 `config.json`，它本身就可能是配错的那一项，
拿一个可能错的东西当判据，等于在最需要报警时不报警（换域名后忘改 config，互指会整片静默变脚注）。
路由形状则由 `App.tsx` 的 HashRouter 固定，不随配置漂移。
副作用是「我的博客在 blog.yingtongxue.cn」这类指向本站非文章页的正常写法自然走外链清单，不会被误伤。

锚点、mailto、漏写 `https://` 的地址一律中断：公众号里 `id` 属性被整个删掉，锚点没有等价物，
属于必须人工改稿的情况。正文图片走 `missing` 而非抛异常——它是用户侧条件不是程序异常，
抛出去会穿过 marked 被包上一句「请向 markedjs 提 issue」，把改稿需求伪装成崩溃。
不做 `mmbiz.qpic.cn` 转换是刻意的，但「不处理」不等于「不检测」。

`styles.mjs`: 样式来源层。用 postcss 从 `index.css` 抽 `.prose` 规则做基线，
剔除 `:hover` 与 `transition`（公众号无悬停态、无过渡触发时机），再叠一层手机阅读覆盖。
`@media` 等 at-rule 内的规则一律丢弃并上报，绝不提升为无条件——
深色模式下的取值被无条件内联进白底正文，是那种发出去就改不了的错。
刻意不自带正文样式表：`index.css` 是站内正文样式的唯一出处，另写一份必然与博客分家。
覆盖层每条都须在注释里写明理由，否则它会慢慢长成一份独立样式表。

`test.mjs`: 50 项断言，`node scripts/wechat/test.mjs` 直接跑，失败退出码非 0。分两层——
链接分流的单元断言，以及经 `renderArticle` 驱动的真管线断言（juice 内联、文末清单转义、
出厂不变量只在那一层才看得见）。全部注入假文章，不读也不改真实文章的发布状态。

`config.json`: `blogBase` 用于识别站内链接，与正文里写的地址必须**完全一致，尾斜杠也算**；
`collectionUrl` 是公众号合集地址，需人工去后台建合集后填入，留空时正文一旦引用列表页即中断。
两者填成非公众号链接都会被拦。

## 数据契约

文章 frontmatter 的 `wechat:` 字段记录该文的公众号永久链接，是本工具独有的发布侧元数据。
它**不**进 `parseBlogMetadata`——前端一个字段都不消费它，塞进前端契约只会污染那份契约；
标准字段（title/date/cover/excerpt）仍复用 `parseBlogMetadata`，规则保持一份。
解析容忍前导空白、行尾注释与 CRLF；值必须形如 `https://mp.weixin.qq.com/…`，否则中断。

frontmatter 的**边界正则**因此有两份（`readWechatUrl` 一份、`markdown.ts` 一份）。
复用要么导出前端内部实现、要么把 `wechat` 塞进前端契约，两条都不该走；
所以改为让两份**互相对账**：`renderArticle` 里断言 `parseBlogMetadata` 确实把 frontmatter 剥掉了。
两份一漂移，症状是元数据被当成一个二级标题印在公众号正文开头、标题封面摘要同时失效，
而公众号发布后正文不可修改。已知触发方式是 CRLF 换行（`markdown.ts` 的边界只认 `\n`），
但这条断言防的是「任何一次漂移」，不只这一种。

互指按发布顺序解析：A 引用 B 时，B 必须已发布并回填过 `wechat` 字段。
现有四篇经查证零前向引用，按日期顺序发即可。**新文章若引用了尚未发布的文章，build 会中断拦住**，
并列出还差哪几篇。

法则: 成员完整·一行一文件·父级链接·技术词前置

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
