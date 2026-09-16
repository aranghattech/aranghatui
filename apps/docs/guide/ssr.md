# Server-Side Rendering

artui components render on the server into [declarative shadow DOM](https://developer.chrome.com/docs/css-ui/declarative-shadow-dom): the HTML you send already contains each component's shadow root and styles, so the first paint is complete before any script runs, and the client runtime then *adopts* that markup instead of rendering it again (ADR-0023).

## 1. Opt in to the hydratable client

The default client build is the lean one. A page that hydrates server-rendered markup needs the build that knows how to adopt shadow roots; it is published in the same packages under the **`artui-ssr`** export condition — one line in the bundler that builds your app (both its server and its client bundle):

::: code-group
```ts [Vite / Nuxt]
// vite.config.ts (Nuxt: `vite.resolve.conditions` in nuxt.config.ts)
export default defineConfig({ resolve: { conditions: ['artui-ssr'] } });
```
```js [Next.js]
// next.config.js
module.exports = {
  webpack: (config) => { config.resolve.conditionNames = ['artui-ssr', ...config.resolve.conditionNames]; return config; },
};
```
```json [Angular]
// angular.json → projects.<app>.architect.build.options
{ "conditions": ["artui-ssr"] }
```
:::

Without the condition the markup still renders, but the browser shows two copies of every component once the script runs.

## 2. Render on the server

### Plain HTML / any Node server

`@aranghat/hydrate` is one Node module that knows every artui element, whichever tiers a page uses — including the base elements a widget renders inside its own shadow root:

```ts
import { renderToString } from '@aranghat/hydrate';

const { html, diagnostics } = await renderToString(
  `<art-login forgot-href="/forgot"></art-login>`,
  { fullDocument: false }, // default: a whole <html> document
);
```

`renderToString(html, options)` returns Stencil's `HydrateResults` (`html`, `diagnostics`, `components`, `styles`, `hydratedCount`). `hydrateDocument(doc)` does the same in place on a DOM-like `document`; `streamToString()` returns a readable stream. Options follow Stencil's [`renderToString`](https://stenciljs.com/docs/hydrate-app): `serializeShadowRoot`, `excludeComponents`, `staticComponents`, `prettyHtml`, `beforeHydrate` / `afterHydrate`. Install it next to the tiers you use; it has no runtime dependencies of its own.

### React — Next.js App Router

Server Components import the tier's **`/next`** entry; it renders through `@aranghat/hydrate` (an optional peer of every `-react` package — install it) and hands the client wrapper to React for hydration. Client Components (`'use client'`) keep importing the tier root.

```tsx
// app/page.tsx (a Server Component)
import { Button, Card } from '@aranghat/base-react/next';

export default function Page() {
  return <Card><Button variant="outline">Save</Button></Card>;
}
```

### Vue — Nuxt

Nothing changes in your code: without a `window` the generated components render through `@aranghat/hydrate` (an optional peer of every `-vue` package — install it), with a `window` they mount the custom element. Add the `artui-ssr` condition to `nuxt.config.ts` and import as usual:

```vue
<script setup lang="ts">
import { Button } from '@aranghat/base-vue';
</script>
<template><Button variant="outline">Save</Button></template>
```

### Angular — `@angular/ssr`

Angular's server renderer leaves custom elements as tags with their attributes; post-process its HTML with `renderToString` and let Angular's client hydration and the `artui-ssr` client take it from there. The Angular sandbox in this repository is prerendered exactly this way and hydrated in the SSR suite:

```json
// angular.json → projects.<app>.architect.build.options
{ "server": "src/main.server.ts", "outputMode": "static", "conditions": ["artui-ssr"] }
```

```ts
// app.config.ts — client hydration
export const appConfig: ApplicationConfig = { providers: [provideClientHydration()] };
```

```js
// after `ng build`: apps/sandbox/angular/scripts/ssr-postprocess.mjs
import { renderToString } from '@aranghat/hydrate';
const { html } = await renderToString(readFileSync('dist/browser/index.html', 'utf8'), { fullDocument: true, removeHtmlComments: false });
writeFileSync('dist/browser/index.html', html); // Angular's `ngh` markers and anchor comments are kept
```

For a request-time server (`outputMode: "server"`), call `renderToString` on the string your request handler gets back from `renderApplication()` / `AngularAppEngine`.

Two things to know:

- Only **attribute** bindings reach the server markup (`variant="outline"`, `[attr.size]="size"`). A property binding (`[icon]="mail"`, `[page]="3"`, an items array) is set on the element object, which the server never sees: the element renders its defaults on the server and the real thing once the client hydrates. Bind attributes for what must be in the first paint.
- Elements inside Angular templates hydrate without a `NG05xx` error — artui's server output carries none of Stencil's reference comments where Angular expects the app's own nodes (they are dropped for shadow hosts and moved last for the light-DOM ones), and no component member shadows a host DOM property (`pnpm lint:dom`).

## What to expect

- The server output carries Stencil's hydration annotations (`s-id`, `c-id`, `<!--r.n-->`); the client uses them to match nodes. Do not strip them.
- Overlays that are `open` at load (Popover, Tooltip, Dropdown Menu, …) render closed on the server and open on hydration — there is no layout to position against.
- Light-DOM components (`art-table`, `art-typography`, ADR-0021) render as plain markup, styled by the token sheet.
- The token sheet is still yours to include: `@aranghat/tokens/aranghat.css` in the document `<head>`.
- Every HTML sandbox sample is rendered in Node and hydrated in a browser by the SSR suite in CI (`pnpm test:ssr`): same pixels before and after, nothing duplicated.
