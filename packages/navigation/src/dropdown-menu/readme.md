# art-dropdown-menu



<!-- Auto Generated Below -->


## Overview

Dropdown Menu — shadcn/ui parity. A menu of actions opened from a trigger, on the platform
top layer: items, checkbox and radio items, labels, groups, separators, shortcuts and
submenus. Arrow keys move, typing jumps, Enter / Space activate, Escape closes and returns
focus to the trigger.

## Properties

| Property    | Attribute   | Description                                                  | Type                                                                                                                                                                 | Default          |
| ----------- | ----------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `label`     | `label`     | Accessible name of the menu; defaults to the trigger's text. | `string \| undefined`                                                                                                                                                | `undefined`      |
| `open`      | `open`      |                                                              | `boolean`                                                                                                                                                            | `false`          |
| `placement` | `placement` | Preferred side / alignment of the panel.                     | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |


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

| Name                    | Description                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--art-menu-max-height` | Height at which the menu starts to scroll. Defaults to the `space.72` token (18rem); set it on the element to show more (or fewer) items before the scrollbar appears. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
