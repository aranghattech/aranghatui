# art-mega-menu-link



<!-- Auto Generated Below -->


## Overview

Mega Menu Link — one destination in a group: an optional leading icon, a title and an optional
line of description, tinted when `active`.

## Properties

| Property | Attribute | Description                                     | Type                  | Default     |
| -------- | --------- | ----------------------------------------------- | --------------------- | ----------- |
| `active` | `active`  | Marks the current page (`aria-current="page"`). | `boolean`             | `false`     |
| `href`   | `href`    | Destination.                                    | `string \| undefined` | `undefined` |
| `rel`    | `rel`     | Link rel.                                       | `string \| undefined` | `undefined` |
| `target` | `target`  | Link target.                                    | `string \| undefined` | `undefined` |


## Slots

| Slot            | Description                                           |
| --------------- | ----------------------------------------------------- |
|                 | The title.                                            |
| `"description"` | A short line under the title.                         |
| `"icon"`        | The leading icon (`<art-icon>` or an inline `<svg>`). |


## Shadow Parts

| Part     | Description   |
| -------- | ------------- |
| `"icon"` | The icon box. |
| `"link"` | The `<a>`.    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
