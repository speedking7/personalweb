# app/

> L2 | 父级: ../AGENTS.md

前端单页应用，React 19 + TS + Vite 7，构建产物输出至 ../docs 由 GitHub Pages 发布。
博客数据是双源结构：主源飞书知识库（运行期经 server/ 代理），备源 content/posts/
本地 md（构建期内联）。两条链路在 lib/markdown.ts 汇合共用同一个 frontmatter 解析器，
降级决策集中在 data/blogs.ts。全局数据流与降级语义见根 AGENTS.md 的 <dataflow>，
此处只记目录内成员与局部设计决策。

## 成员清单

### 入口与路由

index.html: Vite 入口 HTML，只挂 #root 与 src/main.tsx，无运行时配置。
src/main.tsx: React 根挂载，引入 index.css 后渲染 App。
src/App.tsx: 路由表，七个页面。用 HashRouter 而非 BrowserRouter——GitHub Pages 没有
  SPA history fallback，深链刷新会 404，hash 路由把路径留在客户端。
  连带后果：giscus 不能按 pathname 映射讨论串（全站相同），见 pages/BlogDetail。
src/App.css: 遗留文件，无任何 import，index.css 是唯一被加载的全局样式。
src/index.css: 全局样式与文章正文 .prose 样式的唯一出处。项目没装
  @tailwindcss/typography，JSX 里 prose-p:/prose-a: 之类的修饰类全是空类，
  写了不生效却看着像生效；改正文外观只能改这里的手写规则。
  .prose 有两个消费者：博客正文与 scripts/wechat/styles.mjs——公众号版的样式基线
  从这里抽，改一处两边同时变，动手前要知道影响面不止网页。

### pages/ —— 七个路由页面

pages/Home.tsx: 首页 /。首屏直接消费 data/blogs 的 staticBlogPosts，不等飞书返回；
  getBlogPosts 成功后再替换。音乐、照片统计来自 data/music 与 data/photos。
pages/Blog.tsx: 列表页 /blog。分类栏、标签云、归档全部由真实文章聚合而来，不写死；
  搜索与筛选在客户端做，不走远端。
pages/BlogDetail.tsx: 详情页 /blog/:id。正文用 react-markdown 渲染，remark-gfm
  是 2026-09-06 才挂上的——此前 markdown 表格被当普通段落渲染成竖线文本，
  页面照常显示、构建不报错。评论区 term 用文章 id（HashRouter 下 pathname 全站相同，
  按路径映射会让所有文章共用一个讨论串）。recordView 只在取到文章后调用，404 不计数。
pages/Gallery.tsx: 相册 /gallery，瀑布流网格 + 灯箱（含键盘导航），数据来自 data/photos。
pages/Music.tsx: 音乐馆 /music，audio 播放器，数据来自 data/music。空曲库有守卫，
  否则渲染即抛错白屏。
pages/Guestbook.tsx: 留言板 /guestbook，复用 components/Comments，term 固定为 guestbook。
pages/About.tsx: 关于页 /about，纯静态内容，无数据依赖。

### sections/ —— 旧版单页首页分区（遗留，无人引用）

About.tsx / Contact.tsx / Footer.tsx / Hero.tsx / Navbar.tsx / Projects.tsx / Skills.tsx:
  七个文件当前无任何 import 引用——pages/Home 内联实现了自己的分区，
  这套锚点滚动（#about/#projects…）版本是改路由式多页之前的旧稿，保留待清理。
  注意 sections/Navbar 与 components/Navbar 同名不同物，勿混。

### components/ —— 导航与评论挂载器

components/Navbar.tsx: 全站固定顶栏（含移动端折叠菜单），App.tsx 挂载在 Routes 之外，
  七个路由页面共享；按 useLocation 判定当前路由高亮。
components/Comments.tsx: giscus 挂载器，BlogDetail 与 Guestbook 共用。
  调用方必须显式传 term，原因见 pages/BlogDetail 条目。
components/ui/: shadcn/ui 生成的 53 个基元（components.json 登记的 style 为 new-york）。
  vendored 代码，**不加 L3 头部、不逐文件列入清单**——改动应通过 shadcn CLI 升级基元
  而非手改，逐文件文档契约的意义为零。同豁免的是 hooks/use-mobile.ts 与 lib/utils.ts，
  三者同为 shadcn 生成物。

### config/ · data/ · lib/ · types/ · hooks/

config/giscus.ts: 评论系统配置的唯一填写位，categoryId 等需人工获取的值集中在此；
  缺配置时 isGiscusReady 为 false，组件显式提示而非留白假装加载中。
data/blogs.ts: 博客数据唯一入口，持有 feishu/static/auto 三态降级决策；
  聚合与筛选一律从 getBlogPosts 派生，不得另开飞书链路。细节见文件头。
data/music.ts: 音乐数据源（Song + songs），占位曲目已清空——宁可空着也不用假数据。
data/photos.ts: 相册数据源（Photo + photos + photoCategories），分类由数据实时归纳，
  不会出现零照片的分类。
lib/feishu.ts: 飞书主源客户端。appSecret 刻意不在此读取（VITE_ 前缀的含义就是
  「交给浏览器」），全部调用经 /api/feishu 代理。fetchBlogPosts 失败时不抛异常，
  只返回缓存或空数组——这决定了 data/blogs 的降级判据必须是「结果为空」而非
  「捕获到异常」。
lib/markdown.ts: frontmatter 解析器，飞书与本地 md 两源共用，规则只有一份，不会各自漂移。
lib/views.ts: 阅读量上报。未配置 VITE_VIEW_COUNTER_URL 时一个请求都不发；
  计数失败一律静默，绝不能影响文章阅读。
lib/utils.ts: shadcn 生成的 cn() 工具，vendored 豁免，见 components/ui 条目。
types/blog.ts: BlogPost 领域契约，飞书与本地 md 两源共用。
hooks/use-mobile.ts: shadcn 生成的断点判断 hook，vendored 豁免，见 components/ui 条目。

### content/posts/ —— 本地文章（备源即发布通道）

content/posts/*.md: 构建期被 data/blogs 的 import.meta.glob 内联，运行期零请求。
  文件一落进这个目录即上线，不存在草稿态；文件名（YYYY-MM-DD-slug）同时是
  /blog/:id 的路由 id。它既是 auto 模式下的降级兜底，也是不依赖任何外部服务的
  发布通道——兜底必须是真文章，绝不可放占位假数据。

### public/ —— 随产物发布的静态文件

public/: CNAME、avatar.jpg、decoration.jpg、covers/、images/。
  构建时原样复制进 ../docs。要随产物发布的静态文件一律放这里，
  绝不要直接手工丢进 ../docs——emptyOutDir 已开启，丢进去的下一次构建就没了。

### 构建与环境配置

vite.config.ts: base 默认 /（自定义域名 blog.yingtongxue.cn 直达根路径），
  VITE_BASE_PATH 可退回 /personalweb/ 项目站点形态——带错 base 上线即全站资源 404，
  且本地预览发现不了。outDir 默认 ../docs（VITE_OUT_DIR 可改），emptyOutDir 已开启，
  前提是 docs/ 内一切都能由构建重建。dev 期 /api/feishu 代理目标由 VITE_PROXY_TARGET
  覆盖（默认 :3001，须与 server/.env 的 PORT 一致）；VITE_DEV_HOST 默认仅本机监听。
.env / .env.example: 只存可公开值（app_id、wiki token、计数 Worker 地址）。
  任何密钥不得用 VITE_ 前缀；app_secret 的唯一归处是 server/.env。
components.json: shadcn/ui CLI 配置，决定基元生成位置（components/ui）、
  样式方案（cssVariables）与别名映射。
eslint.config.js: flat config，tseslint + react-hooks + react-refresh。
tailwind.config.js / postcss.config.js: Tailwind 3.4 接线，内容扫描指向 src。
tsconfig.json / tsconfig.app.json / tsconfig.node.json: 三件套，app 与 node 分离，
  @ 别名指向 src。

### 其他

README.md: Vite 模板自带的英文 README，未改写。
info.md: 脚手架生成时留下的环境记录，无运行期作用。
docs/: 历史构建残留（旧 outDir 的产物），当前 vite.config.ts 不再指向这里。

法则: 成员完整·一行一文件·父级链接·技术词前置

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
