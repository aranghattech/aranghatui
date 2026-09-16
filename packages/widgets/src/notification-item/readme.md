# art-notification-item



<!-- Auto Generated Below -->


## Overview

Notification Item — one row of an `art-notification-centre`: media, heading, description,
time, and the unread dot. The whole row activates (`select`, then the centre marks it read);
with `href` it is a link. Extra actions go in the default slot and stay clickable on their own.

## Properties

| Property      | Attribute     | Description                                    | Type                  | Default     |
| ------------- | ------------- | ---------------------------------------------- | --------------------- | ----------- |
| `description` | `description` |                                                | `string \| undefined` | `undefined` |
| `heading`     | `heading`     |                                                | `string`              | `''`        |
| `href`        | `href`        | Makes the heading a link.                      | `string \| undefined` | `undefined` |
| `time`        | `time`        | Relative or absolute time, as text (`2m ago`). | `string \| undefined` | `undefined` |
| `unread`      | `unread`      |                                                | `boolean`             | `false`     |
| `value`       | `value`       | Reported by `select`.                          | `string`              | `''`        |


## Events

| Event    | Description                                                                                         | Type                              |
| -------- | --------------------------------------------------------------------------------------------------- | --------------------------------- |
| `select` | Emitted when the row is activated; `detail.value`. Cancelable — `preventDefault()` keeps it unread. | `CustomEvent<{ value: string; }>` |


## Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
|           | Extra content under the text (buttons). |
| `"media"` | An icon or avatar at the start.         |


## Shadow Parts

| Part        | Description                       |
| ----------- | --------------------------------- |
| `"heading"` | The heading (a link with `href`). |
| `"item"`    | The row.                          |
| `"time"`    | The time.                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
