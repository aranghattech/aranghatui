# art-workspace-switcher-item



<!-- Auto Generated Below -->


## Overview

Workspace Switcher Item — one workspace of an `art-workspace-switcher`. The default slot is the
workspace's logo (any markup: an `svg`, an `img`, an avatar), and the switcher copies it into
its trigger while this workspace is the active one.

## Properties

| Property   | Attribute  | Description                                                                                    | Type                  | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `active`   | `active`   | The active workspace. Set by the switcher — do not set it by hand.                             | `boolean`             | `false`     |
| `disabled` | `disabled` |                                                                                                | `boolean`             | `false`     |
| `item`     | --         | Data object for this workspace; handed back as `detail.item` on the switcher's `value-change`. | `unknown`             | `undefined` |
| `name`     | `name`     | The workspace's name: shown in the row, copied into the trigger, and used for type-ahead.      | `string`              | `''`        |
| `plan`     | `plan`     | Secondary line — the plan, the role, the member count.                                         | `string \| undefined` | `undefined` |
| `shortcut` | `shortcut` | Keyboard hint at the end of the row (`⌘1`). Display only: bind the accelerator yourself.       | `string \| undefined` | `undefined` |
| `value`    | `value`    | The workspace's value — what the switcher's `value` becomes when this row is chosen.           | `string`              | `''`        |


## Slots

| Slot | Description                  |
| ---- | ---------------------------- |
|      | The workspace logo / avatar. |


## Shadow Parts

| Part         | Description                       |
| ------------ | --------------------------------- |
| `"check"`    | The tick on the active workspace. |
| `"item"`     | The `role="menuitemradio"` row.   |
| `"logo"`     | The logo tile.                    |
| `"name"`     | The workspace name.               |
| `"plan"`     | The secondary line.               |
| `"shortcut"` | The keyboard hint.                |
| `"text"`     | The name and plan column.         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
