# 飞书驱动的博客系统

## 快速开始

### 1. 安装依赖

```bash
# 安装前端依赖
cd app
npm install

# 安装后端依赖
cd ../server
npm install
```

### 2. 配置环境变量

复制环境变量示例文件：

```bash
cd ../app
cp .env.example .env
```

编辑 `.env` 文件，填入飞书应用配置：

```env
VITE_FEISHU_APP_ID=你的应用ID
VITE_FEISHU_APP_SECRET=你的应用密钥
VITE_FEISHU_WIKI_TOKEN=你的知识库Token
VITE_FEISHU_BLOG_FOLDER_TOKEN=博客文件夹Token（可选）
VITE_DATA_SOURCE_MODE=auto
```

### 3. 启动开发服务器

**方式一：分别启动前后端**

```bash
# 终端1：启动后端代理服务器
cd server
npm run dev

# 终端2：启动前端开发服务器
cd app
npm run dev
```

**方式二：仅启动前端（使用静态数据）**

```bash
cd app
npm run dev
```

访问 http://localhost:5173/personalweb/

## 架构说明

```
personalweb/
├── app/                           # 前端项目
│   ├── src/
│   │   ├── data/
│   │   │   └── blogs.ts           # 博客数据层（飞书+静态降级）
│   │   ├── lib/
│   │   │   └── feishu.ts          # 飞书 API 客户端
│   │   └── pages/
│   │       ├── Blog.tsx           # 博客列表页
│   │       ├── BlogDetail.tsx     # 博客详情页
│   │       └── Home.tsx           # 首页（展示最新博客）
│   ├── .env                       # 环境变量配置
│   └── vite.config.ts             # Vite 配置
├── server/                        # 后端代理服务器（可选）
│   ├── src/
│   │   └── feishu-proxy.ts        # 飞书 API 代理
│   └── package.json
└── docs/
    ├── FEISHU_SETUP_GUIDE.md      # 📖 飞书配置完整指南
    └── FEISHU_BLOG_GUIDE.md       # 博客编写指南
```

## 数据源模式

系统支持三种数据源模式（通过 `VITE_DATA_SOURCE_MODE` 配置）：

| 模式 | 说明 | 适用场景 |
|-----|------|---------|
| `auto` | 优先从飞书获取，失败时自动降级到静态数据 | 生产环境（推荐） |
| `feishu` | 仅使用飞书知识库数据源 | 完全动态化场景 |
| `static` | 仅使用静态数据 | 纯静态部署、开发测试 |

### 数据流

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   博客页面       │────▶│   blogs.ts      │────▶│ feishu.ts       │
│  (Blog.tsx)     │     │  (数据层)        │     │ (飞书客户端)     │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                              ┌──────────────────────────┘
                              ▼
                    ┌─────────────────┐
                    │  后端代理服务器  │ (可选，推荐用于生产)
                    │  (server/)      │
                    └────────┬────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  飞书开放平台   │
                    │ (open.feishu.cn)│
                    └────────┬────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  飞书知识库     │
                    │  (博客文档)     │
                    └─────────────────┘
```

## 飞书配置

### 快速配置

1. 访问 [飞书开放平台](https://open.feishu.cn/) 创建企业自建应用
2. 获取 App ID 和 App Secret
3. 添加权限：`docx:document:readonly`、`wiki:wiki:readonly`、`drive:drive:readonly`
4. 发布应用版本
5. 在飞书中创建知识库，获取 Wiki Token 和 Folder Token
6. 复制 `app/.env.example` 为 `app/.env` 并填入配置

### 详细配置指南

📖 **完整配置指南**：[`docs/FEISHU_SETUP_GUIDE.md`](docs/FEISHU_SETUP_GUIDE.md)

包括：
- 飞书应用详细配置步骤
- 知识库结构设置
- 博客文章格式规范
- 故障排查指南

### 数据源模式

通过 `VITE_DATA_SOURCE_MODE` 配置：

| 模式 | 说明 | 适用场景 |
|-----|------|---------|
| `feishu` | 仅使用飞书知识库 | 完全动态化场景 |
| `static` | 仅使用静态数据 | 纯静态部署、开发测试 |
| `auto` | 优先飞书，失败降级静态 | 生产环境（推荐） |

## 部署

### 方式一：GitHub Pages（纯静态）

适合使用 `static` 或 `auto` 模式：

```bash
cd app
npm install
npm run build
```

构建产物输出到 `../docs` 目录，推送到 GitHub 后自动部署。

**注意**：纯静态部署时，飞书 API 调用可能因 CORS 问题失败，系统会自动降级到静态数据。

### 方式二：Vercel / Netlify（推荐）

1. 连接 GitHub 仓库
2. 配置环境变量（飞书相关配置）
3. 构建命令：`cd app && npm install && npm run build`
4. 输出目录：`app/dist`

### 方式三：独立服务器（带后端代理）

适合生产环境，需要后端代理处理飞书 API：

```bash
# 构建前端
cd app
npm run build

# 部署前端静态文件到 Nginx/Apache
# ...

# 运行后端代理服务器
cd server
npm install
npm run build
npm start
```

配置 Nginx 反向代理：
```nginx
location /api/feishu/ {
    proxy_pass http://localhost:3001/api/feishu/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

## 缓存策略

- **前端缓存**：10分钟（可配置）
- **后端缓存**：10分钟（Token 和 API 响应）
- **手动清除**：调用 `clearCache()` 或重启服务器

## API 接口

### 后端代理接口（可选）

如果使用后端代理服务器，提供以下接口：

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/feishu/auth` | POST | 获取访问令牌 |
| `/api/feishu/wiki/:wikiToken/nodes` | GET | 获取知识库节点 |
| `/api/feishu/docx/:docToken/raw` | GET | 获取文档原始内容 |
| `/api/feishu/docx/:docToken/blocks` | GET | 获取文档块 |
| `/api/feishu/cache/clear` | POST | 清除缓存 |
| `/health` | GET | 健康检查 |

**注意**：纯静态部署时不需要后端服务器，前端直接调用飞书 API（受 CORS 限制，会降级到静态数据）。

## 故障排查

### Q: 前端无法连接后端？

检查后端是否运行在 3001 端口，前端代理配置是否正确。

### Q: 飞书 API 报错？

1. 检查 App ID 和 App Secret 是否正确
2. 检查应用权限配置
3. 检查知识库 Token 是否正确
4. 查看浏览器控制台和后端日志

### Q: 文章没有更新？

1. 等待缓存过期（默认10分钟）
2. 清除浏览器缓存
3. 重启后端服务器清除所有缓存

## 开发计划

- [ ] 支持文章搜索
- [ ] 支持文章评论
- [ ] 支持 Markdown 实时预览
- [ ] 支持图片上传到飞书
- [ ] 支持文章分类管理
- [ ] 支持草稿箱功能

## 许可证

MIT