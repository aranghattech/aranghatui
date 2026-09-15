# art-forgot-password



<!-- Auto Generated Below -->


## Overview

Forgot Password — a card that asks for the account email and, once `sent`, confirms that the
reset link is on its way. You own what happens on `submit` (`detail.email`).

## Properties

| Property          | Attribute          | Description                                           | Type                  | Default                                                               |
| ----------------- | ------------------ | ----------------------------------------------------- | --------------------- | --------------------------------------------------------------------- |
| `description`     | `description`      |                                                       | `string`              | `"Enter your email and we'll send you a link to reset it"`            |
| `emailLabel`      | `email-label`      |                                                       | `string`              | `'Email'`                                                             |
| `error`           | `error`            | Error line above the button.                          | `string \| undefined` | `undefined`                                                           |
| `heading`         | `heading`          |                                                       | `string`              | `'Forgot your password?'`                                             |
| `loading`         | `loading`          | Spinner on the button; submits are ignored meanwhile. | `boolean`             | `false`                                                               |
| `loginHref`       | `login-href`       | Shows the "back to login" link under the button.      | `string \| undefined` | `undefined`                                                           |
| `loginLabel`      | `login-label`      |                                                       | `string`              | `'Back to login'`                                                     |
| `sent`            | `sent`             | Replace the form with the confirmation.               | `boolean`             | `false`                                                               |
| `sentDescription` | `sent-description` |                                                       | `string`              | `'We sent you a link to reset your password. It expires in an hour.'` |
| `sentHeading`     | `sent-heading`     |                                                       | `string`              | `'Check your inbox'`                                                  |
| `submitLabel`     | `submit-label`     |                                                       | `string`              | `'Send reset link'`                                                   |


## Events

| Event    | Description                                                            | Type                              |
| -------- | ---------------------------------------------------------------------- | --------------------------------- |
| `submit` | Emitted when the form is submitted with a valid email; `detail.email`. | `CustomEvent<{ email: string; }>` |


## Slots

| Slot       | Description                   |
| ---------- | ----------------------------- |
| `"footer"` | Extra content under the card. |
| `"logo"`   | Brand above the card.         |


## Shadow Parts

| Part      | Description                          |
| --------- | ------------------------------------ |
| `"card"`  | The card.                            |
| `"error"` | The error line.                      |
| `"form"`  | The form.                            |
| `"sent"`  | The confirmation shown while `sent`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
