# art-radio



<!-- Auto Generated Below -->


## Overview

Radio item — a native `<input type="radio">` (ADR-0021) used inside `<art-radio-group>`,
which owns selection and keyboard navigation (native radio grouping does not cross shadow
roots). The label is the default slot, so no wrapper markup is needed.

## Properties

| Property             | Attribute         | Description                                             | Type                          | Default     |
| -------------------- | ----------------- | ------------------------------------------------------- | ----------------------------- | ----------- |
| `checked`            | `checked`         | Managed by the group.                                   | `boolean`                     | `false`     |
| `disabled`           | `disabled`        |                                                         | `boolean`                     | `false`     |
| `hostAriaLabel`      | `aria-label`      |                                                         | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby` | `aria-labelledby` |                                                         | `null \| string \| undefined` | `undefined` |
| `size`               | `size`            | Managed by the group.                                   | `"lg" \| "md" \| "sm"`        | `'md'`      |
| `value` _(required)_ | `value`           | Value reported by the group when this item is selected. | `string`                      | `undefined` |


## Slots

| Slot | Description |
| ---- | ----------- |
|      | Label text. |


## Shadow Parts

| Part        | Description                        |
| ----------- | ---------------------------------- |
| `"control"` | The native `<input type="radio">`. |
| `"label"`   | The wrapping `<label>`.            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
