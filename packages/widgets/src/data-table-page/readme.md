# art-data-table-page



<!-- Auto Generated Below -->


## Overview

Data Table Page — the chrome around a data table (shadcn "tasks" example): page heading and
actions, a toolbar with the filter field, faceted filters, a reset and the view menu, the
table itself, and a footer with the selection count, rows-per-page, the page position and
first / previous / next / last. The page owns no data: drive it from `createTableState`
(`@aranghat/components`) — feed `selected`, `total`, `page`, `page-count`, `page-size` from the
snapshot and listen to `filter-change`, `page-change`, `page-size-change`.

## Properties

| Property            | Attribute            | Description                                                                | Type      | Default                                         |
| ------------------- | -------------------- | -------------------------------------------------------------------------- | --------- | ----------------------------------------------- |
| `description`       | `description`        |                                                                            | `string`  | `"Here's a list of your tasks for this month."` |
| `filter`            | `filter`             | Current filter text (mirror it from your state to keep the field in sync). | `string`  | `''`                                            |
| `filterPlaceholder` | `filter-placeholder` |                                                                            | `string`  | `'Filter…'`                                     |
| `heading`           | `heading`            |                                                                            | `string`  | `'Welcome back!'`                               |
| `hideFilter`        | `hide-filter`        | Drop the filter field (keep `filters` / `view` slots).                     | `boolean` | `false`                                         |
| `page`              | `page`               |                                                                            | `number`  | `1`                                             |
| `pageCount`         | `page-count`         |                                                                            | `number`  | `1`                                             |
| `pageSize`          | `page-size`          |                                                                            | `number`  | `10`                                            |
| `pageSizes`         | `page-sizes`         | Choices for rows per page, comma-separated.                                | `string`  | `'10,20,30,40,50'`                              |
| `selected`          | `selected`           | Selected rows (over every page).                                           | `number`  | `0`                                             |
| `total`             | `total`              | Rows after filtering.                                                      | `number`  | `0`                                             |


## Events

| Event              | Description                                   | Type                                 |
| ------------------ | --------------------------------------------- | ------------------------------------ |
| `filter-change`    | The filter field changed; `detail.value`.     | `CustomEvent<{ value: string; }>`    |
| `page-change`      | A pagination control was used; `detail.page`. | `CustomEvent<{ page: number; }>`     |
| `page-size-change` | Rows per page changed; `detail.pageSize`.     | `CustomEvent<{ pageSize: number; }>` |


## Slots

| Slot        | Description                                        |
| ----------- | -------------------------------------------------- |
|             | The `art-table`.                                   |
| `"actions"` | Buttons beside the page heading.                   |
| `"filters"` | Faceted filter buttons after the filter field.     |
| `"view"`    | The columns / view menu at the end of the toolbar. |


## Shadow Parts

| Part        | Description                       |
| ----------- | --------------------------------- |
| `"filter"`  | The filter field.                 |
| `"footer"`  | The pagination footer.            |
| `"header"`  | Heading, description and actions. |
| `"reset"`   | The reset button.                 |
| `"table"`   | The table wrapper.                |
| `"toolbar"` | The toolbar.                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
