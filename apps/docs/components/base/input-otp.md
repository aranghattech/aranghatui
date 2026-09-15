# Input OTP

Accessible one-time password component with copy paste functionality. shadcn/ui parity, form-associated, one native input.

## Preview

<Preview frame="inline">
  <art-input-otp aria-label="One-time code"></art-input-otp>
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
<<< ../../../sandbox/html/src/samples/input-otp/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/basic.ts [Angular]
:::

Bind `value`; `input` fires on every character, `change` on blur and `complete` when all slots are filled. React `onInput` / `onComplete`, Vue `v-model` + `@complete`, Angular `[(ngModel)]` + `(complete)`.

## Examples

### Basic

Six digits by default. Typing, pasting a full code, autofill from SMS (`autocomplete="one-time-code"`), Backspace and the arrow keys are all native.

<Preview frame="inline">
  <art-input-otp aria-label="One-time code"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/basic.ts [Angular]
:::

### Groups

`group-size` splits the slots into groups with a separator between them.

<Preview frame="inline">
  <art-input-otp group-size="3" aria-label="One-time code"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/groups.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/groups.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/groups.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/groups.ts [Angular]
:::

### Length

<Preview frame="inline">
  <art-input-otp length="4" aria-label="PIN"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/length.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/length.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/length.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/length.ts [Angular]
:::

### Alphanumeric

`pattern="alphanumeric"` accepts letters and digits; `numeric` (default) filters to digits and shows the numeric keyboard.

<Preview frame="inline">
  <art-input-otp pattern="alphanumeric" group-size="4" length="8" aria-label="Licence key"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/alphanumeric.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/alphanumeric.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/alphanumeric.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/alphanumeric.ts [Angular]
:::

### With value

<Preview frame="inline">
  <art-input-otp value="1234" aria-label="One-time code"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/with-value.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/with-value.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/with-value.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/with-value.ts [Angular]
:::

### Disabled

<Preview frame="inline">
  <art-input-otp value="123456" disabled aria-label="One-time code"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/disabled.ts [Angular]
:::

### Invalid

<Preview frame="inline">
  <art-input-otp value="000000" invalid aria-label="One-time code"></art-input-otp>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/invalid.ts [Angular]
:::

### With label

<Preview frame="stack">
  <art-field>
    <art-label slot="label">Verification code</art-label>
    <art-input-otp group-size="3"></art-input-otp>
    <p slot="description">Enter the 6-digit code we sent to your phone.</p>
  </art-field>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/input-otp/with-label.html [HTML]
<<< ../../../sandbox/react/src/samples/input-otp/with-label.tsx [React]
<<< ../../../sandbox/vue/src/samples/input-otp/with-label.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/input-otp/with-label.ts [Angular]
:::

## API Reference

<ApiReference tag="art-input-otp" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the field |
| `Digits / characters` | Fill the next slot |
| `Backspace` | Clear the previous slot |
| `← / →` | Move the caret between slots |
| `⌘V / Ctrl+V` | Paste a whole code |

One native `<input>` (named via `aria-label` / `aria-labelledby`, described via `aria-describedby`) carries all semantics; the slots are decorative (`aria-hidden`). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `focus-visible` (ring on the active slot), `disabled` and `invalid` (destructive ring on every slot) are implemented. `hover`, `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-md`` | slot size |
| ``--art-color-border-default`, `--art-color-border-strong`, `--art-border-width`, `--art-radius-md`` | slot frame |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | active slot ring |
| ``--art-color-destructive-solid`` | invalid ring |
| ``--art-color-fg-default`, `--art-size-icon-md`, `--art-duration-caret-blink`` | caret |
| ``--art-color-fg-muted`` | separator |
| ``--art-space-2`` | group gap |

## Do / Don't

| Do | Don't |
|---|---|
| Set `length` to the code you actually send | Ask for more digits than the code has |
| Submit on `complete` | Make the user press a button after the last digit |
| Name it (“One-time code”) | Leave the field unnamed |
