
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/SeedSavers/', // Required for GitHub Pages under a subdirectory
  plugins: [react()],
});