# Resizable

Accessible resizable panel groups and layouts with keyboard support. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-resizable-panel default-size="50">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">One</div>
    </art-resizable-panel>
    <art-resizable-handle></art-resizable-handle>
    <art-resizable-panel default-size="50">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Two</div>
    </art-resizable-panel>
  </art-resizable>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/resizable/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/resizable/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/resizable/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/resizable/basic.ts [Angular]
:::

Alternate `art-resizable-panel`s and `art-resizable-handle`s inside `art-resizable`; give panels a `default-size` (percent) and optional `min-size` / `max-size`. Listen to `layout-change` for the sizes.

## Examples

### Basic

Drag the divider or focus it and use the arrow keys (Shift for 10 % steps, Home / End for the limits). Sizes are percentages; `layout-change` reports them.

<Preview frame="stack">
  <art-resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-resizable-panel default-size="50">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">One</div>
    </art-resizable-panel>
    <art-resizable-handle></art-resizable-handle>
    <art-resizable-panel default-size="50">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Two</div>
    </art-resizable-panel>
  </art-resizable>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/resizable/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/resizable/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/resizable/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/resizable/basic.ts [Angular]
:::

### Vertical

<Preview frame="stack">
  <art-resizable direction="vertical" style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-resizable-panel default-size="25">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Header</div>
    </art-resizable-panel>
    <art-resizable-handle></art-resizable-handle>
    <art-resizable-panel default-size="75">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Content</div>
    </art-resizable-panel>
  </art-resizable>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/resizable/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/resizable/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/resizable/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/resizable/vertical.ts [Angular]
:::

### With handle

`with-handle` shows a grip; `min-size` / `max-size` on a panel bound the drag.

<Preview frame="stack">
  <art-resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-resizable-panel default-size="25" min-size="15">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Sidebar</div>
    </art-resizable-panel>
    <art-resizable-handle with-handle></art-resizable-handle>
    <art-resizable-panel default-size="75">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Content</div>
    </art-resizable-panel>
  </art-resizable>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/resizable/with-handle.html [HTML]
<<< ../../../sandbox/react/src/samples/resizable/with-handle.tsx [React]
<<< ../../../sandbox/vue/src/samples/resizable/with-handle.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/resizable/with-handle.ts [Angular]
:::

## API Reference

<ApiReference tag="art-resizable" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus a handle |
| `← / → (↑ / ↓ when vertical)` | Move the divider by 1 % |
| `Shift + arrow` | Move by 10 % |
| `Home / End` | Collapse to the minimum / maximum |

Each handle is `role="separator"` with `aria-orientation`, `aria-valuenow` (size of the panel before it), `aria-valuemin` and `aria-valuemax`; the group is `role="group"`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/).

States: `focus-visible` (ring on the handle) and dragging are implemented; other states do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-border-default`, `--art-border-width`` | divider |
| ``--art-space-1`` | hit area |
| ``--art-space-3`, `--art-space-4`, `--art-space-2-5`, `--art-radius-xs`, `--art-color-fg-muted`` | grip |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Give panels sensible minimums | Let a pane collapse to nothing by accident |
| Persist `layout-change` sizes per user | Reset the layout on every load |
