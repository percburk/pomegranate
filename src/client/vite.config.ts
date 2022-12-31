import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, PluginOption } from 'vite'
import checker from 'vite-plugin-checker'
import postcss from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: 'http://localhost:2387',
    port: 2387,
    strictPort: true,
  },
  resolve: {
    alias: { src: path.resolve(__dirname, './src') },
  },
  css: { postcss },
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      enableBuild: false,
    }),
  ] as PluginOption[],
})
