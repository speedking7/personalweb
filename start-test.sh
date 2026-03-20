#!/bin/bash
# 启动飞书博客测试环境

echo "=== 启动飞书博客测试环境 ==="

# 启动后端代理服务器
echo "1. 启动后端代理服务器..."
cd /home/speedking/projects/personalweb/server
npx tsx src/feishu-proxy.ts &
BACKEND_PID=$!
echo "后端 PID: $BACKEND_PID"

sleep 3

# 启动前端开发服务器
echo "2. 启动前端开发服务器..."
cd /home/speedking/projects/personalweb/app
npx vite --port 5173 &
FRONTEND_PID=$!
echo "前端 PID: $FRONTEND_PID"

echo ""
echo "=== 测试环境已启动 ==="
echo "后端服务器: http://localhost:3001"
echo "前端服务器: http://localhost:5173/personalweb/"
echo ""
echo "按 Ctrl+C 停止服务"

# 等待
wait
