# art-sidebar-menu-item



<!-- Auto Generated Below -->


## Overview

Sidebar Menu Item — one row of an `art-sidebar-menu`: an `art-sidebar-menu-button`, optionally
with an `action` button, a `badge`, and a nested `art-sidebar-menu-sub` that the button
toggles (`open`).

## Properties

| Property        | Attribute         | Description                                                                   | Type      | Default |
| --------------- | ----------------- | ----------------------------------------------------------------------------- | --------- | ------- |
| `actionOnHover` | `action-on-hover` | Show the `action` only while the row is hovered or focused (pointer devices). | `boolean` | `false` |
| `open`          | `open`            | Whether the nested `art-sidebar-menu-sub` is shown.                           | `boolean` | `false` |


## Events

| Event         | Description                                                           | Type                              |
| ------------- | --------------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the nested list; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot       | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
|            | The `art-sidebar-menu-button`, followed by an optional `art-sidebar-menu-sub`.           |
| `"action"` | A small icon button at the end of the row (`art-button variant="ghost" icon size="sm"`). |
| `"badge"`  | A count or short text at the end of the row.                                             |


## Shadow Parts

| Part       | Description         |
| ---------- | ------------------- |
| `"action"` | The action wrapper. |
| `"badge"`  | The badge.          |
| `"item"`   | The row wrapper.    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
