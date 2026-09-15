# art-sidebar



<!-- Auto Generated Below -->


## Overview

Sidebar (SideNav) — shadcn/ui parity. A collapsible app sidebar inside an
`art-sidebar-provider`: `side`, `variant` (`sidebar | floating | inset`) and `collapsible`
(`offcanvas | icon | none`). Below the md breakpoint it becomes an off-canvas sheet
(focus-trapped, dismissed by Escape or a tap outside), built on the primitives (ADR-0019).

## Properties

| Property      | Attribute      | Description                                                               | Type                                 | Default            |
| ------------- | -------------- | ------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| `collapsible` | `collapsible`  | How it collapses: slide away, shrink to icons, or not at all.             | `"icon" \| "none" \| "offcanvas"`    | `'offcanvas'`      |
| `label`       | `label`        | Accessible name of the navigation landmark (and of the off-canvas sheet). | `string`                             | `'Sidebar'`        |
| `rail`        | `rail`         | Show the edge rail that toggles the sidebar on click.                     | `boolean`                            | `false`            |
| `side`        | `side`         | Which edge; `left` is the inline start (mirrored in RTL).                 | `"left" \| "right"`                  | `'left'`           |
| `toggleLabel` | `toggle-label` |                                                                           | `string`                             | `'Toggle sidebar'` |
| `variant`     | `variant`      |                                                                           | `"floating" \| "inset" \| "sidebar"` | `'sidebar'`        |


## Events

| Event           | Description                                           | Type                |
| --------------- | ----------------------------------------------------- | ------------------- |
| `sidebar-state` | Internal: state fan-out to groups, menus and buttons. | `CustomEvent<void>` |


## Slots

| Slot       | Description                                        |
| ---------- | -------------------------------------------------- |
|            | `art-sidebar-group`s and `art-sidebar-menu`s.      |
| `"footer"` | Bottom of the sidebar (user menu).                 |
| `"header"` | Top of the sidebar (brand, team switcher, search). |


## Shadow Parts

| Part          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `"container"` | The sticky column (a `role="dialog"` sheet when off-canvas). |
| `"content"`   | The scrolling middle region.                                 |
| `"footer"`    | The footer region.                                           |
| `"header"`    | The header region.                                           |
| `"inner"`     | The `nav` surface.                                           |
| `"rail"`      | The edge strip that toggles the sidebar (`rail`).            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
