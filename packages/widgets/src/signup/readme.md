# art-signup



<!-- Auto Generated Below -->


## Overview

Signup — the shadcn signup block as one element: name, email, password and confirmation in a
card, the create-account button, optional social buttons and a sign-in link. The widget checks
that the passwords match; you own what happens on `submit` (`detail.name`, `detail.email`,
`detail.password`).

## Properties

| Property        | Attribute        | Description                                           | Type                  | Default                                             |
| --------------- | ---------------- | ----------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `confirmLabel`  | `confirm-label`  |                                                       | `string`              | `'Confirm password'`                                |
| `description`   | `description`    |                                                       | `string`              | `'Enter your details below to create your account'` |
| `emailLabel`    | `email-label`    |                                                       | `string`              | `'Email'`                                           |
| `error`         | `error`          | Error line above the button.                          | `string \| undefined` | `undefined`                                         |
| `heading`       | `heading`        |                                                       | `string`              | `'Create your account'`                             |
| `hideConfirm`   | `hide-confirm`   | Drop the confirmation field.                          | `boolean`             | `false`                                             |
| `loading`       | `loading`        | Spinner on the button; submits are ignored meanwhile. | `boolean`             | `false`                                             |
| `loginHref`     | `login-href`     | Shows the sign-in line under the button.              | `string \| undefined` | `undefined`                                         |
| `loginLabel`    | `login-label`    |                                                       | `string`              | `'Sign in'`                                         |
| `loginText`     | `login-text`     |                                                       | `string`              | `'Already have an account?'`                        |
| `mismatchText`  | `mismatch-text`  |                                                       | `string`              | `'Passwords do not match.'`                         |
| `nameLabel`     | `name-label`     |                                                       | `string`              | `'Full name'`                                       |
| `passwordLabel` | `password-label` |                                                       | `string`              | `'Password'`                                        |
| `submitLabel`   | `submit-label`   |                                                       | `string`              | `'Create account'`                                  |


## Events

| Event    | Description                                                                                                       | Type                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `submit` | Emitted when the form is submitted with valid, matching fields; `detail.name`, `detail.email`, `detail.password`. | `CustomEvent<{ name: string; email: string; password: string; }>` |


## Slots

| Slot       | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `"footer"` | Extra content under the card (terms).                            |
| `"logo"`   | Brand above the card.                                            |
| `"social"` | Alternative sign-up buttons under an "Or continue with" divider. |


## Shadow Parts

| Part      | Description     |
| --------- | --------------- |
| `"card"`  | The card.       |
| `"error"` | The error line. |
| `"form"`  | The form.       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
