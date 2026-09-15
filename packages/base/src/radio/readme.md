# art-radio



<!-- Auto Generated Below -->


## Overview

Radio item — used inside `<art-radio-group>`, which owns selection. The label is the
default slot: `<art-radio value="a">Option A</art-radio>` — clicking the text selects,
and the control is named by it (native `<label>`), so no wrapper markup is ever needed.

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

| Part        | Description                |
| ----------- | -------------------------- |
| `"control"` | The `role="radio"` button. |
| `"label"`   | The wrapping `<label>`.    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
