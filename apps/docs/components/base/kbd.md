# Kbd

Used to display textual user input from a keyboard. shadcn/ui parity, a native `<kbd>`.

## Preview

<Preview frame="inline">
  <art-kbd>⌘</art-kbd>
  <art-kbd>⇧</art-kbd>
  <art-kbd>⌥</art-kbd>
  <art-kbd>⌃</art-kbd>
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
<<< ../../../sandbox/html/src/samples/kbd/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/kbd/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/kbd/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/kbd/basic.ts [Angular]
:::

One key per `art-kbd`; wrap sequences in `art-kbd-group` with plain-text separators between keys.

## Examples

### Basic

<Preview frame="inline">
  <art-kbd>⌘</art-kbd>
  <art-kbd>⇧</art-kbd>
  <art-kbd>⌥</art-kbd>
  <art-kbd>⌃</art-kbd>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/kbd/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/kbd/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/kbd/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/kbd/basic.ts [Angular]
:::

### Group

`art-kbd-group` lays out keys and separators in a row.

<Preview frame="inline">
  <art-kbd-group>
    <art-kbd>Ctrl</art-kbd>
    <span>+</span>
    <art-kbd>B</art-kbd>
  </art-kbd-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/kbd/group.html [HTML]
<<< ../../../sandbox/react/src/samples/kbd/group.tsx [React]
<<< ../../../sandbox/vue/src/samples/kbd/group.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/kbd/group.ts [Angular]
:::

### In text

<Preview frame="stack">
  <p>Press <art-kbd-group><art-kbd>⌘</art-kbd><art-kbd>K</art-kbd></art-kbd-group> to open the command palette.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/kbd/in-text.html [HTML]
<<< ../../../sandbox/react/src/samples/kbd/in-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/kbd/in-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/kbd/in-text.ts [Angular]
:::

### In a button

<Preview frame="inline">
  <art-button variant="outline" size="sm">
    Accept
    <art-kbd slot="end">⏎</art-kbd>
  </art-button>
  <art-button variant="outline" size="sm">
    Cancel
    <art-kbd slot="end">Esc</art-kbd>
  </art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/kbd/in-button.html [HTML]
<<< ../../../sandbox/react/src/samples/kbd/in-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/kbd/in-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/kbd/in-button.ts [Angular]
:::

## API Reference

<ApiReference tag="art-kbd" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable |

Native `<kbd>` semantics; screen readers read the key text as-is. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — no hover, focus, active, disabled, loading or invalid state.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-muted`, `--art-color-fg-muted`` | key face and text |
| ``--art-radius-sm`, `--art-space-5`, `--art-space-1`` | shape |
| ``--art-font-size-xs`, `--art-font-weight-medium`, `--art-font-family-sans`` | text |
| ``--art-size-icon-sm`` | icon keys |

## Do / Don't

| Do | Don't |
|---|---|
| Show the platform's own symbols (⌘ on macOS, Ctrl elsewhere) | Hard-code one platform |
| Keep one key per `art-kbd` | Put “Ctrl+B” in a single key |
