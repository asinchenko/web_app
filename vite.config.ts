import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // разрешить внешний доступ (0.0.0.0)
    allowedHosts: ['web-app'], // <--- добавляем сюда твой hostname
  },
})
