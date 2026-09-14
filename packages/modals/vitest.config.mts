import { defineVitestConfig } from '@stencil/vitest/config';

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  test: {
    name: 'spec',
    include: ['src/**/*.spec.{ts,tsx}'],
    environment: 'stencil',
    setupFiles: ['./vitest-setup.ts'],
  },
});
