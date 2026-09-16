import { expect, test } from '@playwright/test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createSSRApp, h } from 'vue';
import { renderToString as renderVue } from 'vue/server-renderer';

/**
 * The framework bindings render declarative shadow DOM on the server (ADR-0023): the React
 * server-component entry (`/next`) and the Vue proxies without a `window` both go through the
 * tier's hydrate module.
 */
const dsd = /<art-button[^>]*>\s*<template shadowrootmode="open"[^>]*>[\s\S]*<button[^>]*part="button"/;

test('React — @aranghat/base-react/next renders through the hydrate module', async () => {
  const { Button } = await import('@aranghat/base-react/next');
  // a React Server Component: an async function that resolves to the element tree Next.js streams
  const tree = await (Button as unknown as (props: Record<string, unknown>) => Promise<React.ReactElement>)({ variant: 'outline', size: 'sm', children: 'Save' });
  const html = renderToStaticMarkup(tree);
  expect(html).toMatch(dsd);
  expect(html).toContain('variant="outline"');
  expect(html).toContain('Save');
});

test('Vue — @aranghat/base-vue renders through the hydrate module', async () => {
  const { Button } = await import('@aranghat/base-vue');
  const app = createSSRApp({ render: () => h(Button, { variant: 'outline', size: 'sm' }, () => 'Save') });
  const html = await renderVue(app);
  expect(html).toMatch(dsd);
  expect(html).toContain('variant="outline"');
  expect(html).toContain('Save');
});

test('React client entry stays a client module', async () => {
  const { readFileSync } = await import('node:fs');
  const { createRequire } = await import('node:module');
  const { dirname, join } = await import('node:path');
  const pkg = dirname(createRequire(import.meta.url).resolve('@aranghat/base-react/package.json'));
  expect(readFileSync(join(pkg, 'dist/components/art-button.js'), 'utf8')).toContain("'use client'");
  expect(readFileSync(join(pkg, 'dist/components/art-button.server.js'), 'utf8')).toContain("hydrateModule: typeof window === 'undefined' ? import('@aranghat/hydrate')");
  expect(createElement).toBeTruthy();
});
