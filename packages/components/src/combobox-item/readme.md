# art-combobox-item



<!-- Auto Generated Below -->


## Overview

Combobox Item — one option of an `<art-combobox>`. Any content; `item` carries the data
object handed back in the combobox's `change` event.

## Properties

| Property   | Attribute  | Description                                                                                                   | Type                  | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` |                                                                                                               | `boolean`             | `false`     |
| `item`     | --         | Data object for this option; reported as `detail.item`.                                                       | `unknown`             | `undefined` |
| `keywords` | `keywords` | Extra words the filter should match.                                                                          | `string \| undefined` | `undefined` |
| `label`    | `label`    | Plain-text label shown in the field when chosen (defaults to the content's text); also matched by the filter. | `string \| undefined` | `undefined` |
| `selected` | `selected` | Set by the combobox.                                                                                          | `boolean`             | `false`     |
| `value`    | `value`    | The option's value.                                                                                           | `string`              | `''`        |


## Slots

| Slot | Description         |
| ---- | ------------------- |
|      | The option content. |


## Shadow Parts

| Part      | Description                               |
| --------- | ----------------------------------------- |
| `"check"` | The checkmark shown on a selected option. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
