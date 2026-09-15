# art-menu-sub



<!-- Auto Generated Below -->


## Overview

Dropdown Menu Sub — a submenu: an item in the `trigger` slot opens a nested `role="menu"`
beside it on hover, ArrowRight, Enter or Space; ArrowLeft or Escape closes it and returns
to the trigger.

## Properties

| Property | Attribute | Description | Type      | Default |
| -------- | --------- | ----------- | --------- | ------- |
| `open`   | `open`    |             | `boolean` | `false` |


## Events

| Event         | Description | Type                              |
| ------------- | ----------- | --------------------------------- |
| `open-change` |             | `CustomEvent<{ open: boolean; }>` |


## Methods

### `openSub() => Promise<void>`

Open and focus the first item (keyboard).

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description                                |
| ----------- | ------------------------------------------ |
|             | The submenu's items.                       |
| `"trigger"` | An `art-menu-item` that opens the submenu. |


## Shadow Parts

| Part        | Description                     |
| ----------- | ------------------------------- |
| `"content"` | The nested `role="menu"` panel. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
