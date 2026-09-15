# art-alert-dialog



<!-- Auto Generated Below -->


## Overview

Alert Dialog — shadcn/ui parity on the native `<dialog>`: a `role="alertdialog"` that
interrupts the user and expects a decision. No close button, no backdrop dismissal; Escape
cancels. Focus starts on the `cancel` button and returns to the trigger on close.

## Properties

| Property | Attribute | Description                                    | Type                  | Default     |
| -------- | --------- | ---------------------------------------------- | --------------------- | ----------- |
| `label`  | `label`   | Accessible name when there is no `title` slot. | `string \| undefined` | `undefined` |
| `open`   | `open`    |                                                | `boolean`             | `false`     |
| `size`   | `size`    | `sm` is a narrower panel for a short question. | `"md" \| "sm"`        | `'md'`      |


## Events

| Event         | Description                                                                                                             | Type                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `action`      | Emitted when the `action` button is pressed. Cancelable — `preventDefault()` keeps the dialog open (e.g. while saving). | `CustomEvent<void>`               |
| `open-change` | Emitted when the user opens or closes the dialog; `detail.open`.                                                        | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot            | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
|                 | Extra body content.                                                   |
| `"action"`      | The confirming button (emits `action`, then closes unless prevented). |
| `"cancel"`      | The cancel button (closes).                                           |
| `"description"` | The question or consequence.                                          |
| `"media"`       | An icon or image before the title.                                    |
| `"title"`       | The heading (required for an accessible name; or set `label`).        |
| `"trigger"`     | The element that opens the dialog.                                    |


## Shadow Parts

| Part            | Description                  |
| --------------- | ---------------------------- |
| `"body"`        | The body wrapper.            |
| `"content"`     | The `<dialog>`.              |
| `"description"` | The `<p>`.                   |
| `"footer"`      | Cancel + action.             |
| `"header"`      | Media + title + description. |
| `"media"`       | The media wrapper.           |
| `"title"`       | The `<h2>`.                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
