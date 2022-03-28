import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
console.log(resolve, 'resolve');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {  //添加别名
        '@': resolve(__dirname, 'src'),
        '@views': resolve(__dirname, 'src/views'),
        '@images': resolve(__dirname, 'src/assets/images'),
        '@utils': resolve(__dirname, 'src/assets/utils'),
        '@types': resolve(__dirname, 'src/types'),
    }
},
})
