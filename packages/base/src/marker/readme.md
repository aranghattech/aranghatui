# art-marker



<!-- Auto Generated Below -->


## Overview

Marker — shadcn/ui parity. An inline conversation marker: a status line, a system note, a
bordered row or a labelled separator between messages. Renders as a link when `href` is set.
For streaming updates set `role="status"` on the host.

## Properties

| Property  | Attribute | Description                                                                                         | Type                                   | Default     |
| --------- | --------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `href`    | `href`    | Renders the marker as an `<a>`.                                                                     | `string \| undefined`                  | `undefined` |
| `rel`     | `rel`     |                                                                                                     | `string \| undefined`                  | `undefined` |
| `target`  | `target`  |                                                                                                     | `string \| undefined`                  | `undefined` |
| `variant` | `variant` | `default`: inline line. `border`: with a bottom rule. `separator`: centred label between two rules. | `"border" \| "default" \| "separator"` | `'default'` |


## Slots

| Slot     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
|          | The text.                                                        |
| `"icon"` | A leading `<art-icon>`, `<svg>` or `<art-spinner>` (decorative). |


## Shadow Parts

| Part        | Description                                    |
| ----------- | ---------------------------------------------- |
| `"content"` | The text wrapper.                              |
| `"marker"`  | The row (`<div>` or `<a>` when `href` is set). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
