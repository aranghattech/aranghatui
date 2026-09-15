# art-combobox



<!-- Auto Generated Below -->


## Overview

Combobox — shadcn/ui parity. A text field that filters a list of `<art-combobox-item>`s as
the user types; single choice (the field shows the chosen label) or `multiple` (chips in
the field). Items live in the light DOM so they can be any template and carry a data object
in `item`. Rendered on the platform top layer. Form-associated.

## Properties

| Property              | Attribute          | Description                                                                                                                                         | Type                                                                                                                                                                 | Default          |
| --------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `disabled`            | `disabled`         |                                                                                                                                                     | `boolean`                                                                                                                                                            | `false`          |
| `filter`              | --                 | Custom match: return true to keep an item for the query. Defaults to a case-insensitive substring match on the item's text, `label` and `keywords`. | `((text: string, query: string, item: HTMLElement) => boolean) \| undefined`                                                                                         | `undefined`      |
| `hostAriaDescribedby` | `aria-describedby` |                                                                                                                                                     | `null \| string \| undefined`                                                                                                                                        | `undefined`      |
| `hostAriaLabel`       | `aria-label`       |                                                                                                                                                     | `null \| string \| undefined`                                                                                                                                        | `undefined`      |
| `hostAriaLabelledby`  | `aria-labelledby`  |                                                                                                                                                     | `null \| string \| undefined`                                                                                                                                        | `undefined`      |
| `invalid`             | `invalid`          |                                                                                                                                                     | `boolean`                                                                                                                                                            | `false`          |
| `multiple`            | `multiple`         | Select several items; they show as chips in the field.                                                                                              | `boolean`                                                                                                                                                            | `false`          |
| `name`                | `name`             |                                                                                                                                                     | `string \| undefined`                                                                                                                                                | `undefined`      |
| `open`                | `open`             |                                                                                                                                                     | `boolean`                                                                                                                                                            | `false`          |
| `placeholder`         | `placeholder`      |                                                                                                                                                     | `string \| undefined`                                                                                                                                                | `undefined`      |
| `placement`           | `placement`        | Preferred side of the list.                                                                                                                         | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |
| `required`            | `required`         |                                                                                                                                                     | `boolean`                                                                                                                                                            | `false`          |
| `shouldFilter`        | `should-filter`    | Turn off the built-in filter when the consumer filters the items itself (async search).                                                             | `boolean`                                                                                                                                                            | `true`           |
| `showClear`           | `show-clear`       | Show a clear button while something is selected.                                                                                                    | `boolean`                                                                                                                                                            | `false`          |
| `showTrigger`         | `show-trigger`     | Show the chevron button.                                                                                                                            | `boolean`                                                                                                                                                            | `true`           |
| `size`                | `size`             |                                                                                                                                                     | `"lg" \| "md" \| "sm"`                                                                                                                                               | `'md'`           |
| `value`               | `value`            | The chosen item's value; an array of values when `multiple`.                                                                                        | `string \| string[]`                                                                                                                                                 | `''`             |


## Events

| Event          | Description                                                                                                                                                              | Type                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `change`       | Emitted when the selection changes; `detail.value` (array when `multiple`), `detail.item` (the picked item's data; `detail.items` when `multiple`) and `detail.element`. | `CustomEvent<{ value: string \| string[]; item?: unknown; items?: unknown[] \| undefined; element?: HTMLElement \| undefined; }>` |
| `open-change`  |                                                                                                                                                                          | `CustomEvent<{ open: boolean; }>`                                                                                                 |
| `query-change` | Emitted as the user types; `detail.query`. Use it for async search with `should-filter="false"`.                                                                         | `CustomEvent<{ query: string; }>`                                                                                                 |


## Methods

### `setFocus() => Promise<void>`

Focus the text field.

#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
|           | `<art-combobox-item>`s, optionally inside `<art-combobox-group>`s. |
| `"empty"` | Shown when nothing matches (default: "No results found.").         |


## Shadow Parts

| Part        | Description                                         |
| ----------- | --------------------------------------------------- |
| `"chip"`    | A selected value in `multiple` mode.                |
| `"clear"`   | The clear button (`show-clear`).                    |
| `"content"` | The listbox panel.                                  |
| `"empty"`   | The empty state.                                    |
| `"field"`   | The bordered frame around chips, input and buttons. |
| `"input"`   | The text `<input>` (role="combobox").               |
| `"listbox"` |                                                     |
| `"trigger"` | The chevron button that opens the list.             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
