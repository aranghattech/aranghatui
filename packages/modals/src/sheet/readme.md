# art-sheet



<!-- Auto Generated Below -->


## Overview

Sheet — shadcn/ui parity on the native `<dialog>`: a panel that slides in from an edge
(`side`) over a scrim, for content that complements the page (filters, a form, a mobile
menu). Same modal behaviour as Dialog: page inert, scroll locked, Escape / backdrop / close
button / `dialog-close` elements close it, focus returns to the trigger. `left` and `right`
are logical (mirrored in RTL) and share the motion of the Sidebar's off-canvas mode.

## Properties

| Property     | Attribute     | Description                                                                   | Type                                     | Default     |
| ------------ | ------------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| `closeLabel` | `close-label` |                                                                               | `string`                                 | `'Close'`   |
| `hideClose`  | `hide-close`  | Remove the close button in the corner.                                        | `boolean`                                | `false`     |
| `label`      | `label`       | Accessible name when there is no `title` slot.                                | `string \| undefined`                    | `undefined` |
| `open`       | `open`        |                                                                               | `boolean`                                | `false`     |
| `side`       | `side`        | Edge the sheet slides in from; `left` / `right` follow the writing direction. | `"bottom" \| "left" \| "right" \| "top"` | `'right'`   |


## Events

| Event         | Description                                                     | Type                              |
| ------------- | --------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the sheet; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot            | Description                                                     |
| --------------- | --------------------------------------------------------------- |
|                 | The body (scrolls).                                             |
| `"description"` | Supporting text under the title.                                |
| `"footer"`      | Actions at the end (`<art-button slot="footer" dialog-close>`). |
| `"title"`       | The heading (required for an accessible name; or set `label`).  |
| `"trigger"`     | The element that opens the sheet.                               |


## Shadow Parts

| Part            | Description          |
| --------------- | -------------------- |
| `"body"`        | The scrolling body.  |
| `"close"`       | The close button.    |
| `"content"`     | The `<dialog>`.      |
| `"description"` | The `<p>`.           |
| `"footer"`      | The footer.          |
| `"header"`      | Title + description. |
| `"title"`       | The `<h2>`.          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
