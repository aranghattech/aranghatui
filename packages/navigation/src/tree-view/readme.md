# art-tree-view



<!-- Auto Generated Below -->


## Overview

Tree View — a hierarchical list of `art-tree-item`s (files, pages, an outline) following the
WAI-ARIA tree pattern: one tab stop, arrows move and expand / collapse, Home / End, `*` opens
the siblings, typing jumps, Enter / Space or a click selects. Single selection: the selected
item's `value` is the tree's `value`.

## Properties

| Property | Attribute | Description                   | Type     | Default  |
| -------- | --------- | ----------------------------- | -------- | -------- |
| `label`  | `label`   | Accessible name of the tree.  | `string` | `'Tree'` |
| `value`  | `value`   | `value` of the selected item. | `string` | `''`     |


## Events

| Event          | Description                                            | Type                              |
| -------------- | ------------------------------------------------------ | --------------------------------- |
| `value-change` | Emitted when the user selects an item; `detail.value`. | `CustomEvent<{ value: string; }>` |


## Slots

| Slot | Description                 |
| ---- | --------------------------- |
|      | Top-level `art-tree-item`s. |


## Shadow Parts

| Part     | Description             |
| -------- | ----------------------- |
| `"tree"` | The `role="tree"` list. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
