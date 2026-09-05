# Knodo 平台能力与边界 · 事实清单

> 来源：2026-09 通读 `/home/speedking/projects/knodo`（255 文件 / 79M）产出。
> 用途：AI Agent 实战系列的平台事实底稿。
> 证据等级沿用该项目约定：🟢 已实测 / 🟡 官方文档未实测 / 🔴 推导。
> **注意**：含账号权限等内部信息，入公开库前需脱敏（见文末）。

## 一、一个 agent 由什么构成

层级：组织 → 工作空间 → 知识库 / AI 配置 / 成员。

| 概念 | 是什么 |
|---|---|
| Bot | 组织级独立角色，非依附空间。必填仅名称 + System Prompt + 可见性；可加入多空间、绑「个人技能」Plugin（跟人走）、当任务负责人 🟡 |
| Plugin | 打包容器：`.claude-plugin/plugin.json`（必需）+ `skills/`/`agents/`/`commands/`/`hooks/`/`.mcp.json`（可选）🟡 |
| Skill | `SKILL.md` + YAML frontmatter（至少 name/description），解析成 `type=skill` 组件 🟢 |
| MCP server | `.mcp.json` 声明，云端沙箱以 stdio 起进程 🟢 |
| 空间 | 知识库(Git) + 对话 + Agent 团队 + 任务 + 工作指引 🟡 |
| 任务 | 恒有人类责任人 `assignedTo`，可选 `assignedBotId`，两者并存 🟡 |
| 自动化任务 | 四类：ONE_TIME / RECURRING(Cron) / 事件回调 / Webhook 🟡 |
| 事件回调 | 12 个事件枚举，JS 条件过滤，5 秒去重，operationId 级去重 🟡 |

**最小可干活集**：空间 + 知识库文件 + Bot（写好 System Prompt）。三样全在 Web 点得出来。
Plugin/Skill/MCP 只在需要可复用、可门禁、行为可核查时才必要。

**关键结构事实**：Skill 与 MCP 是四种 AgentOS（Claude Code/Codex/Cortexa/OpenCode）**唯二全绿**的扩展点；
Agent 定义、Command、Hook 跨运行时不兼容 🟡。

## 二、从零搭的实际步骤

**Web 点得出来**：建空间 → 传知识库文件 → 写工作指引（每次新会话作 System Prompt 注入 🟡）
→ 空间设置「AI 成员」新建 → 写 System Prompt/欢迎语/可见性 → 「个人技能」Tab 绑 Plugin
→ 邀请 Bot 进其他空间 → 建任务并把负责人设成 Bot（自动创建执行会话）→ 任务→自动化任务→Cron。

**必须写文件/代码/调 API**：写 `SKILL.md` 及 frontmatter；`zip -r` 打包且**根层级要平铺**（否则组件解析为零）；
MCP server 是真程序；接入契约手写；部署与回读校验脚本。

**有一条半无代码路径**：平台支持「上传 Skill 包」自动生成 Plugin 包装 🟡，
但仍要求会写 YAML frontmatter 和会打 zip。

**不会写代码的人卡在**：传完知识即可对话；卡点在绑 Plugin 到配 Cron 之间——
SKILL.md frontmatter、zip 层级、MCP、以及**验证「真的装上了」**。

## 三、凭证体系（头号易错点）

| | API Key | PAT |
|---|---|---|
| 级别 | 组织级，每组织仅一个 | 个人级，`jvs_` 前缀 |
| 管什么 | **只是大模型渠道**，回答「用谁的模型算」，碰不到空间数据 | 平台 REST API |
| 获取 | 组织设置→AI 模型→显示 | 头像→个人设置→API 密钥（**只显示一次**） |
| 配在哪 | `ANTHROPIC_AUTH_TOKEN` + `ANTHROPIC_BASE_URL` | `Authorization: Bearer jvs_…` |

第三种 `JAVIS_AUTH_TOKEN`：会话内注入、代表当前会话用户、不提权。

**易错的具体形态**：
1. 把 API Key 当平台 API 凭证去调 `/api/v1/*`（项目自评「最常见的错误」）
2. Base URL 后缀：Claude Code **不加** `/v1`，OpenAI 协议客户端**必须加** `/v1`
3. PAT 三重约束：能力分类 + 资源范围 + **创建者当前业务权限**；权限对不上时报的不是「缺权限」而是调用失败 🟡
4. 泄漏面：实测凭据会散落到多个文件、且存在新旧不同值，其中若干处是**工具自动落盘**（错误状态快照、中断 artifact）——只清源码不够 🟢

## 四、能力边界（教学必须前置）

| 做不到 | 根因 | 等级 |
|---|---|---|
| Registry 门禁 / 统一检索 / 索引级 ACL | **沙箱内 Agent 持 shell，`cat` 一下即可绕过任何闸口**；实测 Bot 用原生 Read/Bash 绕过 MCP 门禁读到被排除文件 | 🟢 |
| 任何平台方控制面 | 我方只是用户不是平台方 | — |
| 后端服务注册 | 应用模板只支持纯前端，无后端接口注册机制 | 🟡 |
| 远程 MCP（http/sse） | 两种标准配置都解析成功、绑定成功，但 Bot 工具集里 **tool_call=0** | 🟢 |
| 执行空间 / 8 路并发 | 建执行空间需主空间已配远程 Git，而所有自有空间 `gitRepoPath` 为空 | 🟢/🔴 |
| 记忆系统按蓝图用 | 管理页**不能新增或编辑记忆内容**，仅 Claude Code 引擎，1000 条/100MB | 🟡 |
| 跨空间事件汇总 | 事件严格按 workspaceId 隔离 | 🟡 |
| 索引级权限、按消费方凭证过滤、身份透传 | knodo 用户身份下判定为 ❌ | — |

**硬性配额**：自动化任务最小间隔 5 分钟、每日 288 次、单次默认 30 分钟（最大 2 小时）、执行历史保留 30 天。
**授权面**：账号可见空间数可能远小于组织实有空间数，「治理所有空间」这类目标要先确认授权范围。

## 五、知识从哪来

- **建**：知识库就是 Git 文件仓库。API 首选 `PUT /workspaces/{ws}/files/text-file`，**目录不存在会自动逐级创建** 🟢
- **取**：AI 自动检索 + `@` 引用 + 工作指引整体作 System Prompt 注入 🟡
- **检索能力**：只有关键词/文件级，**没有平台级向量或统一检索**
- **跨空间**：共享知识库是**引用不是拷贝**，转存后源目录变 symlink，内核级只读 🟢
- **高危**：工作指引是两段结构（YAML frontmatter + 正文），**纯 Markdown 覆盖写会把 frontmatter 整块冲掉，
  而「回读比哈希」照样通过**——比的是自己刚写进去的那份 🔴
- 把领域知识塞进 guideline 会固定占 4000+ 字符 context 且**没有 file:line**

## 六、监控、评估、成本

**平台原生有**：组织统计分析——Token 趋势、部门/空间/成员/模型多维、**Plugin/Skill 调用排名**、
7×24 热力图、AI 落地评级（L1–L4，5 维雷达），每分钟增量聚合。会话 messages 里有 `toolName`/`toolResult`
（**项目唯一采信的证据源**）。自动化任务有执行历史（30 天）。

**平台原生没有**：知识质量 eval、回归、忠实度 judge。

## 七、human-in-the-loop

任务四阶段 BACKLOG/IN_PROGRESS/REVIEW/COMPLETED；任务中心五泳道，
**「待我审查」= assignedTo=me AND phase=REVIEW**。Bot 执行完进该泳道，人可通过或退回
（退回必须填原因，系统自动记为评论）。

**必须提前讲的陷阱**：*工作空间状态配置里如果没有阶段为「人工审查」的状态，
Bot 完成后直接标记为已关闭*——**审查环节会静默消失**。
另：任务表单的「执行者」只设默认执行者，**点「立即执行」才创建执行会话** 🟡。

## 八、已踩过的坑（原以为 X、实测是 Y）

1. 以为插件更新要删了重传、id 会漂移 → `PUT /plugins/{id}/reupload` **保留 id 与 Bot 绑定** 🟢
2. 以为 author 不随包更新 → 元数据整体随包走。错在拿「与现状相同的输入」去测：
   **输入与现状相同时，机制生效与否都观察不到差别**。这条错事实在下游长出了一个昂贵且不存在的重建计划 🟢
3. 以为超时的 `PUT` 无效果 → 它**很可能持锁挂起**，此后 3 小时所有 reupload 被 409 拒绝。
   **「没有可见变更 ≠ 没有产生影响」**；且该锁状态在详情接口 23 个字段中无任何体现
4. 以为「已发布/已绑定/组件非空」= Skill 可调用 → **三者每一层都不能替代下一层**。
   v0.3.0 `components=[]` 照样能 PUBLISHED 并绑 Bot 🟢
5. 以为 Bot 说「四个 Skill 均已成功触发」是证据 → 平台侧同期返回 `Unknown skill`。
   **Agent 自报不算数，只采信 messages 的 toolName/toolResult** 🟢
6. 以为 `components=[]` 就是解析失败 → reupload 期间会**瞬时归零**再恢复，单次采样不可判定
7. 以为 `GET /files` 不接受参数 → 参数名是 `prefix`/`search`/`includeIgnored` 🟢
8. 以为要用「状态+lastEventIndex+连续 3 次」判终态（误判点距真终点 **4178 个事件**）
   → 根因是订阅错了轮次，用 `activeResponseId → expectedResponseId` 即可
9. 以为 `clientMessageId` 不存在 → **生产 API 必填**，官方参数表漏列 🟢
10. 以为 golden_questions 机器取不到 → 五条完好躺在知识文件 frontmatter 里。
    错在**只查了一处就推广成「全空间没有」**。不复核就拿它判 Bot，**Bot 答对反而会被判未命中**
11. 同源第二次：以为 freshness_meta 本空间为空 → 实存。纪律固化为「**先去取，再填**」
12. 以为提示词能管住扫描范围 → Bot 自行读了上一轮报告并称其为「对照基线」，还顺手读了 `.gitignore`。
    **提示词能规定「做什么」，规定不了「不做什么」**；改为代码级门禁后才成立 🟢
13. 以为 MCP 工具层门禁 = 隔离 → 中文 prompt 被 PowerShell 管道损坏后，
    Bot 改用原生 Read/Bash 读到同一路径 🟢
14. 以为 stdio 直出中文没问题 → Codex/Windows 在 tools/list 握手后 parse error、**产品工具整体不可见**
15. 以为上下文给得多输出更好 → round3 看得**更少**，4 条全部有证据零编造；
    round2 看得多却编造了一条「上轮已记录」的历史
16. 以为 defaultModelId 是平台冲突 → 空间默认模型是 **AgentOS + model 二元组**
17. 官方 FAQ 说「不支持对话级模型切换」→ `chat/submit` 有 model 参数且实测有效。**API 能力 > UI 能力**

## 九、一句判断

**业务顾问独立搭出能干活的 agent：能，但只到「能跑」为止。**

能独立完成：空间 + 知识库 + 带 System Prompt 的 Bot + 定时任务 + 任务审查泳道，全程 Web 点击，
这已经是一个能干活的问答型/巡检型 agent。

**卡点三个，全在「从能跑到可信」这一段**：
1. **打包与注册**——SKILL.md frontmatter、zip 根层级、components 解析
2. **验证**——「已发布/已绑定/它自己说做了」三者都不算数，判定必须看平台工具执行记录。
   业务顾问既不知道要看，也不知道去哪看
3. **约束**——凡是不希望 agent 做的事，提示词一律管不住，必须变成代码或结构上的不可达。
   而写代码这一步没有无代码替代

**培训设计的直接含义**：把「搭出来」和「信得过」拆成两门课。第一门业务顾问自己能通关；
第二门必须配一个会写代码的搭档，否则学员会带着一个**看起来在跑、实际什么都没管住**的 agent 结业。

---

## 脱敏说明

本文件已做过一轮脱敏：具体的凭据泄漏文件数、账号角色、可见空间数与组织实有空间数均已泛化。
再次外发前仍需确认：不含任何 `jvs_` 前缀真实值、组织名、空间名、成员姓名。
