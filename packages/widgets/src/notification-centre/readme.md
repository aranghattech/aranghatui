# art-notification-centre



<!-- Auto Generated Below -->


## Overview

Notification Centre — a bell with an unread count that opens a panel of
`art-notification-item`s: a heading, "Mark all as read", an all / unread filter, the list and
an empty state. `inline` renders the panel in place (a settings page, the docs). Clicking an
item emits `select` and marks it read; the count follows the items' `unread` attributes.

## Properties

| Property           | Attribute           | Description                                  | Type                | Default                                 |
| ------------------ | ------------------- | -------------------------------------------- | ------------------- | --------------------------------------- |
| `allLabel`         | `all-label`         |                                              | `string`            | `'All'`                                 |
| `emptyDescription` | `empty-description` |                                              | `string`            | `'New notifications will appear here.'` |
| `emptyHeading`     | `empty-heading`     |                                              | `string`            | `"You're all caught up"`                |
| `filter`           | `filter`            | Show every item or only the unread ones.     | `"all" \| "unread"` | `'all'`                                 |
| `heading`          | `heading`           |                                              | `string`            | `'Notifications'`                       |
| `inline`           | `inline`            | Render the panel in place, without the bell. | `boolean`           | `false`                                 |
| `markAllLabel`     | `mark-all-label`    |                                              | `string`            | `'Mark all as read'`                    |
| `open`             | `open`              |                                              | `boolean`           | `false`                                 |
| `triggerLabel`     | `trigger-label`     |                                              | `string`            | `'Notifications'`                       |
| `unreadLabel`      | `unread-label`      |                                              | `string`            | `'Unread'`                              |


## Events

| Event         | Description                                                                 | Type                              |
| ------------- | --------------------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the panel; `detail.open`.             | `CustomEvent<{ open: boolean; }>` |
| `read-all`    | Emitted when "Mark all as read" is pressed (the items are marked read too). | `CustomEvent<void>`               |


## Slots

| Slot | Description               |
| ---- | ------------------------- |
|      | `art-notification-item`s. |


## Shadow Parts

| Part        | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `"badge"`   | The unread count on the bell.                                           |
| `"empty"`   | The empty state.                                                        |
| `"filters"` | The all / unread buttons.                                               |
| `"header"`  | Heading and "mark all".                                                 |
| `"list"`    | The list.                                                               |
| `"panel"`   | The panel (`role="dialog"` on the top layer, or in flow with `inline`). |
| `"trigger"` | The bell button.                                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
