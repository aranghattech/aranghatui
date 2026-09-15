# Forgot Password

The forgot-password screen as one element: an email field, the send button and a confirmation once the link is out. Compiled widget (ADR-0010).

## Preview

<Preview frame="inline">
  <art-forgot-password login-href="#login"></art-forgot-password>
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
<<< ../../../sandbox/html/src/samples/forgot-password/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/forgot-password/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/forgot-password/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/forgot-password/basic.ts [Angular]
:::

Place `<art-forgot-password login-href>`, listen to `submit` (`detail.email`), set `loading` while you send and `sent` when done (or `error`). Slots: `logo`, `footer`. React `<ForgotPassword onSubmit sent>`, Vue `:sent`, Angular `[sent]`.

## Examples

### Basic

One email field and the send button; `submit` fires with `detail.email`. `login-href` adds the way back.

<Preview frame="inline">
  <art-forgot-password login-href="#login"></art-forgot-password>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/forgot-password/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/forgot-password/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/forgot-password/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/forgot-password/basic.ts [Angular]
:::

### Sent

Set `sent` after your API accepted the request: the card confirms and offers the way back to login.

<Preview frame="inline">
  <art-forgot-password login-href="#login" sent></art-forgot-password>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/forgot-password/sent.html [HTML]
<<< ../../../sandbox/react/src/samples/forgot-password/sent.tsx [React]
<<< ../../../sandbox/vue/src/samples/forgot-password/sent.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/forgot-password/sent.ts [Angular]
:::

### Error

`error` shows a live-region line above the button.

<Preview frame="inline">
  <art-forgot-password login-href="#login" error="We could not find an account with that email."></art-forgot-password>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/forgot-password/error.html [HTML]
<<< ../../../sandbox/react/src/samples/forgot-password/error.tsx [React]
<<< ../../../sandbox/vue/src/samples/forgot-password/error.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/forgot-password/error.ts [Angular]
:::

## API Reference

<ApiReference tag="art-forgot-password" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Email, button, back link |
| `Enter` | Submit from the field |

A native `<form>` with a labelled, required email field; `error` is a `role="alert"` line; the confirmation replaces the form (heading and description change, so screen readers hear the new state on the next focus). Pattern: [APG](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).

States: `loading`, `error` and `sent` on the widget; the field and buttons carry their own.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-sm`` | card width |
| ``--art-space-6`, `--art-space-3`, `--art-space-4`` | form gaps |
| ``--art-color-fg-muted`, `--art-font-size-sm`` | helper text |
| ``--art-color-destructive-fg`` | error line |
| `(Card, Field, Input, Button tokens)` | the parts |

## Do / Don't

| Do | Don't |
|---|---|
| Confirm without revealing whether the email exists | Say "no account found" (account enumeration) |
| Tell users how long the link lasts | Send a link that never expires |
| Offer the way back to login | Strand the user on the confirmation |
