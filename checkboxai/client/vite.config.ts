/// <reference types="vitest" />
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testSetup.js',
  },
});
