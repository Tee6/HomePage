import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/HomePage/",
  server: {
    host: '0.0.0.0', // or 'your-network-ip'
    port: 3000       // optional: specify a port
  }
})
