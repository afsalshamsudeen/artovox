import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      'bc95-2403-a080-1c-506a-f2c7-5fd5-68f8-f0be.ngrok-free.app'
    ]
  }
})
