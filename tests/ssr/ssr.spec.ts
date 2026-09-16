import { expect, test } from '@playwright/test';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { renderToString } from '@aranghat/hydrate';

/**
 * Server-side rendering (ADR-0023).
 * `render`: every HTML sandbox sample renders in Node through the composed hydrate module — a
 * declarative shadow root for every element, no runtime error.
 * `hydrate`: the first example of each component is then served to a browser where the
 * `artui-ssr` client adopts the server-rendered shadow roots — the same pixels before and after
 * the script runs, no duplicated content, no page error.
 */
const here = import.meta.dirname;
const samples = resolve(here, '../../apps/sandbox/html/src/samples');
const pages = resolve(here, '.pages');
const ids = readdirSync(samples, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) => readdirSync(resolve(samples, d.name)).sort().map((f) => `${d.name}/${f.replace(/\.html$/, '')}`));
/** Light-DOM components (ADR-0021) have no shadow root to serialize. */
const lightDom = new Set(['art-table', 'art-typography']);

async function render(id: string) {
  const html = readFileSync(`${samples}/${id}.html`, 'utf8');
  const r = await renderToString(html, { fullDocument: false });
  const problems = r.diagnostics.filter((d) => d.level === 'error' || d.level === 'warn').map((d) => d.messageText);
  // light-DOM components (ADR-0021) ship their stylesheet for the document head, not a shadow root
  const styles = r.styles.map((s) => `<style${s.id ? ` sty-id="${s.id}"` : ''}>${s.content ?? ''}</style>`).join('');
  return { html: r.html ?? '', styles, problems };
}
/** Tags in the rendered markup (sample scripts mention tags too) that carry no declarative shadow root. */
const withoutShadowRoot = (markup: string) => {
  const html = markup.replace(/<script[\s\S]*?<\/script>/g, '');
  return [...new Set(html.match(/<art-[a-z-]+/g) ?? [])].map((t) => t.slice(1)).filter((t) => !lightDom.has(t) && !new RegExp(`<${t}[^>]*><template shadowrootmode="open"`).test(html));
};

test.describe('render', () => {
  for (const id of ids) {
    test(id, async () => {
      const { html, problems } = await render(id);
      expect(problems).toEqual([]);
      expect(withoutShadowRoot(html)).toEqual([]);
    });
  }
});

const firstExample = new Map<string, string>();
for (const id of ids) { const component = id.split('/')[0]!; if (!firstExample.has(component)) firstExample.set(component, id); }

/** Element counts inside every shadow root, deep, keyed by tag and order — the same before and after hydration. */
const shadowCounts = () => {
  const out: Record<string, number> = {};
  const walk = (root: ParentNode) => {
    for (const el of Array.from(root.querySelectorAll('*'))) {
      if (el.shadowRoot) {
        out[`${el.tagName.toLowerCase()}#${Object.keys(out).length}`] = el.shadowRoot.querySelectorAll(':not(style)').length;
        walk(el.shadowRoot);
      }
    }
  };
  walk(document);
  return out;
};

test.describe('hydrate', () => {
  for (const id of firstExample.values()) {
    test(id, async ({ page }, testInfo) => {
      // the samples' own <script> blocks are wiring for the sandbox app (bare imports), not component output
      const rendered = await render(id);
      const html = rendered.html.replace(/<script[\s\S]*?<\/script>/g, '');
      mkdirSync(resolve(pages, id.split('/')[0]!), { recursive: true });
      writeFileSync(`${pages}/${id}.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/aranghat.css">${rendered.styles}<style>body{margin:0;padding:16px;background:var(--art-color-bg-canvas);color:var(--art-color-fg-default)}</style></head><body>${html}<script type="module" src="/client.js"></script></body></html>`);
      const url = `http://localhost:4105/${id}.html`;
      await page.emulateMedia({ reducedMotion: 'reduce' });
      // hermetic: nothing but the page's own files (a remote avatar image, for one, must not decide the pixels)
      await page.route((u) => u.origin !== 'http://localhost:4105', (route) => route.abort());

      // 1. server output only: the script is blocked
      await page.route('**/client.js', (route) => route.abort());
      await page.goto(url);
      const before = await page.evaluate(shadowCounts);
      // light-DOM components (ADR-0021) have no shadow root; everything else must arrive server-rendered
      if (!lightDom.has(`art-${id.split('/')[0]}`)) expect(Object.keys(before).length, 'server-rendered shadow roots').toBeGreaterThan(0);
      const serverShot = await page.screenshot({ animations: 'disabled', caret: 'hide' });
      const name = `${id.replace('/', '--')}.png`;
      const snapshot = testInfo.snapshotPath(name);
      mkdirSync(dirname(snapshot), { recursive: true });
      writeFileSync(snapshot, serverShot);

      // 2. the client adopts the server-rendered shadow roots (errors are collected from here on: the
      // blocked script above logs a failed request)
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      await page.unroute('**/client.js');
      await page.goto(url);
      await page.locator('html[data-artui-client="ready"]').waitFor();
      await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      const after = await page.evaluate(shadowCounts);
      // the same shadow roots, and none grew: a component may drop nodes once client-only state settles
      // (an image that failed to load), but a duplicated render would add them
      expect(Object.keys(after), 'the same shadow roots after hydration').toEqual(Object.keys(before));
      for (const [key, count] of Object.entries(after)) expect(count, `${key}: no duplicated content after hydration`).toBeLessThanOrEqual(before[key]!);
      // Message Scroller follows the live edge: its first client render scrolls to the end, which no server can do
      if (!id.startsWith('message-scroller/')) expect(await page.screenshot({ animations: 'disabled', caret: 'hide' })).toMatchSnapshot(name, { maxDiffPixelRatio: 0.001 });
      expect(errors).toEqual([]);
    });
  }
});
