import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: { target: 'es2022', sourcemap: false },
  server: { fs: { allow: [resolve(import.meta.dirname, '../..')] } },
});
