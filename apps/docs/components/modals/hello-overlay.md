# Hello Overlay

Phase 0 proof overlay from `@aranghat/modals` that renders `<art-hello>` from `@aranghat/base` inside its shadow root — cross-tier composition without bundling the lower tier. Removed when Dialog lands.

## Preview

<Preview>
  <art-hello-overlay name="artui"></art-hello-overlay>
  <button type="button" onclick="this.previousElementSibling.open = true">Open overlay</button>
</Preview>

## Installation

Lives in `@aranghat/modals` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base @aranghat/modals
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/modals @aranghat/modals-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/modals @aranghat/modals-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/modals @aranghat/modals-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/hello-overlay/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/hello-overlay/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/hello-overlay/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hello-overlay/basic.ts [Angular]
:::

## Examples

### Basic

<Preview><art-hello-overlay name="artui"></art-hello-overlay><button type="button" onclick="this.previousElementSibling.open = true">Open overlay</button></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hello-overlay/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/hello-overlay/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/hello-overlay/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hello-overlay/basic.ts [Angular]
:::

## API Reference

<ApiReference tag="art-hello-overlay" />

## Accessibility

| Key | Action |
|---|---|
| `Escape` | Closes the overlay (emits `open-change`) |

Roles: `role="dialog"` with `aria-modal="true"`. Focus moves to the close button on open. Pattern: [APG Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) — full focus trapping arrives with the `focus-trap` primitive in Phase 2.

## Tokens used

| Token | Used for |
|---|---|
| `--art-color-bg-overlay` | scrim |
| `--art-color-bg-popover`, `--art-color-border-default` | panel |
| `--art-shadow-popover`, `--art-radius-lg` | panel elevation and shape |
| `--art-z-modal` | layer |

## Do / Don't

| Do | Don't |
|---|---|
| Use it to verify a cross-tier install | Use it as a real dialog — wait for `art-dialog` |
