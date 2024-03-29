import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Agrega esta línea

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
