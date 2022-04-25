import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve as resolvePath } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolvePath(__dirname, './src')
    }
  }
})
