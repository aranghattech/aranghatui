# art-dropdown-menu



<!-- Auto Generated Below -->


## Overview

Dropdown Menu — shadcn/ui parity. A menu of actions opened from a trigger, on the platform
top layer: items, checkbox and radio items, labels, groups, separators, shortcuts and
submenus. Arrow keys move, typing jumps, Enter / Space activate, Escape closes and returns
focus to the trigger.

## Properties

| Property       | Attribute       | Description                                                                                                                                                                           | Type                                                                                                                                                                 | Default          |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `label`        | `label`         | Accessible name of the menu; defaults to the trigger's text.                                                                                                                          | `string \| undefined`                                                                                                                                                | `undefined`      |
| `open`         | `open`          |                                                                                                                                                                                       | `boolean`                                                                                                                                                            | `false`          |
| `placement`    | `placement`     | Preferred side / alignment of the panel.                                                                                                                                              | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |
| `visibleItems` | `visible-items` | Show this many rows before the menu scrolls. Measured from a real row, so it follows the control height; leave it unset and the menu is as tall as its items, capped by the viewport. | `number \| undefined`                                                                                                                                                | `undefined`      |


## Events

| Event         | Description | Type                              |
| ------------- | ----------- | --------------------------------- |
| `open-change` |             | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot        | Description                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
|             | `art-menu-item`s, `-label`s, `-separator`s, `-group`s, `-radio-group`s and `-sub`s. |
| `"trigger"` | The button that opens the menu.                                                     |


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
