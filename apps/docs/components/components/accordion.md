# Accordion

A vertically stacked set of interactive headings that each reveal a section of content. shadcn/ui parity, on native `<details>`.

## Preview

<Preview frame="stack">
  <art-accordion value="item-1">
    <art-accordion-item value="item-1" open>
      <span slot="trigger">Product Information</span>
      <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
    </art-accordion-item>
    <art-accordion-item value="item-2">
      <span slot="trigger">Shipping Details</span>
      <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days.</p>
    </art-accordion-item>
    <art-accordion-item value="item-3">
      <span slot="trigger">Return Policy</span>
      <p>We stand behind our products with a comprehensive 30-day return policy.</p>
    </art-accordion-item>
  </art-accordion>
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
<<< ../../../sandbox/html/src/samples/accordion/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/accordion/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/accordion/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/accordion/basic.ts [Angular]
:::

Put `art-accordion-item`s with a `value` inside; slot each title as `trigger` and the content in the default slot. Bind `value` (string, or a list for `type="multiple"`) and listen to `value-change`. React `onValueChange`, Vue `v-model:value`, Angular `[value]` / `(valueChange)`.

## Examples

### Basic

Each item is a native `<details>`; with `type="single"` (default) the accordion keeps only one open. `value` reflects the open item and `value-change` reports user toggles.

<Preview frame="stack">
  <art-accordion value="item-1">
    <art-accordion-item value="item-1" open>
      <span slot="trigger">Product Information</span>
      <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
    </art-accordion-item>
    <art-accordion-item value="item-2">
      <span slot="trigger">Shipping Details</span>
      <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days.</p>
    </art-accordion-item>
    <art-accordion-item value="item-3">
      <span slot="trigger">Return Policy</span>
      <p>We stand behind our products with a comprehensive 30-day return policy.</p>
    </art-accordion-item>
  </art-accordion>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/accordion/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/accordion/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/accordion/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/accordion/basic.ts [Angular]
:::

### Multiple

`type="multiple"` lets any number of items stay open; `value` becomes a list.

<Preview frame="stack">
  <art-accordion type="multiple" value="item-1,item-2">
    <art-accordion-item value="item-1" open>
      <span slot="trigger">Product Information</span>
      <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
    </art-accordion-item>
    <art-accordion-item value="item-2" open>
      <span slot="trigger">Shipping Details</span>
      <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days.</p>
    </art-accordion-item>
    <art-accordion-item value="item-3">
      <span slot="trigger">Return Policy</span>
      <p>We stand behind our products with a comprehensive 30-day return policy.</p>
    </art-accordion-item>
  </art-accordion>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/accordion/multiple.html [HTML]
<<< ../../../sandbox/react/src/samples/accordion/multiple.tsx [React]
<<< ../../../sandbox/vue/src/samples/accordion/multiple.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/accordion/multiple.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-accordion disabled>
    <art-accordion-item value="item-1">
      <span slot="trigger">Product Information</span>
      <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
    </art-accordion-item>
    <art-accordion-item value="item-2">
      <span slot="trigger">Shipping Details</span>
      <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days.</p>
    </art-accordion-item>
    <art-accordion-item value="item-3">
      <span slot="trigger">Return Policy</span>
      <p>We stand behind our products with a comprehensive 30-day return policy.</p>
    </art-accordion-item>
  </art-accordion>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/accordion/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/accordion/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/accordion/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/accordion/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-accordion" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move to the next trigger (every trigger is a tab stop, as in the native element) |
| `Enter / Space` | Toggle the section (native `<summary>`) |
| `↓ / ↑` | Move focus to the next / previous trigger |
| `Home / End` | First / last trigger |

Native `<details>` / `<summary>` per item — the expanded state needs no ARIA. In a `single` accordion the component closes the other items (the native `name` grouping cannot span shadow roots). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

States: `focus-visible` (ring on the trigger) and `disabled` are implemented; open / closed is the native state. `hover` underlines the trigger. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-border-default`, `--art-border-width`` | item dividers |
| ``--art-space-4`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-radius-md`` | trigger and content |
| ``--art-color-fg-muted`, `--art-size-icon-md`` | chevron |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |
| ``--art-duration-base`, `--art-ease-out`` | chevron and height motion |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for a few related sections (FAQ, settings groups) | Hide the main content of a page in an accordion |
| Keep titles short and parallel | Write full sentences as triggers |
