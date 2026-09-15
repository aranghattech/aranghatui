# Radio Group

A set of checkable buttons, known as radio buttons, where no more than one can be checked at a time. shadcn/ui parity, form-associated.

## Preview

<Preview frame="inline">
  <art-radio-group value="comfortable" aria-label="Density">
    <art-radio value="default">Default</art-radio>
    <art-radio value="comfortable">Comfortable</art-radio>
    <art-radio value="compact">Compact</art-radio>
  </art-radio-group>
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
<<< ../../../sandbox/html/src/samples/radio-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/radio-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/radio-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/radio-group/basic.ts [Angular]
:::

Items are `<art-radio value="…">Label</art-radio>` with the label as the default slot, so no wrapper markup. The group owns `value`, emits `change` with `detail.value`, and supports `v-model` / `ngModel`.

## Examples

### Basic

<Preview frame="inline">
  <art-radio-group value="comfortable" aria-label="Density">
    <art-radio value="default">Default</art-radio>
    <art-radio value="comfortable">Comfortable</art-radio>
    <art-radio value="compact">Compact</art-radio>
  </art-radio-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/radio-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/radio-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/radio-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/radio-group/basic.ts [Angular]
:::

### Horizontal

<Preview frame="inline">
  <art-radio-group orientation="horizontal" value="default" aria-label="Density">
    <art-radio value="default">Default</art-radio>
    <art-radio value="comfortable">Comfortable</art-radio>
    <art-radio value="compact">Compact</art-radio>
  </art-radio-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/radio-group/horizontal.html [HTML]
<<< ../../../sandbox/react/src/samples/radio-group/horizontal.tsx [React]
<<< ../../../sandbox/vue/src/samples/radio-group/horizontal.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/radio-group/horizontal.ts [Angular]
:::

### Disabled item

<Preview frame="inline">
  <art-radio-group value="default" aria-label="Density">
    <art-radio value="default">Default</art-radio>
    <art-radio value="comfortable">Comfortable</art-radio>
    <art-radio value="compact" disabled>Compact</art-radio>
  </art-radio-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/radio-group/disabled-item.html [HTML]
<<< ../../../sandbox/react/src/samples/radio-group/disabled-item.tsx [React]
<<< ../../../sandbox/vue/src/samples/radio-group/disabled-item.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/radio-group/disabled-item.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-radio-group orientation="horizontal" size="sm" value="a" aria-label="Small">
    <art-radio value="a">Small</art-radio>
  </art-radio-group>
  <art-radio-group orientation="horizontal" value="b" aria-label="Medium">
    <art-radio value="b">Medium</art-radio>
  </art-radio-group>
  <art-radio-group orientation="horizontal" size="lg" value="c" aria-label="Large">
    <art-radio value="c">Large</art-radio>
  </art-radio-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/radio-group/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/radio-group/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/radio-group/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/radio-group/sizes.ts [Angular]
:::

### In a form

<Preview frame="inline">
  <form onsubmit="event.preventDefault()">
    <art-radio-group name="notify" required aria-label="Notify me about">
      <art-radio value="all">All new messages</art-radio>
      <art-radio value="mentions">Direct messages and mentions</art-radio>
      <art-radio value="none">Nothing</art-radio>
    </art-radio-group>
    <art-button type="submit">Submit</art-button>
  </form>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/radio-group/form.html [HTML]
<<< ../../../sandbox/react/src/samples/radio-group/form.tsx [React]
<<< ../../../sandbox/vue/src/samples/radio-group/form.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/radio-group/form.ts [Angular]
:::

## API Reference

<ApiReference tag="art-radio-group" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the checked item (or the first enabled one) |
| `Arrow Down / Right` | Move to and select the next item |
| `Arrow Up / Left` | Move to and select the previous item (Left/Right swap in RTL) |
| `Home / End` | First / last item |
| `Space` | Select the focused item |

`role="radiogroup"` on the host (`aria-label` / `aria-labelledby` go there), `role="radio"` + `aria-checked` on each item; each item is named by its slotted label. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

States: All six on items: hover, active, focus-visible, disabled (per item or whole group), invalid (`aria-invalid` on the group). `loading` is not applicable.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-size-icon-{sm,md,lg}`` | item size |
| ``--art-space-3`, `--art-space-4`` | item gap (vertical / horizontal) |
| ``--art-color-border-default`, `--art-color-primary-solid`` | ring and indicator |
| ``--art-ring-*`` | focus ring |
| ``--art-shadow-raised`` | elevation |

## Do / Don't

| Do | Don't |
|---|---|
| Use for 2–5 mutually exclusive options | Use for a single yes/no (use Checkbox or Switch) |
| Pre-select a sensible default | Leave a required group with no selection and no hint |
