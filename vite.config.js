import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// User page (johnnyzhang99.github.io) is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
