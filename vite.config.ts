/// <reference types="vitest" />
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

interface VitestUserConfig extends UserConfig {
  test: {
    globals: boolean
    environment: string
    setupFiles: string[]
    css: boolean
  }
}

// https://vite.dev/config/
const config: VitestUserConfig = {
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 8081,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
}

export default defineConfig(config)
