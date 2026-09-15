# art-breadcrumb-item



<!-- Auto Generated Below -->


## Overview

Breadcrumb Item — one step of an `<art-breadcrumb>`: a link (`<a>` in the default slot),
the current page (`current`), or an ellipsis for collapsed steps. The separator after it
is drawn here so the list stays a plain sequence of items.

## Properties

| Property   | Attribute  | Description                                                                  | Type      | Default |
| ---------- | ---------- | ---------------------------------------------------------------------------- | --------- | ------- |
| `current`  | `current`  | The page being viewed: rendered as text with `aria-current="page"`.          | `boolean` | `false` |
| `ellipsis` | `ellipsis` | Stands for collapsed steps ("…"); put a menu around it for the hidden pages. | `boolean` | `false` |


## Slots

| Slot | Description       |
| ---- | ----------------- |
|      | The link or text. |


## Shadow Parts

| Part          | Description                   |
| ------------- | ----------------------------- |
| `"ellipsis"`  | The collapsed-steps glyph.    |
| `"separator"` | The separator after the item. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
