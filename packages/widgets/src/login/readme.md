# art-login



<!-- Auto Generated Below -->


## Overview

Login — the shadcn login block as one element: a card with email and password, a "forgot
password" link, the submit button, optional social buttons and a sign-up link. The widget
owns the form; you own what happens on `submit` (`detail.email`, `detail.password`).

## Properties

| Property        | Attribute        | Description                                                 | Type                  | Default                                             |
| --------------- | ---------------- | ----------------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `description`   | `description`    |                                                             | `string`              | `'Enter your email below to login to your account'` |
| `emailLabel`    | `email-label`    |                                                             | `string`              | `'Email'`                                           |
| `emailOnly`     | `email-only`     | Email only (a magic link / passwordless flow).              | `boolean`             | `false`                                             |
| `error`         | `error`          | Error line above the button (wrong credentials, network).   | `string \| undefined` | `undefined`                                         |
| `forgotHref`    | `forgot-href`    | Shows the "forgot password" link beside the password label. | `string \| undefined` | `undefined`                                         |
| `forgotLabel`   | `forgot-label`   |                                                             | `string`              | `'Forgot your password?'`                           |
| `heading`       | `heading`        |                                                             | `string`              | `'Login to your account'`                           |
| `loading`       | `loading`        | Spinner on the button; submits are ignored meanwhile.       | `boolean`             | `false`                                             |
| `passwordLabel` | `password-label` |                                                             | `string`              | `'Password'`                                        |
| `signupHref`    | `signup-href`    | Shows the sign-up line under the button.                    | `string \| undefined` | `undefined`                                         |
| `signupLabel`   | `signup-label`   |                                                             | `string`              | `'Sign up'`                                         |
| `signupText`    | `signup-text`    |                                                             | `string`              | `"Don't have an account?"`                          |
| `submitLabel`   | `submit-label`   |                                                             | `string`              | `'Login'`                                           |


## Events

| Event    | Description                                                                                                        | Type                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| `submit` | Emitted when the form is submitted with valid fields; `detail.email`, `detail.password` (empty when `email-only`). | `CustomEvent<{ email: string; password: string; }>` |


## Slots

| Slot       | Description                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| `"footer"` | Extra content under the card (terms, help).                                                                              |
| `"logo"`   | Brand above the card (a link with an icon and the product name).                                                         |
| `"social"` | Alternative sign-in buttons (`<art-button slot="social" variant="outline">`), shown under an "Or continue with" divider. |


## Shadow Parts

| Part      | Description     |
| --------- | --------------- |
| `"card"`  | The card.       |
| `"error"` | The error line. |
| `"form"`  | The form.       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
