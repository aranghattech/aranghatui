# art-app-shell



<!-- Auto Generated Below -->


## Overview

App Shell — the dashboard frame in one element: a Sidebar (header / groups / footer slots), a
header bar with the sidebar trigger, and the page. Composes `art-sidebar-provider`,
`art-sidebar`, `art-sidebar-inset` and `art-sidebar-trigger` from `@aranghat/navigation`;
everything the Sidebar offers (`side`, `variant`, `collapsible`, ⌘ / Ctrl + B, the off-canvas
sheet below md) works unchanged, and the sidebar family finds its sidebar through the slots.

## Properties

| Property       | Attribute       | Description                                       | Type                                 | Default       |
| -------------- | --------------- | ------------------------------------------------- | ------------------------------------ | ------------- |
| `collapsible`  | `collapsible`   |                                                   | `"icon" \| "none" \| "offcanvas"`    | `'offcanvas'` |
| `open`         | `open`          | Sidebar expanded (desktop); mirrors the provider. | `boolean`                            | `true`        |
| `side`         | `side`          | Sidebar edge (`left` is the inline start).        | `"left" \| "right"`                  | `'left'`      |
| `sidebarLabel` | `sidebar-label` | Accessible name of the sidebar landmark.          | `string`                             | `'Sidebar'`   |
| `variant`      | `variant`       |                                                   | `"floating" \| "inset" \| "sidebar"` | `'sidebar'`   |


## Slots

| Slot               | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
|                    | The page.                                                      |
| `"actions"`        | Header bar content at the end (search, buttons).               |
| `"header"`         | Header bar content after the trigger (breadcrumb, page title). |
| `"sidebar"`        | `art-sidebar-group`s / `art-sidebar-menu`s.                    |
| `"sidebar-footer"` | Bottom of the sidebar (user menu).                             |
| `"sidebar-header"` | Top of the sidebar (brand, team switcher).                     |


## Shadow Parts

| Part        | Description       |
| ----------- | ----------------- |
| `"content"` | The page wrapper. |
| `"header"`  | The header bar.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
