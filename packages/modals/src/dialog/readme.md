# art-dialog



<!-- Auto Generated Below -->


## Overview

Dialog — shadcn/ui parity on the native `<dialog>` (ADR-0020): a modal window over the page
(top layer, page inert, document scroll locked) opened by the `trigger`, closed by Escape, a
click on the backdrop, the close button, or any slotted element with the `dialog-close`
attribute. Focus moves into the dialog and returns to the trigger on close.

## Properties

| Property     | Attribute     | Description                                    | Type                  | Default     |
| ------------ | ------------- | ---------------------------------------------- | --------------------- | ----------- |
| `closeLabel` | `close-label` |                                                | `string`              | `'Close'`   |
| `hideClose`  | `hide-close`  | Remove the close button in the corner.         | `boolean`             | `false`     |
| `label`      | `label`       | Accessible name when there is no `title` slot. | `string \| undefined` | `undefined` |
| `open`       | `open`        |                                                | `boolean`             | `false`     |


## Events

| Event         | Description                                                      | Type                              |
| ------------- | ---------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the dialog; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot            | Description                                                    |
| --------------- | -------------------------------------------------------------- |
|                 | The body.                                                      |
| `"description"` | Supporting text under the title.                               |
| `"footer"`      | Actions (`<art-button slot="footer" dialog-close>`).           |
| `"title"`       | The heading (required for an accessible name; or set `label`). |
| `"trigger"`     | The element that opens the dialog (a button).                  |


## Shadow Parts

| Part            | Description          |
| --------------- | -------------------- |
| `"body"`        | The body wrapper.    |
| `"close"`       | The close button.    |
| `"content"`     | The `<dialog>`.      |
| `"description"` | The `<p>`.           |
| `"footer"`      | The footer.          |
| `"header"`      | Title + description. |
| `"title"`       | The `<h2>`.          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
