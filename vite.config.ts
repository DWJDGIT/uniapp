import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.vue', '.less', '.scss', '.css'], // 省略后缀 以及 index.*
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
