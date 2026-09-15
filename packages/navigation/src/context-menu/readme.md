# art-context-menu



<!-- Auto Generated Below -->


## Overview

Context Menu — shadcn/ui parity. Right-click (or Shift+F10 / the Menu key) anywhere on the
wrapped content opens a menu at the pointer, on the platform top layer. Same items as
Dropdown Menu: `art-menu-item`, `-label`, `-separator`, `-group`, `-radio-group`, `-sub`.

## Properties

| Property   | Attribute  | Description                  | Type      | Default          |
| ---------- | ---------- | ---------------------------- | --------- | ---------------- |
| `disabled` | `disabled` |                              | `boolean` | `false`          |
| `label`    | `label`    | Accessible name of the menu. | `string`  | `'Context menu'` |
| `open`     | `open`     |                              | `boolean` | `false`          |


## Events

| Event         | Description | Type                              |
| ------------- | ----------- | --------------------------------- |
| `open-change` |             | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot     | Description                                        |
| -------- | -------------------------------------------------- |
|          | The area that owns the context menu (any content). |
| `"menu"` | The menu's items.                                  |


## Shadow Parts

| Part        | Description              |
| ----------- | ------------------------ |
| `"content"` | The `role="menu"` panel. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
