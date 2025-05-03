import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@mui/material"],
  },
  server: {
    allowedHosts: ['1d64-41-184-147-118.ngrok-free.app'],
  },
})

