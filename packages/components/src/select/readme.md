# art-select



<!-- Auto Generated Below -->


## Overview

Select — shadcn/ui parity. A trigger styled like Native Select and a listbox on the platform
top layer, filled with `<art-select-item>`s from the light DOM — so an item can be any
template (an avatar with a name and email) and carry a data object in `item`. The trigger
shows a copy of the chosen item's content (or its `label`). Form-associated.

## Properties

| Property              | Attribute          | Description                    | Type                                                                                                                                                                 | Default          |
| --------------------- | ------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `disabled`            | `disabled`         |                                | `boolean`                                                                                                                                                            | `false`          |
| `hostAriaDescribedby` | `aria-describedby` |                                | `null \| string \| undefined`                                                                                                                                        | `undefined`      |
| `hostAriaLabel`       | `aria-label`       |                                | `null \| string \| undefined`                                                                                                                                        | `undefined`      |
| `hostAriaLabelledby`  | `aria-labelledby`  |                                | `null \| string \| undefined`                                                                                                                                        | `undefined`      |
| `invalid`             | `invalid`          |                                | `boolean`                                                                                                                                                            | `false`          |
| `name`                | `name`             |                                | `string \| undefined`                                                                                                                                                | `undefined`      |
| `open`                | `open`             |                                | `boolean`                                                                                                                                                            | `false`          |
| `placeholder`         | `placeholder`      |                                | `string \| undefined`                                                                                                                                                | `undefined`      |
| `placement`           | `placement`        | Preferred side of the listbox. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |
| `required`            | `required`         |                                | `boolean`                                                                                                                                                            | `false`          |
| `size`                | `size`             |                                | `"lg" \| "md" \| "sm"`                                                                                                                                               | `'md'`           |
| `value`               | `value`            |                                | `string`                                                                                                                                                             | `''`             |


## Events

| Event         | Description                                                                                                       | Type                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `change`      | Emitted when the user picks an item; `detail.value`, `detail.item` (the item's data object) and `detail.element`. | `CustomEvent<{ value: string; item?: unknown; element: HTMLElement; }>` |
| `open-change` |                                                                                                                   | `CustomEvent<{ open: boolean; }>`                                       |


## Methods

### `setFocus() => Promise<void>`

Focus the trigger.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                                        |
| ---- | ---------------------------------------------------------------------------------- |
|      | `<art-select-item value="…">`s, optionally inside `<art-select-group label="…">`s. |


## Shadow Parts

| Part        | Description                       |
| ----------- | --------------------------------- |
| `"content"` | The listbox panel.                |
| `"listbox"` |                                   |
| `"trigger"` | The `<button>` (role="combobox"). |
| `"value"`   | The trigger's content area.       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
