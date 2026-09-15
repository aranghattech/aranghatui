# Navigation Menu

A collection of links for navigating websites. shadcn/ui parity; panels open below the bar on the top layer.

## Preview

<Preview frame="inline">
  <art-navigation-menu>
    <art-navigation-menu-item label="Getting started">
      <ul style="display: grid; gap: var(--art-space-1); width: var(--art-container-xs); margin: 0; padding: 0; list-style: none">
        <li><art-navigation-menu-link href="#">Introduction<span slot="description">Re-usable components built with Stencil and Tailwind.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Installation<span slot="description">How to install dependencies and structure your app.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Typography<span slot="description">Styles for headings, paragraphs, lists…</span></art-navigation-menu-link></li>
      </ul>
    </art-navigation-menu-item>
    <art-navigation-menu-item label="Components">
      <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--art-space-1); width: var(--art-container-lg); margin: 0; padding: 0; list-style: none">
        <li><art-navigation-menu-link href="#">Alert Dialog<span slot="description">A modal dialog that interrupts the user with important content.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Hover Card<span slot="description">For sighted users to preview content available behind a link.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Progress<span slot="description">Displays an indicator showing the completion progress of a task.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Scroll Area<span slot="description">Visually or semantically separates content.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Tabs<span slot="description">A set of layered sections of content displayed one at a time.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Tooltip<span slot="description">A popup that displays information related to an element.</span></art-navigation-menu-link></li>
      </ul>
    </art-navigation-menu-item>
    <art-navigation-menu-item label="Docs" href="#docs"></art-navigation-menu-item>
  </art-navigation-menu>
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
<<< ../../../sandbox/html/src/samples/navigation-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/navigation-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/navigation-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/navigation-menu/basic.ts [Angular]
:::

Put `art-navigation-menu-item`s inside: `label` + content for a panel, `href` (and `active`) for a link. Use `art-navigation-menu-link` for rich links inside panels. Listen to `open-change` on items. React `<NavigationMenu>`, Vue and Angular likewise.

## Examples

### Basic

Items with a `label` are triggers whose default slot is the panel; items with `href` are plain links. Hover, click, Enter / Space or ↓ opens a panel; ← / → move along the bar.

<Preview frame="inline">
  <art-navigation-menu>
    <art-navigation-menu-item label="Getting started">
      <ul style="display: grid; gap: var(--art-space-1); width: var(--art-container-xs); margin: 0; padding: 0; list-style: none">
        <li><art-navigation-menu-link href="#">Introduction<span slot="description">Re-usable components built with Stencil and Tailwind.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Installation<span slot="description">How to install dependencies and structure your app.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Typography<span slot="description">Styles for headings, paragraphs, lists…</span></art-navigation-menu-link></li>
      </ul>
    </art-navigation-menu-item>
    <art-navigation-menu-item label="Components">
      <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--art-space-1); width: var(--art-container-lg); margin: 0; padding: 0; list-style: none">
        <li><art-navigation-menu-link href="#">Alert Dialog<span slot="description">A modal dialog that interrupts the user with important content.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Hover Card<span slot="description">For sighted users to preview content available behind a link.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Progress<span slot="description">Displays an indicator showing the completion progress of a task.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Scroll Area<span slot="description">Visually or semantically separates content.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Tabs<span slot="description">A set of layered sections of content displayed one at a time.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Tooltip<span slot="description">A popup that displays information related to an element.</span></art-navigation-menu-link></li>
      </ul>
    </art-navigation-menu-item>
    <art-navigation-menu-item label="Docs" href="#docs"></art-navigation-menu-item>
  </art-navigation-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/navigation-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/navigation-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/navigation-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/navigation-menu/basic.ts [Angular]
:::

### Open

Controlled with `open` on an item; opening one closes the others. `art-navigation-menu-link` gives panel links a title and description.

<Preview frame="inline">
  <art-navigation-menu>
    <art-navigation-menu-item label="Getting started">
      <ul style="display: grid; gap: var(--art-space-1); width: var(--art-container-xs); margin: 0; padding: 0; list-style: none">
        <li><art-navigation-menu-link href="#">Introduction<span slot="description">Re-usable components built with Stencil and Tailwind.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Installation<span slot="description">How to install dependencies and structure your app.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Typography<span slot="description">Styles for headings, paragraphs, lists…</span></art-navigation-menu-link></li>
      </ul>
    </art-navigation-menu-item>
    <art-navigation-menu-item label="Components" open>
      <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--art-space-1); width: var(--art-container-lg); margin: 0; padding: 0; list-style: none">
        <li><art-navigation-menu-link href="#">Alert Dialog<span slot="description">A modal dialog that interrupts the user with important content.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Hover Card<span slot="description">For sighted users to preview content available behind a link.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Progress<span slot="description">Displays an indicator showing the completion progress of a task.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Scroll Area<span slot="description">Visually or semantically separates content.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Tabs<span slot="description">A set of layered sections of content displayed one at a time.</span></art-navigation-menu-link></li>
        <li><art-navigation-menu-link href="#">Tooltip<span slot="description">A popup that displays information related to an element.</span></art-navigation-menu-link></li>
      </ul>
    </art-navigation-menu-item>
    <art-navigation-menu-item label="Docs" href="#docs"></art-navigation-menu-item>
  </art-navigation-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/navigation-menu/open.html [HTML]
<<< ../../../sandbox/react/src/samples/navigation-menu/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/navigation-menu/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/navigation-menu/open.ts [Angular]
:::

### Active link

`active` marks the current page (`aria-current="page"`) with a tint.

<Preview frame="inline">
  <art-navigation-menu>
    <art-navigation-menu-item label="Home" href="#" active></art-navigation-menu-item>
    <art-navigation-menu-item label="Pricing" href="#pricing"></art-navigation-menu-item>
    <art-navigation-menu-item label="Blog" href="#blog"></art-navigation-menu-item>
  </art-navigation-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/navigation-menu/active.html [HTML]
<<< ../../../sandbox/react/src/samples/navigation-menu/active.tsx [React]
<<< ../../../sandbox/vue/src/samples/navigation-menu/active.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/navigation-menu/active.ts [Angular]
:::

## API Reference

<ApiReference tag="art-navigation-menu" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move along the bar, then into an open panel |
| `← / →` | Move between bar entries |
| `↓ / Enter / Space` | Open the panel (focus its first link) |
| `Escape` | Close and return to the trigger |
| `Enter on a link` | Follow it |

A `<nav>` named by `label` with a list of `listitem`s; triggers are buttons with `aria-expanded` and `aria-controls`; links carry `aria-current="page"` when `active`. Panels are plain content (no menu roles — they hold links, not commands). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

States: `hover` and `focus-visible` on triggers and links, open / closed panels with enter and exit motion, `active` links. `disabled`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-9`, `--art-space-4`, `--art-space-2`, `--art-space-1`, `--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`` | bar entries |
| ``--art-color-bg-canvas`, `--art-color-bg-accent`` | entry background, hover, open and active tints |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-container-xl`` | panels |
| ``--art-color-fg-muted`, `--art-radius-sm`, `--art-font-line-height-sm`` | link descriptions |
| ``--art-duration-base`, `--art-duration-hover-open`, `--art-duration-hover-close`` | chevron and hover delays |

## Do / Don't

| Do | Don't |
|---|---|
| Use panels for a few grouped destinations | Put a whole sitemap in one panel |
| Give every link a description only when it helps | Repeat the title as the description |
| Mark the current section `active` | Leave users guessing where they are |
