# art-input



<!-- Auto Generated Below -->


## Overview

Input — shadcn/ui parity. Wraps a native `<input>`; form-associated (FormData, validation,
reset); `input` / `change` are emitted from the host in response to the native events with
`event.target` being `<art-input>` and `detail.value` mirroring `target.value` (§3a). Sizes
share the control-height tokens so inputs align with buttons.

## Properties

| Property              | Attribute          | Description                                                                                 | Type                                                                                                      | Default     |
| --------------------- | ------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| `autocomplete`        | `autocomplete`     |                                                                                             | `string \| undefined`                                                                                     | `undefined` |
| `disabled`            | `disabled`         |                                                                                             | `boolean`                                                                                                 | `false`     |
| `hostAriaDescribedby` | `aria-describedby` |                                                                                             | `null \| string \| undefined`                                                                             | `undefined` |
| `hostAriaLabel`       | `aria-label`       |                                                                                             | `null \| string \| undefined`                                                                             | `undefined` |
| `hostAriaLabelledby`  | `aria-labelledby`  |                                                                                             | `null \| string \| undefined`                                                                             | `undefined` |
| `inputmode`           | `inputmode`        |                                                                                             | `string \| undefined`                                                                                     | `undefined` |
| `invalid`             | `invalid`          | Marks the field invalid (`aria-invalid` + destructive ring). Field sets it from validation. | `boolean`                                                                                                 | `false`     |
| `max`                 | `max`              |                                                                                             | `number \| string \| undefined`                                                                           | `undefined` |
| `maxlength`           | `maxlength`        |                                                                                             | `number \| undefined`                                                                                     | `undefined` |
| `min`                 | `min`              |                                                                                             | `number \| string \| undefined`                                                                           | `undefined` |
| `minlength`           | `minlength`        |                                                                                             | `number \| undefined`                                                                                     | `undefined` |
| `name`                | `name`             | Form field name (submitted with the value).                                                 | `string \| undefined`                                                                                     | `undefined` |
| `pattern`             | `pattern`          |                                                                                             | `string \| undefined`                                                                                     | `undefined` |
| `placeholder`         | `placeholder`      |                                                                                             | `string \| undefined`                                                                                     | `undefined` |
| `readonly`            | `readonly`         |                                                                                             | `boolean`                                                                                                 | `false`     |
| `required`            | `required`         |                                                                                             | `boolean`                                                                                                 | `false`     |
| `size`                | `size`             | Control size; aligns with Button.                                                           | `"lg" \| "md" \| "sm"`                                                                                    | `'md'`      |
| `step`                | `step`             |                                                                                             | `number \| string \| undefined`                                                                           | `undefined` |
| `type`                | `type`             | Native input type.                                                                          | `"date" \| "email" \| "file" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url"` | `'text'`    |
| `value`               | `value`            | Current value.                                                                              | `string`                                                                                                  | `''`        |


## Events

| Event    | Description                                                                                                                                                      | Type                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `change` | Emitted when the value is committed (blur / Enter).                                                                                                              | `CustomEvent<{ value: string; }>` |
| `input`  | Emitted on every keystroke; `detail.value` mirrors `target.value`. Kept native-named so `addEventListener('input')`, `onInput`, `@input` and `(input)` all work. | `CustomEvent<{ value: string; }>` |


## Methods

### `select() => Promise<void>`

Select all text.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Focus the native input.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part      | Description           |
| --------- | --------------------- |
| `"input"` | The native `<input>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
