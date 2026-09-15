# art-select-item



<!-- Auto Generated Below -->


## Overview

Select Item — one option of an `<art-select>`. Any content (text, an avatar with name and
email); `item` carries the data object handed back in the select's `change` event.

## Properties

| Property   | Attribute  | Description                                                                                       | Type                  | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` |                                                                                                   | `boolean`             | `false`     |
| `item`     | --         | Data object for this option; reported as `detail.item` on selection.                              | `unknown`             | `undefined` |
| `label`    | `label`    | Plain-text label: shown in the trigger instead of a copy of the content, and used for type-ahead. | `string \| undefined` | `undefined` |
| `selected` | `selected` | Set by the select.                                                                                | `boolean`             | `false`     |
| `value`    | `value`    | The option's value (what the select's `value` becomes).                                           | `string`              | `''`        |


## Slots

| Slot | Description         |
| ---- | ------------------- |
|      | The option content. |


## Shadow Parts

| Part      | Description                                 |
| --------- | ------------------------------------------- |
| `"check"` | The checkmark shown on the selected option. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
