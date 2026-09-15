# TopNav

An app header bar with a brand, a row of links and actions; the links fold behind a menu button on narrow screens.

## Preview

<Preview frame="block">
  <art-top-nav>
    <a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Customers</a>
    <a href="#">Products</a>
    <a href="#">Settings</a>
    <art-button slot="end" variant="ghost" size="sm">Sign in</art-button>
    <art-button slot="end" size="sm">Get started</art-button>
  </art-top-nav>
</Preview>

## Installation

Lives in `@aranghat/navigation` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base @aranghat/navigation-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base @aranghat/navigation-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base @aranghat/navigation-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/top-nav/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/top-nav/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/top-nav/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/top-nav/basic.ts [Angular]
:::

Put the logo / product name in `brand`, `<a>` (or router) links in the default slot, buttons in `end`. `sticky` pins it; `collapse` controls when the links fold (`auto` below md, `always`, `never`); `open` / `open-change` drive the folded panel. Pair with `art-sidebar` by placing an `art-sidebar-trigger` in `brand`. React `<TopNav open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.

## Examples

### Basic

A `brand` at the start, plain `<a>` links in the default slot (`aria-current="page"` marks the current one), actions in `end`. Below the md breakpoint the links fold behind a menu button.

<Preview frame="block">
  <art-top-nav>
    <a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Customers</a>
    <a href="#">Products</a>
    <a href="#">Settings</a>
    <art-button slot="end" variant="ghost" size="sm">Sign in</art-button>
    <art-button slot="end" size="sm">Get started</art-button>
  </art-top-nav>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/top-nav/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/top-nav/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/top-nav/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/top-nav/basic.ts [Angular]
:::

### Collapsed

`collapse="always"` keeps the menu button at every width (`never` keeps the row); `open` shows the panel under the bar. Escape or a click outside closes it.

<Preview frame="block">
  <art-top-nav collapse="always" open>
    <a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Customers</a>
    <a href="#">Products</a>
    <a href="#">Settings</a>
    <art-button slot="end" variant="ghost" size="sm">Sign in</art-button>
    <art-button slot="end" size="sm">Get started</art-button>
  </art-top-nav>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/top-nav/collapsed.html [HTML]
<<< ../../../sandbox/react/src/samples/top-nav/collapsed.tsx [React]
<<< ../../../sandbox/vue/src/samples/top-nav/collapsed.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/top-nav/collapsed.ts [Angular]
:::

### Sticky

`sticky` pins the bar to the top of its scroll container (`--art-z-sticky`).

<Preview frame="block">
  <art-top-nav sticky>
    <a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Customers</a>
    <a href="#">Products</a>
    <a href="#">Settings</a>
    <art-button slot="end" variant="ghost" size="sm">Sign in</art-button>
    <art-button slot="end" size="sm">Get started</art-button>
  </art-top-nav>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/top-nav/sticky.html [HTML]
<<< ../../../sandbox/react/src/samples/top-nav/sticky.tsx [React]
<<< ../../../sandbox/vue/src/samples/top-nav/sticky.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/top-nav/sticky.ts [Angular]
:::

## API Reference

<ApiReference tag="art-top-nav" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move through the brand, links and actions |
| `Enter` | Follow a link; open / close the folded menu |
| `Escape` | Close the folded menu and return to the button |

A `<header>` with a `<nav>` named by `label` holding the links; the current link carries `aria-current="page"`. The menu button has `aria-expanded` and `aria-controls` pointing at the panel. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

States: `hover` and `focus-visible` on links and the menu button, current link, open / closed panel with enter motion. `active`, `disabled`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-14`, `--art-space-4`, `--art-space-9`, `--art-space-10`, `--art-space-3`, `--art-space-1`` | bar height, padding, link size |
| ``--art-color-bg-canvas`, `--art-color-border-default`, `--art-shadow-overlay`` | bar and panel |
| ``--art-color-fg-muted`, `--art-color-fg-default`, `--art-color-bg-accent`` | links, current / hover |
| ``--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`` | links |
| ``--art-z-sticky`, `--art-z-dropdown`` | sticky bar, panel |
| ``--art-ring-width`, `--art-color-ring`` | focus ring |
| ``--art-duration-fast`, `--art-duration-base`, `--art-ease-out`` | hover and panel motion |

## Do / Don't

| Do | Don't |
|---|---|
| Keep five or fewer top-level links | Fold a whole sitemap into the bar |
| Mark the current section with `aria-current` | Style the current link by hand |
| Put primary actions in `end` | Mix links and buttons in the link row |
