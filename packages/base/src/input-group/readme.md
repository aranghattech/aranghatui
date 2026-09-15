# art-input-group



<!-- Auto Generated Below -->


## Overview

Input Group — shadcn/ui parity. One field frame around an `<art-input>` or `<art-textarea>`
and its addons: icons, text, kbd hints, buttons, or whole rows above / below the control.
The group draws the border, focus ring, invalid ring and disabled state for everything inside.

## Slots

| Slot            | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
|                 | The control: `<art-input>` or `<art-textarea>`.                            |
| `"block-end"`   | A full-width row below the control (textarea toolbars).                    |
| `"block-start"` | A full-width row above the control.                                        |
| `"end"`         | Trailing inline addon (icon, text, `<art-kbd>`, `<art-button size="sm">`). |
| `"start"`       | Leading inline addon (icon, text).                                         |


## Shadow Parts

| Part      | Description                                                |
| --------- | ---------------------------------------------------------- |
| `"frame"` | The bordered frame.                                        |
| `"row"`   | The inline row holding start addon, control and end addon. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
