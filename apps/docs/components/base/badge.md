# Badge

Displays a badge or a component that looks like a badge. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-badge>Badge</art-badge>
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
<<< ../../../sandbox/html/src/samples/badge/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/badge/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/badge/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/badge/basic.ts [Angular]
:::

Static by default. Set `href` for a linked badge (it becomes an `<a>` and gains hover and focus states).

## Examples

### Basic

<Preview frame="inline">
  <art-badge>Badge</art-badge>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/badge/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/badge/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/badge/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/badge/basic.ts [Angular]
:::

### Variants

<Preview frame="inline">
  <art-badge>Default</art-badge>
  <art-badge variant="secondary">Secondary</art-badge>
  <art-badge variant="outline">Outline</art-badge>
  <art-badge variant="destructive">Destructive</art-badge>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/badge/variants.html [HTML]
<<< ../../../sandbox/react/src/samples/badge/variants.tsx [React]
<<< ../../../sandbox/vue/src/samples/badge/variants.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/badge/variants.ts [Angular]
:::

### With icon

Icons take the small icon size. Use `<art-icon size="sm">` with your icon data or a raw `<svg>`.

<Preview frame="inline">
  <art-badge variant="secondary">
    <art-icon size="sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
    Verified
  </art-badge>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/badge/with-icon.html [HTML]
<<< ../../../sandbox/react/src/samples/badge/with-icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/badge/with-icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/badge/with-icon.ts [Angular]
:::

### As a link

`href` renders an `<a>` with hover and focus-ring states; the badge is otherwise static.

<Preview frame="inline">
  <art-badge href="#" variant="outline">Link</art-badge>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/badge/link.html [HTML]
<<< ../../../sandbox/react/src/samples/badge/link.tsx [React]
<<< ../../../sandbox/vue/src/samples/badge/link.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/badge/link.ts [Angular]
:::

## API Reference

<ApiReference tag="art-badge" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus a linked badge (`href`) |
| `Enter` | Follow the link |

A `<span>` with text, or a native `<a>` when `href` is set. No ARIA role of its own. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `hover` and `focus-visible` apply only to linked badges; `active`, `disabled`, `loading` and `invalid` do not apply to a label.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-primary-solid`, `--art-color-fg-on-primary`` | default |
| ``--art-color-secondary-solid`, `--art-color-secondary-fg`` | secondary |
| ``--art-color-destructive-solid`, `--art-color-fg-on-destructive`` | destructive |
| ``--art-color-border-default`, `--art-border-width`, `--art-color-fg-default`` | outline |
| ``--art-radius-md`, `--art-space-2`, `--art-space-1`` | shape |
| ``--art-font-size-xs`, `--art-font-weight-medium`` | text |
| ``--art-size-icon-sm`` | icon |

## Do / Don't

| Do | Don't |
|---|---|
| Keep the text to one or two words | Put sentences in a badge |
| Use `destructive` for errors and removals only | Use colour variants decoratively |
