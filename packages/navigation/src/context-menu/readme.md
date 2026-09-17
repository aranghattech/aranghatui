# art-context-menu



<!-- Auto Generated Below -->


## Overview

Context Menu — shadcn/ui parity. Right-click (or Shift+F10 / the Menu key) anywhere on the
wrapped content opens a menu at the pointer, on the platform top layer. Same items as
Dropdown Menu: `art-menu-item`, `-label`, `-separator`, `-group`, `-radio-group`, `-sub`.

## Properties

| Property       | Attribute       | Description                                                                                                                                                                           | Type                  | Default          |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------- |
| `disabled`     | `disabled`      |                                                                                                                                                                                       | `boolean`             | `false`          |
| `label`        | `label`         | Accessible name of the menu.                                                                                                                                                          | `string`              | `'Context menu'` |
| `open`         | `open`          |                                                                                                                                                                                       | `boolean`             | `false`          |
| `visibleItems` | `visible-items` | Show this many rows before the menu scrolls. Measured from a real row, so it follows the control height; leave it unset and the menu is as tall as its items, capped by the viewport. | `number \| undefined` | `undefined`      |


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


## CSS Custom Properties

| Name                    | Description                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--art-menu-max-height` | Height at which the menu starts to scroll. Unset, the menu is as tall as its items and only scrolls when the viewport has no room for them; set it (or `visible-items`) to cap it sooner. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
