# art-command-item



<!-- Auto Generated Below -->


## Overview

Command Item — one entry of an `<art-command>`: an optional leading icon, the label and an
optional shortcut. `item` carries the data object handed back in the command's `select` event.

## Properties

| Property   | Attribute  | Description                                                   | Type                  | Default     |
| ---------- | ---------- | ------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` |                                                               | `boolean`             | `false`     |
| `item`     | --         | Data object for this entry; reported as `detail.item`.        | `unknown`             | `undefined` |
| `keywords` | `keywords` | Extra words the filter should match besides the visible text. | `string \| undefined` | `undefined` |
| `value`    | `value`    | Reported as `detail.value` when run.                          | `string`              | `''`        |


## Slots

| Slot         | Description                                             |
| ------------ | ------------------------------------------------------- |
|              | The label (with an `<art-icon>` or `<svg>` before it).  |
| `"shortcut"` | A keyboard hint at the end (`<art-kbd-group>` or text). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
