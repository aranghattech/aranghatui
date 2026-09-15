# Collapsible

An interactive component which expands/collapses a panel. shadcn/ui parity, a native `<details>`.

## Preview

<Preview frame="stack">
  <art-collapsible>
    <art-item slot="trigger" variant="outline">
      <p slot="title">@peduarte starred 3 repositories</p>
      <art-icon slot="actions"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg></art-icon>
    </art-item>
    <art-item variant="outline">
      <p slot="title">@radix-ui/primitives</p>
    </art-item>
    <art-item variant="outline">
      <p slot="title">@radix-ui/colors</p>
    </art-item>
  </art-collapsible>
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
<<< ../../../sandbox/html/src/samples/collapsible/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/collapsible/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/collapsible/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/collapsible/basic.ts [Angular]
:::

Slot the trigger as `trigger` and the content in the default slot. `open` reflects the state; `open-change` reports user toggles. React `onOpenChange`, Vue `v-model:open`, Angular `[open]` / `(openChange)`.

## Examples

### Basic

The `trigger` slot becomes the native `<summary>`: click, Enter or Space toggles; the content follows. Anything can be the trigger — here an Item row.

<Preview frame="stack">
  <art-collapsible>
    <art-item slot="trigger" variant="outline">
      <p slot="title">@peduarte starred 3 repositories</p>
      <art-icon slot="actions"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg></art-icon>
    </art-item>
    <art-item variant="outline">
      <p slot="title">@radix-ui/primitives</p>
    </art-item>
    <art-item variant="outline">
      <p slot="title">@radix-ui/colors</p>
    </art-item>
  </art-collapsible>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/collapsible/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/collapsible/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/collapsible/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/collapsible/basic.ts [Angular]
:::

### Open

`open` reflects the state; `open-change` fires when the user toggles it.

<Preview frame="stack">
  <art-collapsible open>
    <p slot="trigger">Show details</p>
    <p>These details start expanded because of the open attribute.</p>
  </art-collapsible>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/collapsible/open.html [HTML]
<<< ../../../sandbox/react/src/samples/collapsible/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/collapsible/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/collapsible/open.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-collapsible disabled>
    <p slot="trigger">Unavailable section</p>
    <p>Never shown.</p>
  </art-collapsible>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/collapsible/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/collapsible/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/collapsible/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/collapsible/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-collapsible" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the trigger |
| `Enter / Space` | Toggle (native `<summary>`) |

Native `<details>` / `<summary>`: the trigger exposes the expanded state without ARIA; the content is hidden from everyone while collapsed. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

States: `focus-visible` (ring on the trigger) and `disabled` are implemented; open / closed is the native state. `hover`, `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`, `--art-radius-md`` | trigger focus ring |
| ``--art-duration-base`, `--art-ease-out`` | height motion (where supported) |

## Do / Don't

| Do | Don't |
|---|---|
| Put a meaningful label in the trigger | Use an icon alone as the trigger |
| Use Accordion for a set of related sections | Stack many Collapsibles by hand |
