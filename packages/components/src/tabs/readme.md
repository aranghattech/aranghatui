# art-tabs



<!-- Auto Generated Below -->


## Overview

Tabs — shadcn/ui parity. `<art-tab>`s form the tab list (they assign themselves to the
`tab` slot), `<art-tab-panel>`s are the panels; the shared `value` selects one of each.
Tabs and panels are light-DOM siblings, so `aria-controls` / `aria-labelledby` can link them.

## Properties

| Property      | Attribute     | Description                                                                                      | Type                         | Default        |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------- |
| `activation`  | `activation`  | `automatic`: arrow keys select as they move. `manual`: arrows move focus, Enter / Space selects. | `"automatic" \| "manual"`    | `'automatic'`  |
| `orientation` | `orientation` |                                                                                                  | `"horizontal" \| "vertical"` | `'horizontal'` |
| `value`       | `value`       | Value of the selected tab.                                                                       | `string`                     | `''`           |
| `variant`     | `variant`     | `default`: filled list with a raised active tab. `line`: bare tabs with an underline.            | `"default" \| "line"`        | `'default'`    |


## Events

| Event          | Description                                          | Type                              |
| -------------- | ---------------------------------------------------- | --------------------------------- |
| `value-change` | Emitted when the user selects a tab; `detail.value`. | `CustomEvent<{ value: string; }>` |


## Slots

| Slot    | Description                                           |
| ------- | ----------------------------------------------------- |
|         | `<art-tab-panel value="…">` panels.                   |
| `"tab"` | `<art-tab value="…">` items (assigned automatically). |


## Shadow Parts

| Part     | Description                     |
| -------- | ------------------------------- |
| `"list"` | The `role="tablist"` container. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
