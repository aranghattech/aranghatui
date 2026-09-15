# Pagination

Pagination with page navigation, next and previous links. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-pagination page="2" total="3"></art-pagination>
</Preview>

## Installation

Lives in `@aranghat/navigation`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/navigation
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/navigation-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/navigation-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/navigation-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/pagination/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/pagination/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/pagination/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/pagination/basic.ts [Angular]
:::

Bind `page` and `total`; listen to `page-change` (`detail.page`). React `onPageChange`, Vue `v-model:page`, Angular `[page]` / `(pageChange)`. For server-rendered pages use `href-template`.

## Examples

### Basic

`page` (1-based) and `total`; `page-change` reports the pick. Previous / next disable at the ends.

<Preview frame="inline">
  <art-pagination page="2" total="3"></art-pagination>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/pagination/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/pagination/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/pagination/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/pagination/basic.ts [Angular]
:::

### Many pages

`siblings` pages on each side of the current one and `boundaries` at the ends; the rest collapses into ellipses.

<Preview frame="inline">
  <art-pagination page="12" total="40"></art-pagination>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/pagination/many-pages.html [HTML]
<<< ../../../sandbox/react/src/samples/pagination/many-pages.tsx [React]
<<< ../../../sandbox/vue/src/samples/pagination/many-pages.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/pagination/many-pages.ts [Angular]
:::

### Links

`href-template` renders real links (`{page}` is replaced) so pages are crawlable and open in new tabs; your router or server reads the page.

<Preview frame="inline">
  <art-pagination page="3" total="10" href-template="?page={page}"></art-pagination>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/pagination/links.html [HTML]
<<< ../../../sandbox/react/src/samples/pagination/links.tsx [React]
<<< ../../../sandbox/vue/src/samples/pagination/links.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/pagination/links.ts [Angular]
:::

### At the end

The next control is disabled on the last page (and previous on the first).

<Preview frame="inline">
  <art-pagination page="10" total="10"></art-pagination>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/pagination/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/pagination/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/pagination/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/pagination/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-pagination" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move through previous, the pages and next |
| `Enter / Space` | Go to that page |

A `<nav aria-label="pagination">` with a list of buttons (or links); the current page has `aria-current="page"`; controls are named "Go to page N", "Go to previous page", "Go to next page"; ellipses are hidden with a visually hidden "More pages". Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `hover`, `focus-visible` and `disabled` (previous / next at the ends) on the controls. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-md`, `--art-space-1`, `--art-space-2-5`` | controls and gaps |
| ``--art-color-bg-accent`, `--art-color-bg-canvas`, `--art-color-border-default`, `--art-shadow-raised`, `--art-radius-md`` | ghost and active (outline) controls |
| ``--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-default`` | text |
| ``--art-size-icon-md`` | arrows and ellipsis |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Keep the current page visible and marked | Reset to page 1 on every re-render |
| Use links for public listings | Use buttons where the URL should change |
| Show total pages honestly | Fake a total for infinite lists (use a load-more button) |
