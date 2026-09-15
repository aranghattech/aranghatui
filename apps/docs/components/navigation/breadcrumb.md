# Breadcrumb

Displays the path to the current resource using a hierarchy of links. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-breadcrumb>
    <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>
    <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>
    <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>
  </art-breadcrumb>
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
<<< ../../../sandbox/html/src/samples/breadcrumb/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/breadcrumb/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/breadcrumb/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/breadcrumb/basic.ts [Angular]
:::

Put `art-breadcrumb-item`s inside; each holds an `<a>` (or your router link), the last one is `current`. `separator="slash"` for a slash; an `ellipsis` item collapses the middle. React `<Breadcrumb>` / `<BreadcrumbItem>`, Vue and Angular likewise.

## Examples

### Basic

Links go in the default slot of each item; the last item is `current` and is announced as the page. Separators are drawn by the items.

<Preview frame="inline">
  <art-breadcrumb>
    <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>
    <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>
    <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>
  </art-breadcrumb>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/breadcrumb/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/breadcrumb/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/breadcrumb/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/breadcrumb/basic.ts [Angular]
:::

### Custom separator

`separator="slash"` swaps the chevron for a slash.

<Preview frame="inline">
  <art-breadcrumb separator="slash">
    <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>
    <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>
    <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>
  </art-breadcrumb>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/breadcrumb/slash.html [HTML]
<<< ../../../sandbox/react/src/samples/breadcrumb/slash.tsx [React]
<<< ../../../sandbox/vue/src/samples/breadcrumb/slash.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/breadcrumb/slash.ts [Angular]
:::

### Collapsed

An `ellipsis` item stands for the collapsed middle of a long path; wrap it in a Dropdown Menu to list the hidden pages.

<Preview frame="inline">
  <art-breadcrumb>
    <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>
    <art-breadcrumb-item ellipsis></art-breadcrumb-item>
    <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>
    <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>
  </art-breadcrumb>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/breadcrumb/ellipsis.html [HTML]
<<< ../../../sandbox/react/src/samples/breadcrumb/ellipsis.tsx [React]
<<< ../../../sandbox/vue/src/samples/breadcrumb/ellipsis.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/breadcrumb/ellipsis.ts [Angular]
:::

## API Reference

<ApiReference tag="art-breadcrumb" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move through the links |
| `Enter` | Follow a link |

A `<nav aria-label="breadcrumb">` with an `<ol>`; each item is `role="listitem"`, the current page carries `aria-current="page"`, separators and the ellipsis are `aria-hidden` (the ellipsis has a visually hidden "More"). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

States: `hover` and `focus-visible` on links. `active`, `disabled`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-font-size-sm`, `--art-color-fg-muted`, `--art-color-fg-default`` | text, current page |
| ``--art-space-1-5`, `--art-space-2-5`` | gaps |
| ``--art-size-icon-sm`, `--art-size-icon-md`, `--art-space-9`` | separator and ellipsis |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`, `--art-radius-sm`` | link focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Keep the trail to the real hierarchy | Use it as a history of visited pages |
| Mark the last item `current` | Link the current page to itself |
| Collapse long paths with an ellipsis | Let a deep path wrap to three lines |
