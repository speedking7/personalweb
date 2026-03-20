#!/bin/bash

# 个人博客启动脚本

echo "🚀 启动个人博客系统..."

# 检查是否安装了依赖
if [ ! -d "app/node_modules" ]; then
    echo "📦 安装前端依赖..."
    cd app && npm install && cd ..
fi

if [ ! -d "server/node_modules" ]; then
    echo "📦 安装后端依赖..."
    cd server && npm install && cd ..
fi

# 检查环境变量
if [ ! -f "app/.env" ]; then
    echo "⚠️  未找到 .env 文件，请先配置环境变量："
    echo "   cp app/.env.example app/.env"
    echo "   然后编辑 app/.env 填入飞书配置"
    exit 1
fi

# 启动后端服务器
echo "🔧 启动后端代理服务器..."
cd server
npm run dev &
BACKEND_PID=$!
cd ..

# 等待后端启动
sleep 3

# 启动前端服务器
echo "🎨 启动前端开发服务器..."
cd app
npm run dev

# 清理
kill $BACKEND_PID 2>/dev/null