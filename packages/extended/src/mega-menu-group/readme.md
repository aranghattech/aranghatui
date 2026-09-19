# art-mega-menu-group



<!-- Auto Generated Below -->


## Overview

Mega Menu Group — a named set of `art-mega-menu-link`s in a panel. The name sits above the links
and names their list for assistive technology. The links stack in one column unless `columns`
spreads them out (a band of links across a wide panel).

## Properties

| Property  | Attribute | Description                                      | Type                  | Default     |
| --------- | --------- | ------------------------------------------------ | --------------------- | ----------- |
| `columns` | `columns` | Columns the group's own links flow in.           | `number`              | `1`         |
| `label`   | `label`   | The group's name ("Core features", "Resources"). | `string \| undefined` | `undefined` |


## Slots

| Slot | Description            |
| ---- | ---------------------- |
|      | `art-mega-menu-link`s. |


## Shadow Parts

| Part      | Description                          |
| --------- | ------------------------------------ |
| `"label"` | The group's name.                    |
| `"list"`  | The `role="list"` the links flow in. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
