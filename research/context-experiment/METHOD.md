# 上下文对照实验 · 方法记录

被测项目：personalweb（React 19 + TS + Vite 博客）
运行器：claude CLI 2.1.232，`--model sonnet --tools ""`（关工具，防止它自己去读文件）
工作目录：/tmp/ctxexp（不含 CLAUDE.md，避免项目地图泄漏进 A、B 两组）
每组 20 次，共 60 次。

## 三组上下文

| 组 | 内容 | 字节 | ≈token |
|---|---|---|---|
| A | types/blog.ts + lib/markdown.ts + data/blogs.ts | 12,381 | ~4.1k |
| B | 整个 app/src（80 个文件，含 53 个 shadcn 基元） | 291,742 | ~97k |
| C | A 的 3 个文件 + 项目地图 CLAUDE.md | 27,012 | ~9.0k |

**关键设计：B 是 A 的严格超集。** A 的三个文件一字不差地在 B 里。
因此若 B 表现更差，唯一解释是稀释——不可能是信息缺失。

## 任务

给博客加「系列文章」功能：frontmatter 支持 series 字段、列表页按系列分组、
系列有自己的本地封面图。要求直接给实现方案，不反问。

任务里**不提示**任何约束，约束全部埋在源码里。

## 四道核心判别题

信息来源在三组中完全等同（都来自那 3 个文件）：

1. `parser_field` — parseBlogMetadata 是硬编码字段白名单。不在 markdown.ts
   加 series 正则，该字段被静默丢弃：不报错、不崩溃、分组永远为空。
2. `cover_base` — 封面须补 BASE_URL（resolveCover 就定义在 blogs.ts 里）。
   不补则本地能看见、线上 404。
3. `data_layer` — 聚合逻辑落在 data 层，与既有 getCategories/getTags 同址同形。
4. `type_contract` — types/blog.ts 的 BlogPost 契约要加 series 字段。

## 事故记录（必须写进文章）

**一、等待条件写错。** runner 用 `> out` 重定向，进程一启动文件就存在（0 字节）。
我按「文件数」判断跑完，实际数的是「开跑数」。第一波拿到的是跑得最快的样本，
B 组等于只统计了它的好成绩。改为写临时文件、跑完再 mv，文件存在才等于跑完。

**二、打分器有假阴性（更严重）。** v1 只认字面 `parseBlogMetadata` 和 `getSeries`。
实际输出里，「在 categoryMatch 那块下面加一段（两个数据源共用这个解析器）」被判未复用，
`groupPostsBySeries` 被判未落数据层。人工复核六个失分样本后确认全部误判。
v1 测的是我正则的词汇量，不是模型的行为。
若不复核直接发表，会得到一组看起来支持假设、实为仪器故障的数据。
v2 改为按行为判定，重打全部样本。

## 扩展维度（在总表产出前定义）

files_existing / files_new / touch_feishu_ts / touch_page / touch_ui_prim / chars

**三、我自己拿引文当证据。** 看到 C/01 那句「按 CLAUDE.md 里写的……不用碰 feishu.ts」，
我立刻得出「地图抑制了怀疑」的结论。量化之后：A 与 C 在「表达存疑」上都是 7/20，
裸奔交付都是 13/20，Fisher p=1.0000，毫无差异。
一条漂亮的引文让我跳过了统计——这正是本实验要批判的行为。
