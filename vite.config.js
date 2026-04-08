import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  publicDir: '../public'  // o 'public' si la tenés dentro de src
})