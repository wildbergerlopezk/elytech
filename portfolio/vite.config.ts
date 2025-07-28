import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <- Añade esta línea para que las rutas sean relativas
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
  },
})
