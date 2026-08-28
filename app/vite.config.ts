import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 第三参数传空串：读取 .env 中所有变量，不限于 VITE_ 前缀
  const env = loadEnv(mode, __dirname, '')

  return {
    // 默认根路径：站点已绑定自定义域名 blog.yingtongxue.cn，直达根目录。
    // 若要退回 github.io/personalweb/ 那种项目站点形态，构建时设
    // VITE_BASE_PATH=/personalweb/ —— 带错前缀上线即全站资源 404，
    // 且本地预览发现不了，因为本地是从根提供服务的。
    base: env.VITE_BASE_PATH || "/",
    build: {
      // 默认输出到 ../docs，供 GitHub Pages 直接发布（该目录随仓库入库）。
      // 自托管构建输出到 app/dist，那里已被 gitignore——两份产物形态不同，
      // 混在一个目录会互相覆盖，且带错 base 的产物上线即整站 404。
      outDir: env.VITE_OUT_DIR || "../docs",
      // 每次构建前清空 outDir。此前不敢开，是因为三份手写指南与产物混居在
      // docs/ 里，一清就把指南删了；指南已迁至仓库根的 guides/，docs/ 现在
      // 只剩构建产物，清理是安全的。
      //
      // 不开的代价是 assets/ 下的旧 hash 文件只增不减——曾积到 11 个，其中
      // 9 个早已无人引用，跟着仓库被每个人克隆。
      //
      // 前提：docs/ 内的一切都必须能由构建重新生成。CNAME、avatar、封面图
      // 一律放 app/public/（构建时原样复制），绝不要直接手工丢进 docs/，
      // 丢进去的下一次构建就没了。
      emptyOutDir: true,
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
