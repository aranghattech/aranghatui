# Input Group

Groups an input or textarea with addons — icons, text, buttons, kbd hints and full-width rows — in one field frame. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-input-group>
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
    <art-input placeholder="Search…" aria-label="Search"></art-input>
    <span slot="end">12 results</span>
  </art-input-group>
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
<<< ../../../sandbox/html/src/samples/input-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/basic.ts [Angular]
:::

Put an `art-input` or `art-textarea` in the default slot; addons go in `start`, `end`, `block-start` or `block-end`. The control keeps its own API (`value`, `input`/`change`, `v-model`, `ngModel`); the group only draws the frame. For a single icon or short text, `art-input`'s own `start` / `end` slots are enough.

## Examples

### Basic

The group draws one frame around the control and its addons. Inline addons take `slot="start"` / `slot="end"`.

<Preview frame="stack">
  <art-input-group>
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
    <art-input placeholder="Search…" aria-label="Search"></art-input>
    <span slot="end">12 results</span>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/basic.ts [Angular]
:::

### With button

Buttons inside a group are `size="sm"`; they keep their own focus ring and tab stop.

<Preview frame="stack">
  <art-input-group>
    <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
    <art-button slot="end" size="sm" variant="secondary">Subscribe</art-button>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/with-button.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/with-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/with-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/with-button.ts [Angular]
:::

### With kbd

<Preview frame="stack">
  <art-input-group>
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
    <art-input placeholder="Search…" aria-label="Search"></art-input>
    <art-kbd slot="end">⌘K</art-kbd>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/with-kbd.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/with-kbd.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/with-kbd.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/with-kbd.ts [Angular]
:::

### With spinner

<Preview frame="stack">
  <art-input-group>
    <art-input placeholder="Searching…" aria-label="Search" value="design"></art-input>
    <span slot="end"><art-spinner size="sm" label="Searching"></art-spinner> Searching…</span>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/with-spinner.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/with-spinner.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/with-spinner.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/with-spinner.ts [Angular]
:::

### With textarea

`block-start` / `block-end` addons are full-width rows — a toolbar under a textarea, for example.

<Preview frame="stack">
  <art-input-group>
    <art-textarea placeholder="Ask, search or chat…" aria-label="Message"></art-textarea>
    <span slot="block-end">
      Line 1, Column 1
      <art-button size="sm" variant="ghost">Run</art-button>
    </span>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/with-textarea.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/with-textarea.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/with-textarea.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/with-textarea.ts [Angular]
:::

### Prefix and suffix

<Preview frame="stack">
  <art-input-group>
    <span slot="start">https://</span>
    <art-input placeholder="example" aria-label="Domain"></art-input>
    <span slot="end">.com</span>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/prefix-suffix.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/prefix-suffix.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/prefix-suffix.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/prefix-suffix.ts [Angular]
:::

### Disabled

The whole group dims when its control is disabled.

<Preview frame="stack">
  <art-input-group>
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
    <art-input placeholder="Search…" aria-label="Search" disabled></art-input>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/disabled.ts [Angular]
:::

### Invalid

The invalid ring moves to the group frame.

<Preview frame="stack">
  <art-input-group>
    <span slot="start">https://</span>
    <art-input value="not a domain" aria-label="Domain" invalid></art-input>
  </art-input-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-group/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/input-group/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-group/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-group/invalid.ts [Angular]
:::

## API Reference

<ApiReference tag="art-input-group" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the control; a button addon is its own tab stop |
| `Typing` | Goes to the control as usual |

`role="group"` on the host. The control and any buttons keep their native semantics and names; addon text is plain content. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `focus-visible` (ring on the frame), `disabled` (whole group dims) and `invalid` (destructive ring on the frame) follow the control. `hover`, `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`` | frame |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |
| ``--art-color-destructive-solid`` | invalid ring |
| ``--art-control-padding-x-field-md`, `--art-space-2`, `--art-space-1`` | addon spacing |
| ``--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-weight-medium`` | addon text |
| ``--art-size-icon-md`` | addon icons |

## Do / Don't

| Do | Don't |
|---|---|
| Use it when a field needs a button, kbd hint or toolbar | Use it for a lone icon (use Input's own slots) |
| Keep addon buttons `size="sm"` and `ghost` / `secondary` | Put a primary call to action inside the field |
| One control per group | Stack several inputs in one frame |
