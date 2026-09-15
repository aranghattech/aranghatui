# Slider

An input where the user selects a value from within a given range. A styled native `<input type="range">`, form-associated.

## Preview

<Preview frame="stack">
  <art-slider value="33" aria-label="Volume"></art-slider>
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
<<< ../../../sandbox/html/src/samples/slider/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/slider/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/slider/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/slider/basic.ts [Angular]
:::

`input` fires continuously while dragging or stepping, `change` when the interaction ends; both bubble from the host with `detail.value` (a number). `v-model` and `ngModel` work out of the box. A two-thumb range is not part of this control.

## Examples

### Basic

<Preview frame="stack">
  <art-slider value="33" aria-label="Volume"></art-slider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/slider/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/slider/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/slider/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/slider/basic.ts [Angular]
:::

### Steps

<Preview frame="stack">
  <art-slider value="40" step="10" aria-label="Opacity"></art-slider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/slider/step.html [HTML]
<<< ../../../sandbox/react/src/samples/slider/step.tsx [React]
<<< ../../../sandbox/vue/src/samples/slider/step.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/slider/step.ts [Angular]
:::

### Sizes

<Preview frame="stack">
  <art-slider size="sm" value="30" aria-label="Small"></art-slider>
  <art-slider value="50" aria-label="Medium"></art-slider>
  <art-slider size="lg" value="70" aria-label="Large"></art-slider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/slider/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/slider/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/slider/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/slider/sizes.ts [Angular]
:::

### Vertical

<Preview frame="inline">
  <art-slider orientation="vertical" value="60" aria-label="Level"></art-slider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/slider/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/slider/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/slider/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/slider/vertical.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-slider value="50" disabled aria-label="Volume"></art-slider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/slider/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/slider/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/slider/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/slider/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-slider" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the slider |
| `Arrow keys, Page Up / Down, Home / End` | Native range-input behaviour (Left/Right swap in RTL) |

A native `<input type="range">`: value announcements, keyboard and touch behaviour come from the platform. `aria-label`, `aria-labelledby` and `aria-describedby` are resolved across the shadow boundary; vertical sliders set `aria-orientation`.

States: hover (thumb grows), active (dragging), focus-visible (ring on the thumb) and disabled are implemented; `invalid` and `loading` are not applicable.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-*`` | track thickness (1 / 1.5 / 2) and thumb size (3 / 4 / 5) |
| ``--art-color-bg-muted`, `--art-color-primary-solid`` | track and filled range |
| ``--art-color-bg-canvas`, `--art-color-primary-solid`, `--art-border-width`` | thumb |
| ``--art-radius-full`` | shape |
| ``--art-ring-*`` | focus ring on the thumb |
| ``--art-shadow-raised`` | thumb elevation |
| ``--art-duration-fast`, `--art-ease-out`` | thumb motion |

## Do / Don't

| Do | Don't |
|---|---|
| Show the current value next to the slider | Rely on the thumb position alone |
| Use a step that matches meaningful increments | Use a slider for precise numeric entry (use Input) |
