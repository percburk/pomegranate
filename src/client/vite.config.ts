import path from 'path'
import linaria from '@linaria/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  resolve: {
    alias: { src: path.resolve(__dirname, './src') },
  },
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
    }),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
  ],
})
