# Checkbox

A control that allows the user to toggle between checked and not checked. shadcn/ui parity, form-associated.

## Preview

<Preview frame="inline">
  <art-checkbox id="terms"></art-checkbox>
  <art-label for="terms">Accept terms and conditions</art-label>
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
<<< ../../../sandbox/html/src/samples/checkbox/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/basic.ts [Angular]
:::

Pair it with `art-label for="…"`: the label names the control and toggles it on click. `change` bubbles from the host with `detail.checked` (`event.target.checked` too).

## Examples

### Basic

<Preview frame="inline">
  <art-checkbox id="terms"></art-checkbox>
  <art-label for="terms">Accept terms and conditions</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/basic.ts [Angular]
:::

### Checked

<Preview frame="inline">
  <art-checkbox id="terms-2" checked></art-checkbox>
  <art-label for="terms-2">Accept terms and conditions</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/checked.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/checked.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/checked.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/checked.ts [Angular]
:::

### Indeterminate

`indeterminate` shows the mixed state (`aria-checked="mixed"`); the next toggle checks it.

<Preview frame="inline">
  <art-checkbox id="all" indeterminate></art-checkbox>
  <art-label for="all">Select all</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/indeterminate.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/indeterminate.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/indeterminate.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/indeterminate.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-checkbox size="sm" checked aria-label="Small"></art-checkbox>
  <art-checkbox checked aria-label="Medium"></art-checkbox>
  <art-checkbox size="lg" checked aria-label="Large"></art-checkbox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/sizes.ts [Angular]
:::

### With text

<Preview frame="control-text">
  <art-checkbox id="terms-3" aria-describedby="terms-3-help"></art-checkbox>
  <art-label for="terms-3">Accept terms and conditions</art-label>
  <p id="terms-3-help">You agree to our Terms of Service and Privacy Policy.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/with-text.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/with-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/with-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/with-text.ts [Angular]
:::

### Disabled

<Preview frame="inline">
  <art-checkbox id="d1" disabled></art-checkbox>
  <art-label for="d1" disabled>Unavailable</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/disabled.ts [Angular]
:::

### Invalid

<Preview frame="inline">
  <art-checkbox id="i1" invalid required></art-checkbox>
  <art-label for="i1">Required</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/checkbox/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/checkbox/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/checkbox/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/checkbox/invalid.ts [Angular]
:::

## API Reference

<ApiReference tag="art-checkbox" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the checkbox |
| `Space` | Toggle (Enter does nothing, per APG) |

`role="checkbox"` with `aria-checked` (`mixed` when indeterminate), `aria-required`, `aria-invalid`; name from `aria-label` / `art-label`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).

States: All six: hover (border), active (press), focus-visible (ring), disabled, invalid (destructive ring). `loading` is not applicable.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-size-icon-{sm,md,lg}`` | box size |
| ``--art-radius-xs`` | shape |
| ``--art-color-border-default`, `--art-border-width`` | frame |
| ``--art-color-primary-solid`, `--art-color-fg-on-primary`` | checked fill and mark |
| ``--art-color-destructive-solid`` | invalid ring |
| ``--art-ring-*`` | focus ring |
| ``--art-shadow-raised`` | elevation |

## Do / Don't

| Do | Don't |
|---|---|
| Use for independent yes/no options | Use for mutually exclusive choices (use Radio Group) |
| Put the label to the right | Rely on colour alone for the checked state |
