import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 第三参数传空串：读取 .env 中所有变量，不限于 VITE_ 前缀
  const env = loadEnv(mode, __dirname, '')

  return {
    // 部署形态不写死：GitHub Pages 的项目站点位于 /仓库名/ 下，需要前缀；
    // 自有域名直达根路径，前缀反而会让所有资源 404。构建时用 VITE_BASE_PATH 切换。
    base: env.VITE_BASE_PATH || "/personalweb/",
    build: {
      // 默认输出到 ../docs，供 GitHub Pages 直接发布（该目录随仓库入库）。
      // 自托管构建输出到 app/dist，那里已被 gitignore——两份产物形态不同，
      // 混在一个目录会互相覆盖，且带错 base 的产物上线即整站 404。
      outDir: env.VITE_OUT_DIR || "../docs",
    },
    plugins: [inspectAttr(), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      // 监听地址默认仅回环，局域网访问不到——这是安全默认值，不要写死成开放。
      // 需要用手机或同网段设备访问时，在 .env 里设 VITE_DEV_HOST=0.0.0.0。
      host: env.VITE_DEV_HOST || 'localhost',
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
