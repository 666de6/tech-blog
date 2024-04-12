/*
 * @Author: Ada J
 * @Date: 2023-08-03 14:06:26
 * @LastEditTime: 2023-10-03 16:54:35
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: any){
          console.log(id)
          if(id.includes('.md')){
            return '/assets/blogs';
          }
        }
      }
    }
  }
})
