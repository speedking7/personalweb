# scripts/

> L2 | 父级: ../AGENTS.md

开发期工具区，与网站运行期无关。两个子模块各自**自带依赖、不进 app 的依赖树**——
混进去只会让人误以为构建需要它们。两者都与「发稿」相关，但分处流水线的两端：
一个拦在发布之前，一个管发布动作本身。

## 子模块

preflight/ - 发稿前验收：把 `BLOG_PLAYBOOK.md` 与 `OPERATIONS.md` 里「记着但没人跑」的规则
变成可执行检查。**闸门只拦静默失败**（页面照常渲染而功能已死、且看不出来的那类），
风格指标一律只报数。详见 preflight/AGENTS.md。

wechat/ - 公众号同步：把 `app/src/content/posts/` 的文章送进公众号草稿箱，**做到草稿箱为止，
不碰发表**（freepublish 2025-07 对个人主体回收，draft/add 与 add_material 实测可用）。
详见 wechat/AGENTS.md。

## 横跨决策的归属

**为何不统一语言**：preflight 用 Python（重头是像素判据，Pillow 现成，Node 得再装 sharp），
wechat 用 Node `.mjs`（要直接 import `app/src/lib/markdown.ts`，Node 24 原生剥离 TypeScript）。
两个模块之间**没有任何调用关系**，为对称而统一只是徒增依赖——这是刻意的分野，
决策细节与理由记在 preflight/AGENTS.md，本层只做归属标注，不重复论证。

法则: 成员完整·一行一文件·父级链接·技术词前置

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
