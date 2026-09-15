# art-menubar-menu



<!-- Auto Generated Below -->


## Overview

Menubar Menu — one menu of an `<art-menubar>`: the trigger (`label`) and its items.

## Properties

| Property   | Attribute  | Description   | Type      | Default |
| ---------- | ---------- | ------------- | --------- | ------- |
| `disabled` | `disabled` |               | `boolean` | `false` |
| `label`    | `label`    | Trigger text. | `string`  | `''`    |
| `open`     | `open`     |               | `boolean` | `false` |


## Events

| Event          | Description                                       | Type                              |
| -------------- | ------------------------------------------------- | --------------------------------- |
| `menubar-open` | Internal: tells the bar to close its other menus. | `CustomEvent<void>`               |
| `open-change`  |                                                   | `CustomEvent<{ open: boolean; }>` |


## Methods

### `setOpen(open: boolean, byKeyboard?: boolean) => Promise<void>`

Open or close (the bar calls it to switch menus).

#### Parameters

| Name         | Type      | Description |
| ------------ | --------- | ----------- |
| `open`       | `boolean` |             |
| `byKeyboard` | `boolean` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                                         |
| ---- | ----------------------------------------------------------------------------------- |
|      | `art-menu-item`s, `-label`s, `-separator`s, `-group`s, `-radio-group`s and `-sub`s. |


## Shadow Parts

| Part        | Description                                        |
| ----------- | -------------------------------------------------- |
| `"content"` | The `role="menu"` panel.                           |
| `"trigger"` | The trigger button (`role="menuitem"` in the bar). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
