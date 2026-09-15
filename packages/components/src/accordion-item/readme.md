# art-accordion-item



<!-- Auto Generated Below -->


## Overview

Accordion Item — one section of an `<art-accordion>`: a native `<details>` whose `<summary>`
is the trigger (with a chevron) and whose content is slotted.

## Properties

| Property   | Attribute  | Description                                     | Type      | Default |
| ---------- | ---------- | ----------------------------------------------- | --------- | ------- |
| `disabled` | `disabled` |                                                 | `boolean` | `false` |
| `open`     | `open`     |                                                 | `boolean` | `false` |
| `value`    | `value`    | Identifies the item in the accordion's `value`. | `string`  | `''`    |


## Events

| Event         | Description                                                                                 | Type                              |
| ------------- | ------------------------------------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user toggles the item; the accordion swallows it and emits `value-change`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot        | Description          |
| ----------- | -------------------- |
|             | The section content. |
| `"trigger"` | The section title.   |


## Shadow Parts

| Part        | Description             |
| ----------- | ----------------------- |
| `"chevron"` |                         |
| `"content"` | The content wrapper.    |
| `"details"` | The native `<details>`. |
| `"trigger"` | The native `<summary>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
