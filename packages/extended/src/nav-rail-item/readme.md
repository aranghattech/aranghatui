# art-nav-rail-item



<!-- Auto Generated Below -->


## Overview

One context in the rail: an icon that is always icon-only, so its name is announced by the
accessible name and shown in a tooltip on hover or keyboard focus.

## Properties

| Property             | Attribute  | Description                                                                    | Type                  | Default     |
| -------------------- | ---------- | ------------------------------------------------------------------------------ | --------------------- | ----------- |
| `active`             | `active`   | Marks the current context (`aria-current="page"`).                             | `boolean`             | `false`     |
| `disabled`           | `disabled` | Disabled: no interaction, no events.                                           | `boolean`             | `false`     |
| `href`               | `href`     | Render as a link.                                                              | `string \| undefined` | `undefined` |
| `label` _(required)_ | `label`    | The name: the accessible name of the control and the tooltip's text. Required. | `string`              | `undefined` |
| `rel`                | `rel`      | Link rel (only with `href`).                                                   | `string \| undefined` | `undefined` |
| `target`             | `target`   | Link target (only with `href`).                                                | `string \| undefined` | `undefined` |


## Slots

| Slot | Description                                   |
| ---- | --------------------------------------------- |
|      | The icon (`<art-icon>` or an inline `<svg>`). |


## Shadow Parts

| Part        | Description                                      |
| ----------- | ------------------------------------------------ |
| `"control"` | The `<button>`, or the `<a>` when `href` is set. |
| `"tooltip"` | The label shown beside the icon.                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
