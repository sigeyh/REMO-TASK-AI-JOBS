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
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            // Spoof browser headers to bypass Imunify360 bot protection
            proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
            proxyReq.setHeader('Accept', 'application/json, text/plain, */*');
            proxyReq.setHeader('Origin', 'https://megapay.co.ke');
            proxyReq.setHeader('Referer', 'https://megapay.co.ke/');
            proxyReq.setHeader('Sec-Ch-Ua', '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"');
            proxyReq.setHeader('Sec-Ch-Ua-Mobile', '?0');
            proxyReq.setHeader('Sec-Ch-Ua-Platform', '"Windows"');
            proxyReq.setHeader('Sec-Fetch-Site', 'same-origin');
            proxyReq.setHeader('Sec-Fetch-Mode', 'cors');
            proxyReq.setHeader('Sec-Fetch-Dest', 'empty');
          });
        }
      },
    },
  },
})

