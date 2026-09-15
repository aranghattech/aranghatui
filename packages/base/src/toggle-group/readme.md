# art-toggle-group



<!-- Auto Generated Below -->


## Overview

Toggle Group — shadcn/ui parity. A set of `<art-toggle>` items with a shared `value`
(`type="single"`: one or none; `type="multiple"`: array). The group applies `variant`,
`size` and `disabled` to its items, joins their edges, and moves focus with the arrows.

## Properties

| Property   | Attribute  | Description                                                               | Type                     | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------- | ------------------------ | ----------- |
| `disabled` | `disabled` |                                                                           | `boolean`                | `false`     |
| `size`     | `size`     |                                                                           | `"lg" \| "md" \| "sm"`   | `'md'`      |
| `type`     | `type`     | `single`: one pressed item (or none). `multiple`: any number.             | `"multiple" \| "single"` | `'single'`  |
| `value`    | `value`    | Pressed value(s). As an attribute, `multiple` values are comma-separated. | `string \| string[]`     | `''`        |
| `variant`  | `variant`  |                                                                           | `"default" \| "outline"` | `'default'` |


## Events

| Event    | Description                                                                                  | Type                                          |
| -------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `change` | Emitted after a user toggle; `detail.value` is a string (`single`) or string[] (`multiple`). | `CustomEvent<{ value: string \| string[]; }>` |


## Slots

| Slot | Description                     |
| ---- | ------------------------------- |
|      | `<art-toggle value="…">` items. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
