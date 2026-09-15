# Switch

A control that allows the user to toggle between checked and not checked. shadcn/ui parity, form-associated.

## Preview

<Preview frame="inline">
  <art-switch id="airplane-preview"></art-switch>
  <art-label for="airplane-preview">Airplane Mode</art-label>
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
<<< ../../../sandbox/html/src/samples/switch/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/switch/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/switch/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/switch/basic.ts [Angular]
:::

Same contract as Checkbox: `art-label for="…"` names and toggles it; `change` bubbles from the host with `detail.checked`.

## Examples

### Basic

<Preview frame="inline">
  <art-switch id="airplane"></art-switch>
  <art-label for="airplane">Airplane Mode</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/switch/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/switch/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/switch/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/switch/basic.ts [Angular]
:::

### Checked

<Preview frame="inline">
  <art-switch id="wifi" checked></art-switch>
  <art-label for="wifi">Wi-Fi</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/switch/checked.html [HTML]
<<< ../../../sandbox/react/src/samples/switch/checked.tsx [React]
<<< ../../../sandbox/vue/src/samples/switch/checked.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/switch/checked.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-switch size="sm" checked aria-label="Small"></art-switch>
  <art-switch checked aria-label="Medium"></art-switch>
  <art-switch size="lg" checked aria-label="Large"></art-switch>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/switch/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/switch/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/switch/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/switch/sizes.ts [Angular]
:::

### Disabled

<Preview frame="inline">
  <art-switch id="off" disabled></art-switch>
  <art-label for="off" disabled>Unavailable</art-label>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/switch/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/switch/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/switch/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/switch/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-switch" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the switch |
| `Space` | Toggle (native) |

A native `<input type="checkbox" role="switch">`; the name comes from `aria-label` or `art-label`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).

States: All six: hover, active, focus-visible, disabled, invalid. `loading` is not applicable.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-*`` | track and thumb geometry (h-4/5/6, w-7/9/11, thumb 3/4/5) |
| ``--art-radius-full`` | shape |
| ``--art-color-primary-solid`, `--art-color-border-default`` | on / off track |
| ``--art-color-bg-canvas`` | thumb |
| ``--art-ring-*`` | focus ring |
| ``--art-duration-fast`, `--art-ease-out`` | thumb motion |

## Do / Don't

| Do | Don't |
|---|---|
| Use for settings that take effect immediately | Use for choices that need a submit button (use Checkbox) |
| Label the state, not the action | Write "Turn on" as the label |
