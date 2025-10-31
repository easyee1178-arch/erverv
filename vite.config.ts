import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    allowedHosts: ['firmix-com.onrender.com'],
  },
  preview: {
    host: true,
    // ใช้พอร์ตจากตัวแปรแวดล้อม ถ้าไม่มีให้ fallback เป็น 4173 เพื่อลดโอกาสชนกับ dev server
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ['firmix-com.onrender.com'],
  },
})
