# art-textarea



<!-- Auto Generated Below -->


## Overview

Textarea — shadcn/ui parity. Multi-line text field; grows with content (`field-sizing: content`),
form-associated, `input` / `change` emitted from the host with `detail.value` (§3a).

## Properties

| Property              | Attribute          | Description                                                    | Type                          | Default     |
| --------------------- | ------------------ | -------------------------------------------------------------- | ----------------------------- | ----------- |
| `autocomplete`        | `autocomplete`     |                                                                | `string \| undefined`         | `undefined` |
| `disabled`            | `disabled`         |                                                                | `boolean`                     | `false`     |
| `hostAriaDescribedby` | `aria-describedby` |                                                                | `null \| string \| undefined` | `undefined` |
| `hostAriaLabel`       | `aria-label`       |                                                                | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby`  | `aria-labelledby`  |                                                                | `null \| string \| undefined` | `undefined` |
| `invalid`             | `invalid`          |                                                                | `boolean`                     | `false`     |
| `maxlength`           | `maxlength`        |                                                                | `number \| undefined`         | `undefined` |
| `minlength`           | `minlength`        |                                                                | `number \| undefined`         | `undefined` |
| `name`                | `name`             |                                                                | `string \| undefined`         | `undefined` |
| `placeholder`         | `placeholder`      |                                                                | `string \| undefined`         | `undefined` |
| `readonly`            | `readonly`         |                                                                | `boolean`                     | `false`     |
| `required`            | `required`         |                                                                | `boolean`                     | `false`     |
| `rows`                | `rows`             | Initial visible rows; the field still grows with content.      | `number \| undefined`         | `undefined` |
| `size`                | `size`             | Density; changes inline padding only (height follows content). | `"lg" \| "md" \| "sm"`        | `'md'`      |
| `value`               | `value`            |                                                                | `string`                      | `''`        |


## Events

| Event    | Description | Type                              |
| -------- | ----------- | --------------------------------- |
| `change` |             | `CustomEvent<{ value: string; }>` |
| `input`  |             | `CustomEvent<{ value: string; }>` |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part         | Description              |
| ------------ | ------------------------ |
| `"textarea"` | The native `<textarea>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
