# Input

Displays a form input field or a component that looks like an input field. shadcn/ui parity, form-associated.

## Preview

<Preview frame="stack">
  <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
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
<<< ../../../sandbox/html/src/samples/input/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/input/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/basic.ts [Angular]
:::

`input` fires on every keystroke and `change` on commit; both bubble from `<art-input>` with `detail.value` (and `event.target.value`). React uses `onInput` / `onChange`, Vue `v-model`, Angular `[(ngModel)]` or reactive forms — no adapters. Icons or short text go in the `start` / `end` slots and render inside the field frame.

## Examples

### Basic

An input without a visible label needs `aria-label`; prefer a visible `art-label`.

<Preview frame="stack">
  <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/input/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/basic.ts [Angular]
:::

### Sizes

Heights come from `--art-control-height-*`, so an input and a button of the same size line up pixel-perfectly.

<Preview frame="stack">
  <art-input size="sm" placeholder="Small" aria-label="Small"></art-input>
  <art-input placeholder="Medium" aria-label="Medium"></art-input>
  <art-input size="lg" placeholder="Large" aria-label="Large"></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/input/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/sizes.ts [Angular]
:::

### With label

The label names the input across the shadow boundary — no extra ARIA needed.

<Preview frame="stack">
  <art-label for="email-1">Email</art-label>
  <art-input id="email-1" type="email" placeholder="Email"></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/with-label.html [HTML]
<<< ../../../sandbox/react/src/samples/input/with-label.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/with-label.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/with-label.ts [Angular]
:::

### With button

<Preview frame="inline">
  <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
  <art-button type="submit">Subscribe</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/with-button.html [HTML]
<<< ../../../sandbox/react/src/samples/input/with-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/with-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/with-button.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-input placeholder="Email" aria-label="Email" disabled></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/input/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/disabled.ts [Angular]
:::

### Invalid

`invalid` sets `aria-invalid` and the destructive ring; the description is read through `aria-describedby`.

<Preview frame="stack">
  <art-label for="email-2">Email</art-label>
  <art-input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error"></art-input>
  <p id="email-2-error">Enter a valid email address.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/input/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/invalid.ts [Angular]
:::

### With icon

Anything in the `start` / `end` slot sits inside the field frame and dims with the muted foreground. Use `<art-icon>` with your icon data, or drop in a raw `<svg>` from the icon set you already use.

<Preview frame="stack">
  <art-input placeholder="Search" aria-label="Search">
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
  </art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/with-icon.html [HTML]
<<< ../../../sandbox/react/src/samples/input/with-icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/with-icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/with-icon.ts [Angular]
:::

### With end icon

<Preview frame="stack">
  <art-input type="email" placeholder="Email" aria-label="Email">
    <art-icon slot="end"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></art-icon>
  </art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/with-end-icon.html [HTML]
<<< ../../../sandbox/react/src/samples/input/with-end-icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/with-end-icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/with-end-icon.ts [Angular]
:::

### With text

Short text addons work the same way — a prefix, a suffix or a unit. Clicking an addon focuses the input.

<Preview frame="stack">
  <art-input placeholder="example" aria-label="Domain">
    <span slot="start">https://</span>
    <span slot="end">.com</span>
  </art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/with-text.html [HTML]
<<< ../../../sandbox/react/src/samples/input/with-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/with-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/with-text.ts [Angular]
:::

### Addon sizes

The addon padding follows the field padding of each size.

<Preview frame="stack">
  <art-input size="sm" placeholder="Search" aria-label="Search small">
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
  </art-input>
  <art-input placeholder="Search" aria-label="Search medium">
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
  </art-input>
  <art-input size="lg" placeholder="Search" aria-label="Search large">
    <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
  </art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/addon-sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/input/addon-sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/addon-sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/addon-sizes.ts [Angular]
:::

### File

<Preview frame="stack">
  <art-label for="picture">Picture</art-label>
  <art-input id="picture" type="file"></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/file.html [HTML]
<<< ../../../sandbox/react/src/samples/input/file.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/file.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/file.ts [Angular]
:::

### In a form

Form-associated: the value is submitted under `name`, `required`/`minlength` participate in validation, and reset restores the initial value.

<Preview frame="stack">
  <form onsubmit="event.preventDefault()">
    <art-label for="username">Username</art-label>
    <art-input id="username" name="username" placeholder="shadcn" required minlength="2"></art-input>
    <art-button type="submit">Submit</art-button>
    <art-button type="reset" variant="ghost">Reset</art-button>
  </form>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input/form.html [HTML]
<<< ../../../sandbox/react/src/samples/input/form.tsx [React]
<<< ../../../sandbox/vue/src/samples/input/form.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input/form.ts [Angular]
:::

## API Reference

<ApiReference tag="art-input" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the input (focus is delegated to the native control) |
| `Typing` | Updates `value`, emits `input` |
| `Enter / blur` | Emits `change`; Enter submits the surrounding form |

Native `<input>` semantics. Names arrive via `aria-label`, or via `aria-labelledby` / `art-label`, whose referenced text is resolved across the shadow boundary; `aria-describedby` becomes the description. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply to a text field (shadcn has no hover style either).

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`` | sizes |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`` | frame |
| ``--art-color-fg-default`, `--art-color-fg-muted`` | text, placeholder, addons |
| ``--art-size-icon-md`, `--art-font-weight-medium`, `--art-font-line-height-sm`` | addon icon size and text |
| ``--art-color-primary-solid`, `--art-color-fg-on-primary`` | selection |
| ``--art-color-destructive-solid`` | invalid ring |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |
| ``--art-shadow-raised`` | elevation |
| ``--art-font-size-md`, `--art-font-size-sm`` | 16 px on small screens (no iOS zoom), 14 px from `md` |

## Do / Don't

| Do | Don't |
|---|---|
| Pair every input with a visible label | Use placeholder text as the label |
| Match input and button sizes in a row | Mix `sm` inputs with `md` buttons |
| Set `type` so mobile keyboards fit | Use `type="text"` for emails and numbers |
| Put icons and units in the `start` / `end` slots | Overlay an icon on the field with absolute positioning |
