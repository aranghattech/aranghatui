# art-native-select



<!-- Auto Generated Below -->


## Overview

Native Select — shadcn/ui parity. A styled native `<select>`; write plain `<option>` /
`<optgroup>` children and they are mirrored into the control (and kept in sync).
Form-associated; `change` (and `input`) emitted from the host with `detail.value`.

## Properties

| Property              | Attribute          | Description | Type                          | Default     |
| --------------------- | ------------------ | ----------- | ----------------------------- | ----------- |
| `disabled`            | `disabled`         |             | `boolean`                     | `false`     |
| `hostAriaDescribedby` | `aria-describedby` |             | `null \| string \| undefined` | `undefined` |
| `hostAriaLabel`       | `aria-label`       |             | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby`  | `aria-labelledby`  |             | `null \| string \| undefined` | `undefined` |
| `invalid`             | `invalid`          |             | `boolean`                     | `false`     |
| `name`                | `name`             |             | `string \| undefined`         | `undefined` |
| `required`            | `required`         |             | `boolean`                     | `false`     |
| `size`                | `size`             |             | `"lg" \| "md" \| "sm"`        | `'md'`      |
| `value`               | `value`            |             | `string`                      | `''`        |


## Events

| Event    | Description | Type                              |
| -------- | ----------- | --------------------------------- |
| `change` |             | `CustomEvent<{ value: string; }>` |
| `input`  |             | `CustomEvent<{ value: string; }>` |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | `<option>` and `<optgroup>` elements. |


## Shadow Parts

| Part       | Description            |
| ---------- | ---------------------- |
| `"select"` | The native `<select>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
