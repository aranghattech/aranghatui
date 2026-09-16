# Signup

The sign-up screen as one element: name, email, password and confirmation in a card, optional social buttons, a sign-in link. shadcn/ui signup blocks, compiled (ADR-0010).

## Preview

<Preview frame="inline">
  <art-signup login-href="#login"></art-signup>
</Preview>

## Installation

Lives in `@aranghat/widgets` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/signup/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/signup/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/signup/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/signup/basic.ts [Angular]
:::

Place `<art-signup login-href>` and listen to `submit` (`detail.name`, `detail.email`, `detail.password`); set `loading` while you create the account and `error` when it fails. Slots: `logo`, `social`, `footer`; `hide-confirm` for a single password field. React `<Signup onSubmit>`, Vue `@submit`, Angular `(submit)`.

## Examples

### Basic

Name, email, password and confirmation, the create-account button and the sign-in line (`login-href`). The widget refuses mismatched passwords with an inline error; `submit` fires with `detail.name` / `detail.email` / `detail.password` once everything validates.

<Preview frame="inline">
  <art-signup login-href="#login"></art-signup>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/signup/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/signup/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/signup/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/signup/basic.ts [Angular]
:::

### With social sign-up

`art-button`s in the `social` slot appear under an "Or continue with" divider.

<Preview frame="inline">
  <art-signup login-href="#login">
    <art-button slot="social" variant="outline">Sign up with Google</art-button>
  </art-signup>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/signup/social.html [HTML]
<<< ../../../sandbox/react/src/samples/signup/social.tsx [React]
<<< ../../../sandbox/vue/src/samples/signup/social.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/signup/social.ts [Angular]
:::

### Without confirmation

`hide-confirm` drops the second password field.

<Preview frame="inline">
  <art-signup login-href="#login" hide-confirm></art-signup>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/signup/no-confirm.html [HTML]
<<< ../../../sandbox/react/src/samples/signup/no-confirm.tsx [React]
<<< ../../../sandbox/vue/src/samples/signup/no-confirm.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/signup/no-confirm.ts [Angular]
:::

### Error

`error` shows a live-region line above the button.

<Preview frame="inline">
  <art-signup login-href="#login" error="An account with this email already exists."></art-signup>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/signup/error.html [HTML]
<<< ../../../sandbox/react/src/samples/signup/error.tsx [React]
<<< ../../../sandbox/vue/src/samples/signup/error.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/signup/error.ts [Angular]
:::

## API Reference

<ApiReference tag="art-signup" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Name, email, password, confirmation, button, social buttons, sign-in link |
| `Enter` | Submit from any field |

A native `<form>` with labelled fields; required fields block submission natively; a mismatch marks the confirmation field invalid with an `alert` message and moves focus there; `error` is a `role="alert"` line. Pattern: [APG](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).

States: `loading`, `error` and the mismatch error on the widget; the fields and buttons carry their own.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-sm`` | card width |
| ``--art-space-6`, `--art-space-3`, `--art-space-4`, `--art-space-2`` | form gaps |
| ``--art-color-fg-muted`, `--art-color-border-default`, `--art-font-size-sm`` | divider and helper text |
| ``--art-color-destructive-fg`` | error line |
| `(Card, Field, Input, Button tokens)` | the parts |

## Do / Don't

| Do | Don't |
|---|---|
| Ask only for what the account needs | Add a phone and a birthday "just in case" |
| Explain password rules in `description` | Reject a password without saying why |
| Link to sign-in for returning users | Let them create a duplicate account |
