# art-item



<!-- Auto Generated Below -->


## Overview

Item — shadcn/ui parity. A flexible row: media (icon or image), title, description and
actions, with optional header and footer rows. Renders as a link when `href` is set. Stack
items in `<art-item-group>` (a list) with `<art-separator>`s between them.

## Properties

| Property  | Attribute | Description                  | Type                                | Default     |
| --------- | --------- | ---------------------------- | ----------------------------------- | ----------- |
| `href`    | `href`    | Renders the row as an `<a>`. | `string \| undefined`               | `undefined` |
| `rel`     | `rel`     |                              | `string \| undefined`               | `undefined` |
| `size`    | `size`    |                              | `"md" \| "sm"`                      | `'md'`      |
| `target`  | `target`  |                              | `string \| undefined`               | `undefined` |
| `variant` | `variant` |                              | `"default" \| "muted" \| "outline"` | `'default'` |


## Slots

| Slot            | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| `"actions"`     | Buttons at the end.                                                    |
| `"description"` | Secondary text (clamped to two lines).                                 |
| `"footer"`      | A full-width row below.                                                |
| `"header"`      | A full-width row above.                                                |
| `"media"`       | `<art-icon slot="media">` (boxed) or `<img slot="media">` (thumbnail). |
| `"title"`       | The title.                                                             |


## Shadow Parts

| Part        | Description                                    |
| ----------- | ---------------------------------------------- |
| `"content"` | Title + description column.                    |
| `"item"`    | The row (`<div>` or `<a>` when `href` is set). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
