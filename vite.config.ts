/*
 * @Author: your name
 * @Date: 2022-03-04 16:28:04
 * @LastEditTime: 2022-04-26 19:29:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /viteVue3Demo/vite.config.ts
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue()
  ],
  build: {
    outDir: 'dist',
    assetsDir: "static",
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {  //添加别名
      '@': resolve(__dirname, 'src'),
      '@views': resolve(__dirname, 'src/views'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@utils': resolve(__dirname, 'src/assets/utils'),
      '@types': resolve(__dirname, 'src/types'),
    }
  }
})
