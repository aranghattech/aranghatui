# art-label



<!-- Auto Generated Below -->


## Overview

Label — shadcn/ui parity. A styled `<label>` for any control. Because shadow roots scope
ids, `for` is resolved at click time: activating the label focuses the target control
(or toggles it for checkbox-like controls), matching native label behaviour across tiers.

## Properties

| Property   | Attribute  | Description                                                                                                          | Type                  | Default     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` | Dimmed and inert; Field sets this when its control is disabled.                                                      | `boolean`             | `false`     |
| `htmlFor`  | `for`      | id of the control this label describes (looked up in the label's own DOM tree, then the document). Attribute: `for`. | `string \| undefined` | `undefined` |


## Slots

| Slot | Description |
| ---- | ----------- |
|      | Label text. |


## Shadow Parts

| Part      | Description           |
| --------- | --------------------- |
| `"label"` | The native `<label>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
