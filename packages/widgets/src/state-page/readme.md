# art-state-page



<!-- Auto Generated Below -->


## Overview

State Page — a full-page empty / 404 / 500 state: a centred `art-empty` with an optional
status code, default copy per `kind` (override with `heading` / `description`), media and
actions. Fill the viewport (or a docs frame) and put the way out in `actions`.

## Properties

| Property      | Attribute     | Description                                         | Type                                | Default     |
| ------------- | ------------- | --------------------------------------------------- | ----------------------------------- | ----------- |
| `code`        | `code`        | Status code shown above the heading (`404`, `500`). | `string \| undefined`               | `undefined` |
| `description` | `description` |                                                     | `string \| undefined`               | `undefined` |
| `heading`     | `heading`     |                                                     | `string \| undefined`               | `undefined` |
| `kind`        | `kind`        | Which state; picks the default copy.                | `"empty" \| "error" \| "not-found"` | `'empty'`   |


## Slots

| Slot        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
|             | Extra content under the actions (a search box, a request id). |
| `"actions"` | Buttons (`<art-button slot="actions">`).                      |
| `"media"`   | An icon or illustration (`<art-icon slot="media">`).          |


## Shadow Parts

| Part     | Description           |
| -------- | --------------------- |
| `"code"` | The status code.      |
| `"page"` | The centring wrapper. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
