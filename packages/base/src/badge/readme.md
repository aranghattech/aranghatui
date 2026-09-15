# art-badge



<!-- Auto Generated Below -->


## Overview

Badge — shadcn/ui parity. A small status label; renders as a link when `href` is set.
Every variant keeps the same border box so filled and outline badges align.

## Properties

| Property  | Attribute | Description                             | Type                                                     | Default     |
| --------- | --------- | --------------------------------------- | -------------------------------------------------------- | ----------- |
| `href`    | `href`    | Renders an `<a>` instead of a `<span>`. | `string \| undefined`                                    | `undefined` |
| `rel`     | `rel`     |                                         | `string \| undefined`                                    | `undefined` |
| `target`  | `target`  |                                         | `string \| undefined`                                    | `undefined` |
| `variant` | `variant` |                                         | `"default" \| "destructive" \| "outline" \| "secondary"` | `'default'` |


## Slots

| Slot | Description                                                                                |
| ---- | ------------------------------------------------------------------------------------------ |
|      | Label text; an `<art-icon>` or `<svg>` before or after the text takes the small icon size. |


## Shadow Parts

| Part      | Description                                 |
| --------- | ------------------------------------------- |
| `"badge"` | The `<span>` (or `<a>` when `href` is set). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
