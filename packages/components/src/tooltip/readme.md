# art-tooltip



<!-- Auto Generated Below -->


## Overview

Tooltip — shadcn/ui parity. A short label that appears when the pointer rests on the
trigger (hover intent), on keyboard focus, or on press-and-hold with touch. Rendered on the
platform top layer (Popover API) and positioned with the floating primitive; the trigger is
described by the tooltip text (`aria-description`), so the label is read even when closed.

## Properties

| Property     | Attribute     | Description                                                                          | Type                                                                                                                                                                 | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `closeDelay` | `close-delay` | Grace period after the pointer leaves, ms. Defaults to `--art-duration-hover-close`. | `number \| undefined`                                                                                                                                                | `undefined` |
| `offset`     | `offset`      | Gap between trigger and bubble, in px.                                               | `number`                                                                                                                                                             | `4`         |
| `open`       | `open`        |                                                                                      | `boolean`                                                                                                                                                            | `false`     |
| `openDelay`  | `open-delay`  | Hover intent before opening, ms. Defaults to `--art-duration-hover-open`.            | `number \| undefined`                                                                                                                                                | `undefined` |
| `placement`  | `placement`   | Preferred side; flips when there is no room.                                         | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'top'`     |


## Events

| Event         | Description                                                       | Type                              |
| ------------- | ----------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the tooltip; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot        | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
|             | The tooltip text.                                                     |
| `"trigger"` | The element the tooltip describes (a button, an icon button, a link). |


## Shadow Parts

| Part        | Description                            |
| ----------- | -------------------------------------- |
| `"arrow"`   | The arrow pointing at the trigger.     |
| `"content"` | The tooltip bubble (`role="tooltip"`). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
