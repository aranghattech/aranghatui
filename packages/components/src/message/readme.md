# art-message



<!-- Auto Generated Below -->


## Overview

Message — shadcn/ui parity. A row in a conversation: an avatar anchored to the bottom, then
a column with an optional header (name, time), the bubble, and an optional footer (status,
actions). `align="end"` mirrors the row for the current user.

## Properties

| Property | Attribute | Description                                                                           | Type               | Default   |
| -------- | --------- | ------------------------------------------------------------------------------------- | ------------------ | --------- |
| `align`  | `align`   | `end` puts the avatar on the end side and right-aligns the column (the current user). | `"end" \| "start"` | `'start'` |


## Slots

| Slot       | Description                                            |
| ---------- | ------------------------------------------------------ |
|            | The `<art-bubble>` (or bubbles) and attachments.       |
| `"avatar"` | `<art-avatar>` (anchored to the bottom of the row).    |
| `"footer"` | Status, timestamps or action buttons below the bubble. |
| `"header"` | Sender name or metadata above the bubble.              |


## Shadow Parts

| Part        | Description                          |
| ----------- | ------------------------------------ |
| `"avatar"`  | The avatar column.                   |
| `"content"` | The header / bubble / footer column. |
| `"footer"`  | The footer row.                      |
| `"header"`  | The header row.                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
