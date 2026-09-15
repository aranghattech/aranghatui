# Spinner

An indicator that can be used to show a loading state. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-spinner></art-spinner>
</Preview>

## Installation

Lives in `@aranghat/base`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/spinner/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/spinner/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/spinner/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/spinner/basic.ts [Angular]
:::

Drop it where content is loading. `label` sets the announced name; `size` follows the icon scale.

## Examples

### Basic

<Preview frame="inline">
  <art-spinner></art-spinner>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/spinner/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/spinner/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/spinner/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/spinner/basic.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-spinner size="sm"></art-spinner>
  <art-spinner></art-spinner>
  <art-spinner size="lg"></art-spinner>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/spinner/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/spinner/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/spinner/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/spinner/sizes.ts [Angular]
:::

### In a button

Prefer `art-button loading` for a submit in flight; slot a spinner when you need to keep the button interactive.

<Preview frame="inline">
  <art-button disabled>
    <art-spinner slot="start"></art-spinner>
    Please wait
  </art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/spinner/in-button.html [HTML]
<<< ../../../sandbox/react/src/samples/spinner/in-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/spinner/in-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/spinner/in-button.ts [Angular]
:::

### Colour

The spinner uses `currentColor` — set `color` on the host.

<Preview frame="inline">
  <art-spinner style="color: var(--art-color-fg-muted)"></art-spinner>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/spinner/colour.html [HTML]
<<< ../../../sandbox/react/src/samples/spinner/colour.tsx [React]
<<< ../../../sandbox/vue/src/samples/spinner/colour.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/spinner/colour.ts [Angular]
:::

## API Reference

<ApiReference tag="art-spinner" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable |

`role="status"` with `aria-label` on the host; the `<svg>` is decorative. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — the spinner is itself the loading state.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-size-icon-{sm,md,lg}`` | sizes |
| ``--art-duration-spin`` | revolution |

## Do / Don't

| Do | Don't |
|---|---|
| Give it a meaningful `label` (“Saving…”) | Show several spinners at once |
| Use `art-button loading` for submits | Overlay a page-sized spinner for small updates |
