import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 第三参数传空串：读取 .env 中所有变量，不限于 VITE_ 前缀
  const env = loadEnv(mode, __dirname, '')

  return {
    base: "/personalweb/",
    build: {
      // 为了让 GitHub Pages 直接用 main 分支下的 /docs 目录
      outDir: "../docs",
    },
    plugins: [inspectAttr(), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        // 代理飞书 API 请求到后端服务器。
        // 端口不写死：本机若有其他服务占用 3001，改 .env 里的
        // VITE_PROXY_TARGET 即可，不要改动此处，以免把某台机器的
        // 环境冲突固化进版本历史。默认值须与 server/.env.example 保持一致。
        '/api/feishu': {
          target: env.VITE_PROXY_TARGET || 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
});
