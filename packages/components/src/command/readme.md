# art-command



<!-- Auto Generated Below -->


## Overview

Command — shadcn/ui parity. A command palette body: a search field over a filtered list of
`<art-command-item>`s (optionally in `<art-command-group>`s) with an empty state. Typing
filters, the arrows move the highlight, Enter runs the highlighted item. No dialog of its
own (ADR-0019): compose it with Dialog for a ⌘K palette.

## Properties

| Property       | Attribute       | Description                                                                                                                                | Type                                                                         | Default                       |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | ----------------------------- |
| `filter`       | --              | Custom match: return true to keep an item for the query. Defaults to a case-insensitive substring match on the item's text and `keywords`. | `((text: string, query: string, item: HTMLElement) => boolean) \| undefined` | `undefined`                   |
| `label`        | `label`         | Accessible name of the list.                                                                                                               | `string`                                                                     | `'Suggestions'`               |
| `placeholder`  | `placeholder`   |                                                                                                                                            | `string`                                                                     | `'Type a command or search…'` |
| `query`        | `query`         | Current search text.                                                                                                                       | `string`                                                                     | `''`                          |
| `shouldFilter` | `should-filter` | Turn off the built-in filter when the consumer filters the items itself.                                                                   | `boolean`                                                                    | `true`                        |


## Events

| Event          | Description                                                                                    | Type                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `query-change` | Emitted as the search text changes; `detail.query`.                                            | `CustomEvent<{ query: string; }>`                                       |
| `select`       | Emitted when an item is run (Enter or click); `detail.value`, `detail.item`, `detail.element`. | `CustomEvent<{ value: string; item?: unknown; element: HTMLElement; }>` |


## Methods

### `setFocus() => Promise<void>`

Focus the search field.

#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description                                                |
| --------- | ---------------------------------------------------------- |
|           | `<art-command-item>`s and `<art-command-group>`s.          |
| `"empty"` | Shown when nothing matches (default: "No results found."). |


## Shadow Parts

| Part        | Description                     |
| ----------- | ------------------------------- |
| `"command"` |                                 |
| `"empty"`   | The empty state.                |
| `"input"`   | The search `<input>`.           |
| `"list"`    | The `role="listbox"` container. |
| `"search"`  |                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
