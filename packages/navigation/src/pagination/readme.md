# art-pagination



<!-- Auto Generated Below -->


## Overview

Pagination — shadcn/ui parity. Previous / next, page numbers around the current page with
ellipses, the active page as an outline button. Buttons by default (`page-change`), links
with `href-template` (`?page={page}`) for crawlable pages.

## Properties

| Property        | Attribute        | Description                                                                  | Type                  | Default        |
| --------------- | ---------------- | ---------------------------------------------------------------------------- | --------------------- | -------------- |
| `boundaries`    | `boundaries`     | Pages always shown at the start and end.                                     | `number`              | `1`            |
| `hrefTemplate`  | `href-template`  | Render links instead of buttons: `{page}` is replaced (e.g. `?page={page}`). | `string \| undefined` | `undefined`    |
| `label`         | `label`          | Accessible name of the landmark.                                             | `string`              | `'pagination'` |
| `nextLabel`     | `next-label`     |                                                                              | `string`              | `'Next'`       |
| `page`          | `page`           | Current page, 1-based.                                                       | `number`              | `1`            |
| `previousLabel` | `previous-label` |                                                                              | `string`              | `'Previous'`   |
| `siblings`      | `siblings`       | Pages shown on each side of the current one.                                 | `number`              | `1`            |
| `total`         | `total`          | Number of pages.                                                             | `number`              | `1`            |


## Events

| Event         | Description                                        | Type                             |
| ------------- | -------------------------------------------------- | -------------------------------- |
| `page-change` | Emitted when the user picks a page; `detail.page`. | `CustomEvent<{ page: number; }>` |


## Shadow Parts

| Part         | Description           |
| ------------ | --------------------- |
| `"ellipsis"` | A gap.                |
| `"list"`     | The `<ul>`.           |
| `"next"`     | The next control.     |
| `"page"`     | A page control.       |
| `"previous"` | The previous control. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
