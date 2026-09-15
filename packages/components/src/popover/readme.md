# art-popover



<!-- Auto Generated Below -->


## Overview

Popover — shadcn/ui parity. Rich content anchored to a trigger, opened by click, closed by
Escape, an outside click or focus leaving. Rendered on the platform top layer (Popover API)
and positioned with the floating primitive. Focus moves into the panel on open and returns
to the trigger on close.

## Properties

| Property    | Attribute   | Description                                                                     | Type                                                                                                                                                                 | Default     |
| ----------- | ----------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `label`     | `label`     | Accessible name of the panel (`role="dialog"`). Defaults to the trigger's text. | `string \| undefined`                                                                                                                                                | `undefined` |
| `offset`    | `offset`    | Gap between trigger and panel, in px.                                           | `number`                                                                                                                                                             | `4`         |
| `open`      | `open`      |                                                                                 | `boolean`                                                                                                                                                            | `false`     |
| `placement` | `placement` | Preferred side; flips when there is no room.                                    | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`  |


## Events

| Event         | Description                                                       | Type                              |
| ------------- | ----------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the popover; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot        | Description                                      |
| ----------- | ------------------------------------------------ |
|             | The content.                                     |
| `"trigger"` | The element that toggles the popover (a button). |


## Shadow Parts

| Part        | Description                  |
| ----------- | ---------------------------- |
| `"content"` | The panel (`role="dialog"`). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
