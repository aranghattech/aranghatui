# art-resizable



<!-- Auto Generated Below -->


## Overview

Resizable — shadcn/ui parity. A group of `<art-resizable-panel>`s split by
`<art-resizable-handle>`s that can be dragged with a pointer or moved with the keyboard.
Sizes are percentages of the group.

## Properties

| Property    | Attribute   | Description | Type                         | Default        |
| ----------- | ----------- | ----------- | ---------------------------- | -------------- |
| `direction` | `direction` |             | `"horizontal" \| "vertical"` | `'horizontal'` |


## Events

| Event           | Description                                                                | Type                                |
| --------------- | -------------------------------------------------------------------------- | ----------------------------------- |
| `layout-change` | Emitted after a resize; `detail.sizes` are the panel percentages in order. | `CustomEvent<{ sizes: number[]; }>` |


## Slots

| Slot | Description                      |
| ---- | -------------------------------- |
|      | Panels and handles, alternating. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
