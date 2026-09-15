# art-field



<!-- Auto Generated Below -->


## Overview

Field — shadcn/ui parity. Wires a label, a control, a description and an error message
together: the label names the control, description and error become its accessible
description, an error (or `invalid`) marks the control invalid, and a disabled control dims
the label. Stack fields with `<art-field-group>`; group related fields with `<art-field-set>`.

## Properties

| Property      | Attribute     | Description                                                                                                           | Type                         | Default      |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| `invalid`     | `invalid`     | Marks the control invalid; set automatically while the `error` slot has content.                                      | `boolean`                    | `false`      |
| `orientation` | `orientation` | `vertical`: label above the control. `horizontal`: control first, label and description beside it (checkbox, switch). | `"horizontal" \| "vertical"` | `'vertical'` |


## Slots

| Slot            | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
|                 | The control (`art-input`, `art-checkbox`, `art-radio-group`, … or an `art-input-group`). |
| `"description"` | Help text (`<p slot="description">`).                                                    |
| `"error"`       | Error text (`<p slot="error">`); announced as an alert and marks the control invalid.    |
| `"label"`       | `<art-label>` (its `for` is filled in when omitted).                                     |


## Shadow Parts

| Part      | Description         |
| --------- | ------------------- |
| `"field"` | The layout wrapper. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
