import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Root-relative paths for clean URLs
  plugins: [react()],
  build: {
    outDir: 'dist', // Standard build output
    emptyOutDir: true, // Clear directory on rebuild
  },
  server: {
    port: 5173, // Default Vite port
    strictPort: true, // Avoid port fallback
  }
});