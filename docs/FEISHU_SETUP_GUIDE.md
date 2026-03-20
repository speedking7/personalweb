# 飞书知识库博客配置指南

本文档详细介绍如何配置飞书知识库作为博客内容源。

## 目录

1. [快速开始](#快速开始)
2. [飞书应用配置](#飞书应用配置)
3. [知识库配置](#知识库配置)
4. [博客文章格式](#博客文章格式)
5. [部署方式](#部署方式)
6. [故障排查](#故障排查)

## 快速开始

### 1. 创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 点击「创建企业自建应用」
3. 填写应用名称（如「个人博客」）和描述
4. 记录 **App ID** 和 **App Secret**

### 2. 配置应用权限

进入应用管理页面，添加以下权限：

- `docx:document:readonly` - 读取文档
- `wiki:wiki:readonly` - 读取知识库
- `drive:drive:readonly` - 读取云空间

**操作路径：** 开发配置 -> 权限管理 -> 添加 API 权限

### 3. 发布应用版本

**操作路径：** 版本管理与发布 -> 创建版本

- 填写版本号（如 1.0.0）
- 填写更新说明
- 点击「申请发布」
- 在飞书管理后台审核通过

### 4. 创建知识库

1. 在飞书工作台搜索「知识库」
2. 创建新的知识库或使用现有知识库
3. 在知识库中创建「博客」文件夹
4. 在文件夹中创建博客文章

### 5. 获取配置参数

#### 知识库 Token (Wiki Token)

1. 打开飞书知识库
2. 复制浏览器地址栏中的 URL
3. 提取 `wiki/` 后面的字符串

```
URL: https://xxx.feishu.cn/wiki/XXXXXXXXXXXXXXXXXXXX
                        ↑^^^^^^^^^^^^^^^^^^^^^^^
                        Wiki Token
```

#### 文件夹 Token (Folder Token)

1. 在知识库中右键点击「博客」文件夹
2. 选择「复制链接」
3. 提取 URL 中的 `node_token` 参数

```
URL: https://xxx.feishu.cn/wiki/XXX?node_token=YYYYYYYYYYYY
                                              ↑^^^^^^^^^^^^
                                              Folder Token
```

### 6. 配置环境变量

在项目根目录创建 `app/.env` 文件：

```env
# 飞书应用配置
VITE_FEISHU_APP_ID=cli_xxxxxxxxxxxx
VITE_FEISHU_APP_SECRET=xxxxxxxxxxxxxxxxxxxx

# 知识库配置
VITE_FEISHU_WIKI_TOKEN=xxxxxxxxxxxx
VITE_FEISHU_BLOG_FOLDER_TOKEN=xxxxxxxxxxxx

# 数据源模式
VITE_DATA_SOURCE_MODE=auto
```

### 7. 启动项目

```bash
# 安装依赖
cd app && npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173/personalweb/ 查看效果。

---

## 飞书应用配置

### 创建应用详细步骤

1. **登录飞书开放平台**
   - 访问 https://open.feishu.cn/
   - 使用企业管理员账号登录

2. **创建企业自建应用**
   - 点击右上角的「创建应用」
   - 选择「企业自建应用」
   - 填写应用信息

3. **记录应用凭证**
   - 进入「凭证与基础信息」页面
   - 复制 App ID 和 App Secret
   - ⚠️ App Secret 只显示一次，请妥善保存

### 配置权限详细步骤

1. 进入应用详情页
2. 点击左侧「开发配置」->「权限管理」
3. 点击「添加权限」按钮
4. 搜索并添加以下权限：

| 权限名称 | 权限 Key | 说明 |
|---------|---------|------|
| 查看文档 | docx:document:readonly | 读取文档内容 |
| 查看知识库 | wiki:wiki:readonly | 读取知识库结构 |
| 查看云空间 | drive:drive:readonly | 读取云空间文件 |

### 发布应用

1. 进入「版本管理与发布」页面
2. 点击「创建版本」
3. 填写版本信息：
   - 版本号：1.0.0
   - 更新说明：初始版本
   - 申请理由：用于个人博客内容管理
4. 点击「申请发布」
5. 在飞书管理后台审核通过

---

## 知识库配置

### 创建知识库结构

推荐的博客知识库结构：

```
📚 个人博客知识库
├── 📁 博客                    ← 博客文件夹（VITE_FEISHU_BLOG_FOLDER_TOKEN）
│   ├── 📄 React 18 新特性详解
│   ├── 📄 TypeScript 高级技巧
│   ├── 📄 我的 2024 年度总结
│   └── 📄 ...
├── 📁 草稿                    ← 草稿文件夹（不发布）
└── 📄 关于我                  ← 其他页面
```

### 设置文档权限

确保应用可以访问知识库：

1. 打开知识库设置
2. 进入「权限管理」
3. 添加应用为知识库成员
4. 设置权限为「可阅读」

---

## 博客文章格式

### 文档元数据

在文档开头添加 YAML frontmatter 格式元数据：

```markdown
---
title: "文章标题"
category: "技术"
tags: ["React", "前端", "JavaScript"]
date: "2024-12-15"
cover: "https://example.com/cover.jpg"
readTime: 8
excerpt: "文章摘要，显示在列表中"
---

# 正文内容

文章正文使用 Markdown 格式编写...
```

### 元数据字段说明

| 字段 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| title | string | 是 | 文章标题 |
| category | string | 否 | 文章分类（默认：未分类） |
| tags | array | 否 | 文章标签 |
| date | string | 否 | 发布日期（格式：YYYY-MM-DD） |
| cover | string | 否 | 封面图片 URL |
| readTime | number | 否 | 阅读时间（分钟，默认自动计算） |
| excerpt | string | 否 | 文章摘要 |

### 示例文档

```markdown
---
title: "React 18 新特性详解"
category: "技术"
tags: ["React", "前端", "JavaScript"]
date: "2024-12-15"
cover: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
readTime: 8
excerpt: "深入了解 React 18 带来的并发特性、自动批处理、Suspense 改进等重要更新。"
---

## React 18 新特性详解

React 18 带来了许多令人兴奋的新特性...

### 并发特性

React 18 引入了并发渲染机制...
```

### 注意事项

1. **文档格式**：飞书文档会自动转换为 Markdown
2. **图片处理**：
   - 可以使用飞书文档中插入的图片
   - 也可以使用外部图片 URL（推荐）
3. **代码块**：飞书代码块会自动格式化
4. **表格支持**：飞书表格会转换为 Markdown 表格

---

## 部署方式

### 方式一：GitHub Pages（纯静态部署）

适用于不需要后端服务的场景，使用 `auto` 或 `static` 模式：

```bash
cd app
npm install
npm run build
```

构建产物输出到 `docs` 目录，推送到 GitHub 后自动部署。

**注意**：纯静态部署时，飞书 API 调用可能会因 CORS 问题失败，系统会自动降级到静态数据。

### 方式二：使用后端代理（推荐）

使用后端代理服务器处理飞书 API 请求：

```bash
# 启动后端服务器
cd server
npm install
npm run dev

# 启动前端（新终端）
cd app
npm run dev
```

**优势**：
- 避免在前端暴露 App Secret
- 更好的性能和缓存控制
- 支持服务器端渲染

### 方式三：Vercel / Netlify

1. 连接 GitHub 仓库
2. 配置环境变量（飞书相关配置）
3. 构建命令：`cd app && npm install && npm run build`
4. 输出目录：`app/dist`

---

## 故障排查

### 常见问题

#### Q: 博客列表为空？

**检查步骤：**

1. 检查 `.env` 文件配置是否正确
2. 检查浏览器控制台是否有错误信息
3. 检查网络请求的响应
4. 确认飞书应用已发布且权限正确
5. 确认知识库文档包含正确的元数据格式

**调试命令：**

```javascript
// 在浏览器控制台检查飞书客户端状态
feishuBlogClient.getCategories();
feishuBlogClient.getTags();
```

#### Q: 飞书 API 返回 403 错误？

**解决方案：**

1. 检查 App ID 和 App Secret 是否正确
2. 确认应用已发布并通过审核
3. 检查应用是否具有足够的权限
4. 确认知识库已授权给应用访问

#### Q: 文章更新后没有同步？

**解决方案：**

1. 清除浏览器缓存（默认缓存 10 分钟）
2. 调用 `clearCache()` 清除客户端缓存
3. 重启后端服务器清除服务器缓存

```javascript
// 清除缓存
import { clearCache } from '@/data/blogs';
clearCache();
```

#### Q: CORS 跨域错误？

**解决方案：**

1. 使用后端代理服务器
2. 或在飞书开放平台配置域名白名单

#### Q: 如何调试飞书 API？

**方法：**

1. 查看浏览器开发者工具的 Network 面板
2. 检查后端服务器日志
3. 使用 Postman 测试飞书 API

### 错误代码对照

| 错误码 | 说明 | 解决方案 |
|-------|------|---------|
| 400 | 请求参数错误 | 检查 Token 是否正确 |
| 401 | 未授权 | 检查 App ID 和 App Secret |
| 403 | 权限不足 | 检查应用权限配置 |
| 404 | 资源不存在 | 检查 Wiki Token 和 Folder Token |
| 429 | 请求过于频繁 | 等待一段时间后重试 |
| 500 | 服务器错误 | 稍后重试或联系飞书支持 |

---

## 高级配置

### 自定义缓存策略

修改 `app/src/lib/feishu.ts` 中的缓存配置：

```typescript
const CACHE_CONFIG = {
  enabled: true,
  duration: 5 * 60 * 1000, // 5分钟
};
```

### 自定义文档解析

修改 `parseBlogMetadata` 函数以支持更多元数据字段：

```typescript
function parseBlogMetadata(content: string, docId: string): Partial<BlogPost> {
  // 添加自定义字段解析
  const authorMatch = frontmatter.match(/author:\s*["']?([^"'\n]+)["']?/);
  if (authorMatch) metadata.author = authorMatch[1].trim();
  
  return metadata;
}
```

### 多数据源混合

可以同时使用飞书知识库和本地 Markdown 文件：

```typescript
export async function getBlogPosts(): Promise<BlogPost[]> {
  const [feishuPosts, localPosts] = await Promise.all([
    feishuBlogClient.fetchBlogPosts().catch(() => []),
    fetchLocalPosts(),
  ]);
  
  return [...feishuPosts, ...localPosts];
}
```

---

## 参考资源

- [飞书开放平台文档](https://open.feishu.cn/document/)
- [飞书 Wiki API](https://open.feishu.cn/document/server-docs/docs/wiki-v2/wiki-overview)
- [飞书 Docx API](https://open.feishu.cn/document/server-docs/docs/docs/docx-v1/docx-overview)
