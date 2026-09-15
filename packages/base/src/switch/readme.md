# art-switch



<!-- Auto Generated Below -->


## Overview

Switch — shadcn/ui parity. A `role="switch"` toggle, form-associated (submits `value` when on).
`change` is emitted from the host with `detail.checked`.

## Properties

| Property              | Attribute          | Description | Type                          | Default     |
| --------------------- | ------------------ | ----------- | ----------------------------- | ----------- |
| `checked`             | `checked`          |             | `boolean`                     | `false`     |
| `disabled`            | `disabled`         |             | `boolean`                     | `false`     |
| `hostAriaDescribedby` | `aria-describedby` |             | `null \| string \| undefined` | `undefined` |
| `hostAriaLabel`       | `aria-label`       |             | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby`  | `aria-labelledby`  |             | `null \| string \| undefined` | `undefined` |
| `invalid`             | `invalid`          |             | `boolean`                     | `false`     |
| `name`                | `name`             |             | `string \| undefined`         | `undefined` |
| `required`            | `required`         |             | `boolean`                     | `false`     |
| `size`                | `size`             |             | `"lg" \| "md" \| "sm"`        | `'md'`      |
| `value`               | `value`            |             | `string`                      | `'on'`      |


## Events

| Event    | Description                                                             | Type                                 |
| -------- | ----------------------------------------------------------------------- | ------------------------------------ |
| `change` | Emitted after a user toggle; `detail.checked` mirrors `target.checked`. | `CustomEvent<{ checked: boolean; }>` |


## Shadow Parts

| Part        | Description                         |
| ----------- | ----------------------------------- |
| `"control"` | The `role="switch"` button (track). |
| `"thumb"`   | The thumb.                          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
