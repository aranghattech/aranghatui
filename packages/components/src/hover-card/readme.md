# art-hover-card



<!-- Auto Generated Below -->


## Overview

Hover Card — shadcn/ui parity. A preview card for sighted users to peek at what sits behind
a link: opens after a longer hover intent than a tooltip (it is content, not a label), stays
open while the pointer is on the card, also opens on keyboard focus. Rendered on the platform
top layer (Popover API) and positioned with the floating primitive.

## Properties

| Property     | Attribute     | Description                                                                                                | Type                                                                                                                                                                 | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `closeDelay` | `close-delay` | Grace period after the pointer leaves trigger and card, ms. Defaults to `--art-duration-hover-card-close`. | `number \| undefined`                                                                                                                                                | `undefined` |
| `offset`     | `offset`      | Gap between trigger and card, in px.                                                                       | `number`                                                                                                                                                             | `4`         |
| `open`       | `open`        |                                                                                                            | `boolean`                                                                                                                                                            | `false`     |
| `openDelay`  | `open-delay`  | Hover intent before opening, ms. Defaults to `--art-duration-hover-card-open`.                             | `number \| undefined`                                                                                                                                                | `undefined` |
| `placement`  | `placement`   | Preferred side; flips when there is no room.                                                               | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`  |


## Events

| Event         | Description                                                    | Type                              |
| ------------- | -------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the card; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot        | Description                     |
| ----------- | ------------------------------- |
|             | The card content.               |
| `"trigger"` | The link or element to preview. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"content"` | The card.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
