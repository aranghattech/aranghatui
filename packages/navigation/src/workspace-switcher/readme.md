# art-workspace-switcher



<!-- Auto Generated Below -->


## Overview

Workspace Switcher — the tenant control of a SaaS shell: the current workspace at the start of
an `art-top-nav` or the top of an `art-sidebar`, and a menu to change it. Rows are
`art-workspace-switcher-item`s (`role="menuitemradio"`); anything in `action` — an
`art-menu-item` such as "Add workspace" — follows them after a separator and joins the same
keyboard order.

`display` decides how much of the trigger shows: `full` is the logo with the name (and `plan`)
beside it, `icon` clips it to the logo square and names it with a tooltip, and `auto` — the
default — is `full` everywhere except inside a sidebar collapsed to icons (ADR-0025).

## Properties

| Property       | Attribute       | Description                                                            | Type                                                                                                                                                                 | Default                |
| -------------- | --------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `disabled`     | `disabled`      |                                                                        | `boolean`                                                                                                                                                            | `false`                |
| `display`      | `display`       | How much of the trigger shows; `auto` follows a collapsed sidebar.     | `"auto" \| "full" \| "icon"`                                                                                                                                         | `'auto'`               |
| `label`        | `label`         | Accessible name of the menu, and the label above the rows.             | `string`                                                                                                                                                             | `'Workspaces'`         |
| `open`         | `open`          |                                                                        | `boolean`                                                                                                                                                            | `false`                |
| `placeholder`  | `placeholder`   | Shown in the trigger when no item matches `value`.                     | `string`                                                                                                                                                             | `'Select a workspace'` |
| `placement`    | `placement`     | Preferred side / alignment of the panel.                               | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'`       |
| `value`        | `value`         | The active workspace's `value`.                                        | `string`                                                                                                                                                             | `''`                   |
| `visibleItems` | `visible-items` | Show this many rows before the menu scrolls; measured from a real row. | `number \| undefined`                                                                                                                                                | `undefined`            |


## Events

| Event          | Description                                                                                             | Type                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `open-change`  |                                                                                                         | `CustomEvent<{ open: boolean; }>`                                       |
| `value-change` | The user chose a workspace; `detail.value`, `detail.item` (the row's data object) and `detail.element`. | `CustomEvent<{ value: string; item?: unknown; element: HTMLElement; }>` |


## Slots

| Slot       | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
|            | The `art-workspace-switcher-item`s.                                   |
| `"action"` | Rows shown after a separator (`art-menu-item`), e.g. "Add workspace". |


## Shadow Parts

| Part          | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `"chevron"`   | The trigger's chevron.                                          |
| `"content"`   | The `role="menu"` panel.                                        |
| `"label"`     | The menu's group label.                                         |
| `"logo"`      | The trigger's logo tile (a copy of the active workspace's own). |
| `"name"`      | The active workspace's name.                                    |
| `"plan"`      | The active workspace's secondary line.                          |
| `"separator"` | The rule before the `action` rows.                              |
| `"text"`      | The trigger's name and plan column.                             |
| `"tooltip"`   | The icon-mode tooltip.                                          |
| `"trigger"`   | The `<button>` that opens the menu.                             |


## CSS Custom Properties

| Name                    | Description                                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `--art-menu-max-height` | Height at which the menu starts to scroll. Unset, it is as tall as its rows and scrolls only when the viewport has no room for them. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
