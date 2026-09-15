# art-input-otp



<!-- Auto Generated Below -->


## Overview

Input OTP — shadcn/ui parity. A one-time-code field: one native `<input>` (so typing, paste,
autofill, Backspace and arrows are all platform behaviour) laid invisibly over a row of
character slots that render its value, with a caret in the active slot. Form-associated.

## Properties

| Property              | Attribute          | Description                                                                       | Type                          | Default     |
| --------------------- | ------------------ | --------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `disabled`            | `disabled`         |                                                                                   | `boolean`                     | `false`     |
| `groupSize`           | `group-size`       | Characters per group; `0` renders one group. A separator is drawn between groups. | `number`                      | `0`         |
| `hostAriaDescribedby` | `aria-describedby` |                                                                                   | `null \| string \| undefined` | `undefined` |
| `hostAriaLabel`       | `aria-label`       |                                                                                   | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby`  | `aria-labelledby`  |                                                                                   | `null \| string \| undefined` | `undefined` |
| `invalid`             | `invalid`          |                                                                                   | `boolean`                     | `false`     |
| `length`              | `length`           | Number of characters.                                                             | `number`                      | `6`         |
| `name`                | `name`             |                                                                                   | `string \| undefined`         | `undefined` |
| `pattern`             | `pattern`          | `numeric` (digits, numeric keyboard) or `alphanumeric`.                           | `"alphanumeric" \| "numeric"` | `'numeric'` |
| `required`            | `required`         |                                                                                   | `boolean`                     | `false`     |
| `value`               | `value`            |                                                                                   | `string`                      | `''`        |


## Events

| Event      | Description                                                                  | Type                              |
| ---------- | ---------------------------------------------------------------------------- | --------------------------------- |
| `change`   | Emitted when the value is committed (blur).                                  | `CustomEvent<{ value: string; }>` |
| `complete` | Emitted when every slot is filled.                                           | `CustomEvent<{ value: string; }>` |
| `input`    | Emitted on every change of the value; `detail.value` mirrors `target.value`. | `CustomEvent<{ value: string; }>` |


## Methods

### `setFocus() => Promise<void>`

Focus the field.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part          | Description                                              |
| ------------- | -------------------------------------------------------- |
| `"input"`     | The native `<input>` (transparent, on top of the slots). |
| `"separator"` | The separator between groups.                            |
| `"slot"`      | A character slot.                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
