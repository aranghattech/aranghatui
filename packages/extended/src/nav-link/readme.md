# art-nav-link



<!-- Auto Generated Below -->


## Overview

One destination in the panel: a leading icon, a label, and an optional badge for work that is
not shipped yet. While the panel is collapsed only the icon shows, and the label moves into a
tooltip — the same treatment the rail's items get.

## Properties

| Property    | Attribute   | Description                                                                              | Type                  | Default     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `active`    | `active`    | Marks the current page (`aria-current="page"`).                                          | `boolean`             | `false`     |
| `badge`     | `badge`     | Trailing badge — "Soon" for a destination that is not live yet.                          | `string \| undefined` | `undefined` |
| `collapsed` | `collapsed` | Set by the enclosing `art-nav-section` when the panel collapses — not something you set. | `boolean`             | `false`     |
| `disabled`  | `disabled`  | Disabled: no interaction, no events. Pair it with `badge` to say why.                    | `boolean`             | `false`     |
| `href`      | `href`      | Render as a link.                                                                        | `string \| undefined` | `undefined` |
| `rel`       | `rel`       | Link rel (only with `href`).                                                             | `string \| undefined` | `undefined` |
| `target`    | `target`    | Link target (only with `href`).                                                          | `string \| undefined` | `undefined` |


## Slots

| Slot     | Description       |
| -------- | ----------------- |
|          | The label.        |
| `"icon"` | The leading icon. |


## Shadow Parts

| Part        | Description                                         |
| ----------- | --------------------------------------------------- |
| `"badge"`   | The trailing badge.                                 |
| `"control"` | The `<a>`, or the `<button>` when no `href` is set. |
| `"tooltip"` | The label shown beside the icon while collapsed.    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
