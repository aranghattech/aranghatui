# art-nav-section



<!-- Auto Generated Below -->


## Overview

A labelled group of `art-nav-link`s in the panel. The label is a heading for the list it
introduces; when the panel collapses the label goes and a rule takes its place, so the grouping
survives without the words.

## Properties

| Property    | Attribute   | Description                                                                           | Type                  | Default     |
| ----------- | ----------- | ------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `collapsed` | `collapsed` | Set by the enclosing `art-nav-rail` when its panel collapses — not something you set. | `boolean`             | `false`     |
| `label`     | `label`     | The group heading ("Portfolio", "Operations").                                        | `string \| undefined` | `undefined` |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | `art-nav-link`s. |


## Shadow Parts

| Part      | Description                |
| --------- | -------------------------- |
| `"label"` | The group heading.         |
| `"list"`  | The `role="list"` wrapper. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
