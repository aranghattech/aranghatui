<!-- hand-written -->
# Hello

Phase 0 proof component: exercises tokens, Tailwind-in-shadow, the focus-ring recipe, a native `click` and a kebab-case custom event. Removed when Button lands.

## Preview

<Preview>
  <art-hello name="artui"></art-hello>
  <art-hello name="artui" variant="outline"></art-hello>
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
<<< ../../../sandbox/html/src/samples/hello/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/hello/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/hello/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hello/basic.ts [Angular]
:::

## Examples

### Basic

<Preview><art-hello name="artui"></art-hello></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hello/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/hello/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/hello/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hello/basic.ts [Angular]
:::

### Outline

<Preview><art-hello name="artui" variant="outline">Outline variant with slotted text.</art-hello></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hello/outline.html [HTML]
<<< ../../../sandbox/react/src/samples/hello/outline.tsx [React]
<<< ../../../sandbox/vue/src/samples/hello/outline.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hello/outline.ts [Angular]
:::

## API Reference

<ApiReference tag="art-hello" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focuses the greet button |
| `Enter` / `Space` | Activates it (emits `greet`) |

Roles: the inner control is a native `<button>`. Pattern: [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

## Tokens used

| Token | Used for |
|---|---|
| `--art-color-bg-surface` | card background |
| `--art-color-border-default` | card border |
| `--art-color-fg-default`, `--art-color-fg-muted` | text |
| `--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary` | default button |
| `--art-color-bg-accent` | outline button hover |
| `--art-radius-lg`, `--art-radius-md` | card / button radius |
| `--art-shadow-raised` | card elevation |
| `--art-control-height-md`, `--art-control-padding-x-md` | button density |
| `--art-ring-width`, `--art-ring-offset`, `--art-color-ring` | focus ring |
| `--art-duration-fast`, `--art-ease-out` | hover transition |

## Do / Don't

| Do | Don't |
|---|---|
| Use it to smoke-test a new framework integration | Ship it in a product UI — it is a scaffold, not a component |