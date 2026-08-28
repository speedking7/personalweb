# 部署指南

## 概述

本博客系统支持多种部署方式，根据你的需求选择合适的方案。

## 方案一：纯静态部署（推荐）

**适用场景**：不需要实时同步飞书内容，使用静态数据作为博客源。

**优点**：
- 部署简单，无需服务器
- 访问速度快
- 免费（GitHub Pages、Vercel 等）

**步骤**：

1. 在飞书中编写博客内容
2. 本地运行同步脚本，将飞书内容同步到 `blogs.ts`
3. 构建并部署

```bash
# 本地开发
cd app
npm install
npm run dev

# 构建
npm run build

# 部署到 GitHub Pages（已配置）
# 构建产物自动输出到 ../docs 目录
git add ../docs
git commit -m "Update blog"
git push
```

## 方案二：动态部署（需要服务器）

**适用场景**：需要实时同步飞书内容，不依赖本地构建。

**优点**：
- 飞书文档更新后网站自动同步
- 无需手动构建部署
- 真正的动态博客

**缺点**：
- 需要运行后端服务器
- 可能产生服务器费用
- 需要维护后端服务

### Vercel 部署

Vercel 支持 Serverless Functions，是部署后端的好选择。

1. **配置项目**

创建 `vercel.json`：

```json
{
  "version": 2,
  "builds": [
    {
      "src": "app/package.json",
      "use": "@vercel/static-build"
    },
    {
      "src": "server/src/feishu-proxy.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/src/feishu-proxy.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/app/$1"
    }
  ]
}
```

2. **部署**

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

3. **配置环境变量**

在 Vercel Dashboard 中添加环境变量：
- `FEISHU_APP_ID`
- `FEISHU_APP_SECRET`
- `VITE_FEISHU_WIKI_TOKEN`
- `VITE_FEISHU_BLOG_FOLDER_TOKEN`

### Railway 部署

Railway 支持持久化服务器，适合需要长期运行的应用。

1. **创建项目**

连接 GitHub 仓库到 Railway。

2. **配置服务**

创建两个服务：
- **前端**：静态站点
- **后端**：Node.js 应用

3. **后端配置**

```bash
# 构建命令
cd server && npm install && npm run build

# 启动命令
cd server && npm start

# 环境变量
FEISHU_APP_ID=xxx
FEISHU_APP_SECRET=xxx
PORT=3001
```

4. **前端配置**

```bash
# 构建命令
cd app && npm install && npm run build

# 输出目录
app/dist

# 环境变量
VITE_API_URL=https://your-backend.railway.app
```

### 自建服务器部署

使用 Nginx + PM2 部署到自己的服务器。

1. **安装依赖**

```bash
# Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2
sudo npm install -g pm2

# Nginx
sudo apt install nginx
```

2. **部署前端**

```bash
cd app
npm install
npm run build

# 将 dist 目录复制到 Nginx 目录
sudo cp -r dist/* /var/www/html/blog/
```

3. **部署后端**

```bash
cd server
npm install
npm run build

# 使用 PM2 启动
pm2 start dist/feishu-proxy.js --name blog-api

# 开机自启
pm2 startup
pm2 save
```

4. **配置 Nginx**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 前端静态文件
    location / {
        root /var/www/html/blog;
        try_files $uri $uri/ /index.html;
    }

    # API 代理
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **配置 SSL（可选）**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 方案三：混合部署

前端部署到静态托管平台，后端部署到 Serverless 平台。

**架构**：
```
GitHub Pages (前端) → Vercel Functions (后端) → 飞书 API
```

**步骤**：

1. **后端部署到 Vercel**

参考上面的 Vercel 部署章节。

2. **前端部署到 GitHub Pages**

更新 `app/vite.config.ts`：

```typescript
export default defineConfig({
  // ... 其他配置
  server: {
    proxy: {
      '/api/feishu': {
        target: 'https://your-backend.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
```

3. **配置 CORS**

在后端添加 GitHub Pages 域名到 CORS 白名单：

```typescript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-username.github.io',
  ],
  credentials: true,
}));
```

## 缓存策略

### 前端缓存

- **内存缓存**：10分钟（默认）
- **可配置**：通过 `VITE_CACHE_DURATION` 环境变量

### 后端缓存

- **Token 缓存**：根据飞书返回的过期时间
- **API 响应缓存**：10分钟（可通过 Redis 增强）

### CDN 缓存

如果使用 CDN，建议配置：
- 静态资源：长缓存（1年）
- HTML 页面：短缓存（5分钟）或不缓存
- API 接口：不缓存

## 监控与日志

### 健康检查

后端提供健康检查接口：

```bash
curl http://localhost:3001/health
```

### 日志

后端使用 console 输出日志，可以使用 PM2 查看：

```bash
pm2 logs blog-api
```

### 监控

推荐使用：
- **Uptime Robot**：免费监控网站可用性
- **Sentry**：错误追踪
- **LogRocket**：用户行为分析

## 性能优化

1. **启用 Gzip 压缩**
2. **使用 CDN 加速静态资源**
3. **配置浏览器缓存策略**
4. **图片优化**：使用 WebP 格式
5. **代码分割**：Vite 自动处理

## 故障排查

### 构建失败

```bash
# 检查依赖
cd app
npm install

# 检查 TypeScript 错误
npm run build
```

### API 请求失败

1. 检查后端是否运行
2. 检查 CORS 配置
3. 检查环境变量
4. 查看后端日志

### 飞书 API 错误

1. 检查 App ID 和 Secret
2. 检查应用权限
3. 检查 API 调用频率

## 回滚策略

### 前端回滚

```bash
# 回滚到上一个版本
git revert HEAD
npm run build
git push
```

### 后端回滚

```bash
# 使用 PM2 回滚
pm2 stop blog-api
git checkout HEAD~1
npm run build
pm2 restart blog-api
```

---

*更新时间：2024-12-20*