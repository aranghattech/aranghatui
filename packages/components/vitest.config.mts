import { defineVitestConfig } from '@stencil/vitest/config';

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  test: {
    name: 'spec',
    include: ['src/**/*.spec.{ts,tsx}'],
    environment: 'stencil',
    // jsdom instead of mock-doc: shadow-DOM event retargeting, composed events and capture-phase
    // ordering behave like a browser (group components depend on them).
    environmentOptions: { stencil: { domEnvironment: 'jsdom' } },
    setupFiles: ['./vitest-setup.ts'],
  },
});
