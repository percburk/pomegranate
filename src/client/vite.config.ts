import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  resolve: {
    alias: { src: path.resolve(__dirname, './src') },
  },
  plugins: [react()],
})
