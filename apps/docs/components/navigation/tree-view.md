# Tree View

A hierarchical list of expandable nodes with single selection and full keyboard navigation (WAI-ARIA tree pattern).

## Preview

<Preview frame="stack">
  <art-tree-view label="Files" value="button">
    <art-tree-item value="src" label="src" expanded>
      <art-tree-item value="components" label="components" expanded>
        <art-tree-item value="button" label="button.tsx"></art-tree-item>
        <art-tree-item value="input" label="input.tsx"></art-tree-item>
      </art-tree-item>
      <art-tree-item value="lib" label="lib">
        <art-tree-item value="utils" label="utils.ts"></art-tree-item>
      </art-tree-item>
      <art-tree-item value="index" label="index.ts"></art-tree-item>
    </art-tree-item>
    <art-tree-item value="package" label="package.json"></art-tree-item>
    <art-tree-item value="readme" label="README.md" disabled></art-tree-item>
  </art-tree-view>
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
<<< ../../../sandbox/html/src/samples/tree-view/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/tree-view/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/tree-view/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tree-view/basic.ts [Angular]
:::

Put nested `art-tree-item`s inside; each has a `value` and a `label`, `expanded` shows its children. The tree's `value` follows the selection. React `<TreeView value onValueChange>`, Vue `v-model`, Angular `[value] (valueChange)`.

## Examples

### Basic

Nest `art-tree-item`s (`value`, `label`, `expanded`, `disabled`). The tree's `value` is the selected item; clicking a parent toggles it and selects it, the chevron only toggles. Listen to `value-change` on the tree, `expand` / `collapse` / `select` on items.

<Preview frame="stack">
  <art-tree-view label="Files" value="button">
    <art-tree-item value="src" label="src" expanded>
      <art-tree-item value="components" label="components" expanded>
        <art-tree-item value="button" label="button.tsx"></art-tree-item>
        <art-tree-item value="input" label="input.tsx"></art-tree-item>
      </art-tree-item>
      <art-tree-item value="lib" label="lib">
        <art-tree-item value="utils" label="utils.ts"></art-tree-item>
      </art-tree-item>
      <art-tree-item value="index" label="index.ts"></art-tree-item>
    </art-tree-item>
    <art-tree-item value="package" label="package.json"></art-tree-item>
    <art-tree-item value="readme" label="README.md" disabled></art-tree-item>
  </art-tree-view>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tree-view/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/tree-view/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/tree-view/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tree-view/basic.ts [Angular]
:::

### Icons

An `icon` slot goes before the label.

<Preview frame="stack">
  <art-tree-view label="Files" value="button">
    <art-tree-item value="src" label="src" expanded><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
      <art-tree-item value="components" label="components" expanded><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
        <art-tree-item value="button" label="button.tsx"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></art-tree-item>
        <art-tree-item value="input" label="input.tsx"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></art-tree-item>
      </art-tree-item>
      <art-tree-item value="lib" label="lib"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
        <art-tree-item value="utils" label="utils.ts"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></art-tree-item>
      </art-tree-item>
      <art-tree-item value="index" label="index.ts"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></art-tree-item>
    </art-tree-item>
    <art-tree-item value="package" label="package.json"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></art-tree-item>
    <art-tree-item value="readme" label="README.md" disabled><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></art-tree-item>
  </art-tree-view>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tree-view/icons.html [HTML]
<<< ../../../sandbox/react/src/samples/tree-view/icons.tsx [React]
<<< ../../../sandbox/vue/src/samples/tree-view/icons.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tree-view/icons.ts [Angular]
:::

## API Reference

<ApiReference tag="art-tree-view" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Into the tree (the selected or first item), then out |
| `↓ / ↑` | Next / previous visible item |
| `→` | Expand, or move to the first child |
| `←` | Collapse, or move to the parent |
| `Home / End` | First / last visible item |
| `Enter / Space` | Select (and toggle a parent) |
| `*` | Expand all siblings |
| `Type` | Jump to the next item starting with the letters |

A `role="tree"` named by `label`; each item host is `role="treeitem"` with `aria-level`, `aria-selected`, `aria-expanded` on parents and `aria-disabled`; children sit in a `role="group"`. One roving tab stop. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/).

States: `hover` and `focus-visible` on rows, selected and expanded items, `disabled` items. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-7`, `--art-space-1`, `--art-space-4`, `--art-space-5`, `--art-space-2`` | row height, indent per level, chevron |
| ``--art-color-bg-accent`` | hover and selected rows |
| ``--art-color-fg-default`, `--art-color-fg-muted`` | labels, chevrons, icons, disabled |
| ``--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`` | rows |
| ``--art-ring-width`, `--art-color-ring`` | focus ring |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`` | chevron and hover motion |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for real hierarchies (files, pages, org charts) | Nest a flat list one level deep for looks |
| Start with the relevant branch expanded | Expand everything on load |
| Give every node a short label | Put long sentences in nodes |
