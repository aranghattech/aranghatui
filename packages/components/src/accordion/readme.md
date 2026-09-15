# art-accordion



<!-- Auto Generated Below -->


## Overview

Accordion — shadcn/ui parity. A stack of `<art-accordion-item>`s, each a native `<details>`.
`type="single"` keeps one item open (the accordion closes the others: the native `name`
grouping only works within one tree, and each item's `<details>` sits in its own shadow
root); `type="multiple"` lets any number open. Arrow keys move between the triggers.

## Properties

| Property   | Attribute  | Description                                                            | Type                     | Default    |
| ---------- | ---------- | ---------------------------------------------------------------------- | ------------------------ | ---------- |
| `disabled` | `disabled` |                                                                        | `boolean`                | `false`    |
| `type`     | `type`     | `single`: one item open at a time. `multiple`: any number.             | `"multiple" \| "single"` | `'single'` |
| `value`    | `value`    | Open value(s). As an attribute, `multiple` values are comma-separated. | `string \| string[]`     | `''`       |


## Events

| Event          | Description                                                                                  | Type                                          |
| -------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `value-change` | Emitted after a user toggle; `detail.value` is a string (`single`) or string[] (`multiple`). | `CustomEvent<{ value: string \| string[]; }>` |


## Slots

| Slot | Description                             |
| ---- | --------------------------------------- |
|      | `<art-accordion-item value="…">` items. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
