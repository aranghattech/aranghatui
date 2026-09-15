# Marker

Displays inline conversation markers — status updates, system notes, bordered rows and labelled separators. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-marker>
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></art-icon>
    Task completed
  </art-marker>
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
<<< ../../../sandbox/html/src/samples/marker/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/marker/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/marker/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/marker/basic.ts [Angular]
:::

Put an `art-icon` or `art-spinner` in the `icon` slot and the text in the default slot. `variant="separator"` centres the text between rules; `variant="border"` underlines the row; `href` makes it a link.

## Examples

### Basic

An icon in the `icon` slot and text in the default slot; the row is muted and reads as a note between messages.

<Preview frame="stack">
  <art-marker>
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></art-icon>
    Task completed
  </art-marker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/marker/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/marker/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/marker/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/marker/basic.ts [Angular]
:::

### Status

`role="status"` on the host announces streaming updates politely.

<Preview frame="stack">
  <art-marker role="status">
    <art-spinner slot="icon" size="sm" label="Thinking"></art-spinner>
    Thinking…
  </art-marker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/marker/status.html [HTML]
<<< ../../../sandbox/react/src/samples/marker/status.tsx [React]
<<< ../../../sandbox/vue/src/samples/marker/status.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/marker/status.ts [Angular]
:::

### Separator

A centred label between two rules — dates and section breaks.

<Preview frame="stack">
  <art-marker variant="separator">Today</art-marker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/marker/separator.html [HTML]
<<< ../../../sandbox/react/src/samples/marker/separator.tsx [React]
<<< ../../../sandbox/vue/src/samples/marker/separator.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/marker/separator.ts [Angular]
:::

### Border

<Preview frame="stack">
  <art-marker variant="border">
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></art-icon>
    Sent · 2:14 PM
  </art-marker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/marker/border.html [HTML]
<<< ../../../sandbox/react/src/samples/marker/border.tsx [React]
<<< ../../../sandbox/vue/src/samples/marker/border.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/marker/border.ts [Angular]
:::

### As a link

`href` renders an `<a>` with hover and focus states.

<Preview frame="stack">
  <art-marker href="#">
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></art-icon>
    View the full report
  </art-marker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/marker/link.html [HTML]
<<< ../../../sandbox/react/src/samples/marker/link.tsx [React]
<<< ../../../sandbox/vue/src/samples/marker/link.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/marker/link.ts [Angular]
:::

## API Reference

<ApiReference tag="art-marker" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus a linked marker (`href`) |
| `Enter` | Follow the link |

A plain row, or an `<a>` when `href` is set. The icon is decorative. Set `role="status"` on the host for live updates. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `hover` and `focus-visible` apply to linked markers; `active`, `disabled`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-fg-muted`, `--art-color-fg-default`` | text and link hover |
| ``--art-font-size-sm`, `--art-space-2`, `--art-space-4`` | text, gap, min height |
| ``--art-color-border-default`, `--art-border-width`` | rules |
| ``--art-size-icon-md`` | icon |

## Do / Don't

| Do | Don't |
|---|---|
| Keep markers to one line | Put a paragraph in a marker |
| Use `separator` for dates between messages | Use it as a heading |
