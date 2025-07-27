import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as sass from 'sass'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Use the modern Sass API
        implementation: sass,
        // Enable source maps for better debugging
        sourceMap: true,
        // Additional Sass options
        quietDeps: true,
        style: 'compressed',
      },
    },
  },
})

