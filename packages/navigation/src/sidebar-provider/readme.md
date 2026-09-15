# art-sidebar-provider



<!-- Auto Generated Below -->


## Overview

Sidebar Provider — the app frame around an `art-sidebar` and its `art-sidebar-inset`: a
full-height row that owns the sidebar state (`open` on desktop, `open-mobile` below the md
breakpoint) and the ⌘ / Ctrl + B shortcut. Override `--art-sidebar-width` here.

## Properties

| Property     | Attribute     | Description                                                            | Type      | Default |
| ------------ | ------------- | ---------------------------------------------------------------------- | --------- | ------- |
| `open`       | `open`        | Expanded (desktop).                                                    | `boolean` | `true`  |
| `openMobile` | `open-mobile` | Off-canvas sidebar shown (below the md breakpoint).                    | `boolean` | `false` |
| `shortcut`   | `shortcut`    | Key of the toggle shortcut (pressed with ⌘ / Ctrl); empty disables it. | `string`  | `'b'`   |


## Events

| Event           | Description                                                            | Type                              |
| --------------- | ---------------------------------------------------------------------- | --------------------------------- |
| `open-change`   | Emitted when the user expands or collapses the sidebar; `detail.open`. | `CustomEvent<{ open: boolean; }>` |
| `sidebar-state` | Internal: state fan-out to the sidebar and its triggers.               | `CustomEvent<void>`               |


## Methods

### `setOpen(open: boolean) => Promise<void>`

Set the state for the current mode (desktop `open`, mobile `open-mobile`).

#### Parameters

| Name   | Type      | Description |
| ------ | --------- | ----------- |
| `open` | `boolean` |             |

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Expand / collapse the sidebar (open / close the off-canvas one on mobile).

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                                            |
| ---- | -------------------------------------------------------------------------------------- |
|      | `art-sidebar` and `art-sidebar-inset` (a `side="right"` sidebar goes after the inset). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
