# art-checkbox



<!-- Auto Generated Below -->


## Overview

Checkbox — shadcn/ui parity on a native `<input type="checkbox">` (ADR-0021: native controls,
styled). Checked / indeterminate states, form-associated (submits `value` when checked).
`change` is emitted from the host with `detail.checked`; Vue `v-model:checked` and Angular
`ngModel` work out of the box.

## Properties

| Property              | Attribute          | Description                                                                           | Type                          | Default     |
| --------------------- | ------------------ | ------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `checked`             | `checked`          |                                                                                       | `boolean`                     | `false`     |
| `disabled`            | `disabled`         |                                                                                       | `boolean`                     | `false`     |
| `hostAriaDescribedby` | `aria-describedby` |                                                                                       | `null \| string \| undefined` | `undefined` |
| `hostAriaLabel`       | `aria-label`       |                                                                                       | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby`  | `aria-labelledby`  |                                                                                       | `null \| string \| undefined` | `undefined` |
| `indeterminate`       | `indeterminate`    | Mixed state (e.g. "select all" with a partial selection). Cleared by the next toggle. | `boolean`                     | `false`     |
| `invalid`             | `invalid`          |                                                                                       | `boolean`                     | `false`     |
| `name`                | `name`             |                                                                                       | `string \| undefined`         | `undefined` |
| `required`            | `required`         |                                                                                       | `boolean`                     | `false`     |
| `size`                | `size`             |                                                                                       | `"lg" \| "md" \| "sm"`        | `'md'`      |
| `value`               | `value`            | Submitted with the form when checked.                                                 | `string`                      | `'on'`      |


## Events

| Event    | Description                                                             | Type                                 |
| -------- | ----------------------------------------------------------------------- | ------------------------------------ |
| `change` | Emitted after a user toggle; `detail.checked` mirrors `target.checked`. | `CustomEvent<{ checked: boolean; }>` |


## Shadow Parts

| Part        | Description                           |
| ----------- | ------------------------------------- |
| `"control"` | The native `<input type="checkbox">`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
