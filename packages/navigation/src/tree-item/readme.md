# art-tree-item



<!-- Auto Generated Below -->


## Overview

Tree Item — a node of an `art-tree-view`: `label`, optional `icon`, and nested
`art-tree-item`s in the default slot (shown while `expanded`). The host is the
`role="treeitem"` element (focus, `aria-expanded`, `aria-selected`, `aria-level`); only the
tree's current item is a tab stop.

## Properties

| Property   | Attribute  | Description                                                | Type      | Default |
| ---------- | ---------- | ---------------------------------------------------------- | --------- | ------- |
| `disabled` | `disabled` |                                                            | `boolean` | `false` |
| `expanded` | `expanded` |                                                            | `boolean` | `false` |
| `label`    | `label`    |                                                            | `string`  | `''`    |
| `value`    | `value`    | Value reported by `select` and held by the tree's `value`. | `string`  | `''`    |


## Events

| Event      | Description                                                               | Type                              |
| ---------- | ------------------------------------------------------------------------- | --------------------------------- |
| `collapse` | Emitted when `expanded` turns off; `detail.value`.                        | `CustomEvent<{ value: string; }>` |
| `expand`   | Emitted when `expanded` turns on; `detail.value`.                         | `CustomEvent<{ value: string; }>` |
| `select`   | Emitted when the item is activated (click, Enter, Space); `detail.value`. | `CustomEvent<{ value: string; }>` |


## Slots

| Slot     | Description               |
| -------- | ------------------------- |
|          | Child `art-tree-item`s.   |
| `"icon"` | An icon before the label. |


## Shadow Parts

| Part        | Description                                   |
| ----------- | --------------------------------------------- |
| `"chevron"` | The expand / collapse chevron (parents only). |
| `"group"`   | The `role="group"` list of children.          |
| `"label"`   | The label.                                    |
| `"row"`     | The clickable row.                            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
