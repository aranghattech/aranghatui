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

`input` fires on every keystroke and `change` on commit; both bubble from `<art-input>` with `detail.value` (and `event.target.value`). React uses `onInput` / `onChange`, Vue `v-model`, Angular `[(ngModel)]` or reactive forms — no adapters.

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
| ``--art-color-fg-default`, `--art-color-fg-muted`` | text, placeholder |
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
