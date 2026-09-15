# art-sidebar-group



<!-- Auto Generated Below -->


## Overview

Sidebar Group — a titled section of the sidebar with an optional action button.

## Properties

| Property | Attribute | Description   | Type                  | Default     |
| -------- | --------- | ------------- | --------------------- | ----------- |
| `label`  | `label`   | Heading text. | `string \| undefined` | `undefined` |


## Slots

| Slot       | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
|            | The group content (an `art-sidebar-menu`).                                        |
| `"action"` | A small icon button at the top end (`art-button variant="ghost" icon size="sm"`). |
| `"label"`  | Rich heading (or use the `label` prop).                                           |


## Shadow Parts

| Part        | Description          |
| ----------- | -------------------- |
| `"action"`  | The action wrapper.  |
| `"content"` | The content wrapper. |
| `"group"`   | The wrapper.         |
| `"label"`   | The heading.         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
