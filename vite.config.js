import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Custom config | prevent deprecated warning
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },

  // Make the server accessible externally
  server: {
    host: '0.0.0.0',  // Listen on all interfaces
    port: 5173,        // Make sure this is the correct port
  }
})
