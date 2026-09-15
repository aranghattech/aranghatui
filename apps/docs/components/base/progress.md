# Progress

Displays an indicator showing the completion progress of a task. shadcn/ui parity, a native `<progress>`.

## Preview

<Preview frame="stack">
  <art-progress value="33" aria-label="Upload"></art-progress>
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
<<< ../../../sandbox/html/src/samples/progress/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/progress/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/progress/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/progress/basic.ts [Angular]
:::

Set `value` (0–`max`); the fill animates between values. Omit `value` for the platform's indeterminate bar. Always name it with `aria-label` or `aria-labelledby`.

## Examples

### Basic

<Preview frame="stack">
  <art-progress value="33" aria-label="Upload"></art-progress>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/progress/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/progress/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/progress/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/progress/basic.ts [Angular]
:::

### Values

<Preview frame="stack">
  <art-progress value="0" aria-label="Empty"></art-progress>
  <art-progress value="50" aria-label="Half"></art-progress>
  <art-progress value="100" aria-label="Complete"></art-progress>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/progress/values.html [HTML]
<<< ../../../sandbox/react/src/samples/progress/values.tsx [React]
<<< ../../../sandbox/vue/src/samples/progress/values.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/progress/values.ts [Angular]
:::

### Custom max

`max` sets the scale; here 3 of 8 steps.

<Preview frame="stack">
  <art-progress value="3" max="8" aria-label="Steps"></art-progress>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/progress/custom-max.html [HTML]
<<< ../../../sandbox/react/src/samples/progress/custom-max.tsx [React]
<<< ../../../sandbox/vue/src/samples/progress/custom-max.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/progress/custom-max.ts [Angular]
:::

### With label

Name the bar with `aria-labelledby` (resolved across the shadow boundary) or `aria-label`.

<Preview frame="stack">
  <art-label id="upload-label">Uploading photo…</art-label>
  <art-progress value="66" aria-labelledby="upload-label"></art-progress>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/progress/with-label.html [HTML]
<<< ../../../sandbox/react/src/samples/progress/with-label.tsx [React]
<<< ../../../sandbox/vue/src/samples/progress/with-label.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/progress/with-label.ts [Angular]
:::

## API Reference

<ApiReference tag="art-progress" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable |

Native `<progress>` — `progressbar` role, `aria-valuenow`/`aria-valuemax` from the platform. The name is `aria-label` or the resolved `aria-labelledby` text. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/meter/).

States: Not interactive — no hover, focus, active, disabled, loading or invalid state.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-muted`` | track |
| ``--art-color-primary-solid`` | fill |
| ``--art-radius-full`, `--art-space-2`` | shape and height |
| ``--art-duration-base`, `--art-ease-out`` | fill motion |

## Do / Don't

| Do | Don't |
|---|---|
| Pair it with a visible label or status text | Show a bar with no name |
| Update `value` as work completes | Fake progress with a timer |
