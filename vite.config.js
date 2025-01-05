import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'GistViewer',
      fileName: (format) => `gist-viewer-vue.${format}.js`
    },
    rollupOptions: {
      external: ['vue','path'],
      output: {
        globals: {
          vue: 'Vue',
          path: 'Path'
        }
      }
    }
  },
  plugins: [vue()],
})
