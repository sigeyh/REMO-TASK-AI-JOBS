import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/megapay': {
        target: 'https://megapay.co.ke',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/megapay/, '/backend/v1/initiatestk'),
      },
    },
  },
})

