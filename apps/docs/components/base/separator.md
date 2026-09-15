# Separator

Visually or semantically separates content. shadcn/ui parity, a native `<hr>`.

## Preview

<Preview frame="stack">
  <p>An open-source UI component library.</p>
  <art-separator></art-separator>
  <p>Built for HTML, React, Vue and Angular.</p>
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
<<< ../../../sandbox/html/src/samples/separator/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/separator/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/separator/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/separator/basic.ts [Angular]
:::

Horizontal by default; `orientation="vertical"` inside a flex row. Decorative unless `semantic` is set.

## Examples

### Basic

<Preview frame="stack">
  <p>An open-source UI component library.</p>
  <art-separator></art-separator>
  <p>Built for HTML, React, Vue and Angular.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/separator/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/separator/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/separator/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/separator/basic.ts [Angular]
:::

### Vertical

A vertical rule stretches to the height of its flex row.

<Preview frame="inline">
  <art-button variant="ghost">Blog</art-button>
  <art-separator orientation="vertical"></art-separator>
  <art-button variant="ghost">Docs</art-button>
  <art-separator orientation="vertical"></art-separator>
  <art-button variant="ghost">Source</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/separator/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/separator/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/separator/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/separator/vertical.ts [Angular]
:::

### Semantic

Rules are decorative by default (`role="none"`). `semantic` exposes `role="separator"` when the rule genuinely structures content.

<Preview frame="stack">
  <p>Account</p>
  <art-separator semantic></art-separator>
  <p>Billing</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/separator/semantic.html [HTML]
<<< ../../../sandbox/react/src/samples/separator/semantic.tsx [React]
<<< ../../../sandbox/vue/src/samples/separator/semantic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/separator/semantic.ts [Angular]
:::

## API Reference

<ApiReference tag="art-separator" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable |

Native `<hr>`, hidden with `role="none"` by default; `semantic` restores the implicit `separator` role and sets `aria-orientation` for vertical rules. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — no hover, focus, active, disabled, loading or invalid state.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-border-default`` | rule colour |
| ``--art-border-width`` | rule thickness (the one border width) |

## Do / Don't

| Do | Don't |
|---|---|
| Use it to group related content | Stack separators to add spacing (use margin) |
| Set `semantic` only when the split matters to a screen reader | Expose every decorative rule as a separator |
