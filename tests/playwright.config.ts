import { defineConfig, devices } from '@playwright/test';

// All servers are zero-dependency static servers over BUILT output, so the
// same command works on the host and inside the Playwright container.
const server = (dir: string, port: number) => ({
  command: `node ../scripts/static-server.mjs ../${dir} ${port}`,
  url: `http://localhost:${port}/`,
  reuseExistingServer: !process.env.CI,
  timeout: 30_000,
});

export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  retries: 0, // flakes are fixed, never retried (CLAUDE.md §9)
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list']],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.001, animations: 'disabled', caret: 'hide' },
  },
  // {testDir} is the project's testDir (./visual) → tests/visual/__screenshots__/<tag>/<name>.png
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  use: {
    ...devices['Desktop Chrome'],
    trace: 'retain-on-failure',
    baseURL: 'http://localhost:4100',
  },
  projects: [
    { name: 'visual', testDir: './visual', use: { colorScheme: 'light' } },
    { name: 'a11y', testDir: './a11y' },
    { name: 'smoke', testDir: './smoke' },
  ],
  webServer: [
    server('apps/gallery/dist', 4100),
    server('apps/sandbox/html/dist', 4001),
    server('apps/sandbox/react/dist', 4002),
    server('apps/sandbox/vue/dist', 4003),
    server('apps/sandbox/angular/dist/browser', 4004),
  ],
});
