import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SeedSavers/', // <--- This is essential for GitHub Pages
  plugins: [react()],
})
