# art-attachment



<!-- Auto Generated Below -->


## Overview

Attachment — shadcn/ui parity. A file or image card: an icon or image, the file name, a
line of metadata, end-aligned actions, and upload states. Horizontal for lists and
composers, vertical for image grids. `href` or `trigger-label` make the whole card a target
while the actions stay clickable.

## Properties

| Property       | Attribute       | Description                                                                                  | Type                                                         | Default        |
| -------------- | --------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------- |
| `description`  | `description`   | Metadata line (alternative to the `description` slot). Uploading shows `progress` instead.   | `string \| undefined`                                        | `undefined`    |
| `href`         | `href`          | Makes the card a link (a full-card `<a>` under the actions).                                 | `string \| undefined`                                        | `undefined`    |
| `name`         | `name`          | File name (alternative to the default slot).                                                 | `string \| undefined`                                        | `undefined`    |
| `orientation`  | `orientation`   |                                                                                              | `"horizontal" \| "vertical"`                                 | `'horizontal'` |
| `progress`     | `progress`      | Upload progress 0–100, shown while `uploading`.                                              | `number \| undefined`                                        | `undefined`    |
| `size`         | `size`          |                                                                                              | `"md" \| "sm"`                                               | `'md'`         |
| `state`        | `state`         | Upload state: `idle` (dashed, not yet uploaded), `uploading`, `processing`, `error`, `done`. | `"done" \| "error" \| "idle" \| "processing" \| "uploading"` | `'done'`       |
| `target`       | `target`        |                                                                                              | `string \| undefined`                                        | `undefined`    |
| `triggerLabel` | `trigger-label` | Makes the card a button with this accessible name; emits `trigger` on activation.            | `string \| undefined`                                        | `undefined`    |


## Events

| Event     | Description                                           | Type                |
| --------- | ----------------------------------------------------- | ------------------- |
| `trigger` | The full-card button (`trigger-label`) was activated. | `CustomEvent<void>` |


## Slots

| Slot            | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
|                 | The file name (or use `name`).                                            |
| `"actions"`     | Icon-only `<art-button size="sm" icon>`s.                                 |
| `"description"` | Metadata such as type, size or status (or use `description`).             |
| `"media"`       | An `<svg>` / `<art-icon>` or an `<img>` (replaces the default file icon). |


## Shadow Parts

| Part            | Description                   |
| --------------- | ----------------------------- |
| `"actions"`     | The actions container.        |
| `"attachment"`  | The card.                     |
| `"content"`     |                               |
| `"description"` | The metadata line.            |
| `"media"`       | The icon / image box.         |
| `"title"`       | The file name.                |
| `"trigger"`     | The full-card link or button. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
