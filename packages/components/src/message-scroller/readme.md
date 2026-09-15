# art-message-scroller



<!-- Auto Generated Below -->


## Overview

Message Scroller — shadcn/ui parity. A transcript viewport for streaming conversations that
never moves the reader against their intent: it follows the live edge while the reader is at
the end and lets go when they scroll up; a new turn marked `scroll-anchor` is placed near the
top with a peek of the previous one; older messages prepended above keep the visible row in
place; a "jump to latest" button appears when the end is out of view.

## Properties

| Property                 | Attribute                   | Description                                                                                     | Type                                | Default      |
| ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- | ------------ |
| `autoScroll`             | `auto-scroll`               | Keep the end in view as content streams in (until the reader scrolls away).                     | `boolean`                           | `true`       |
| `defaultScrollPosition`  | `default-scroll-position`   | Where to open: the latest message, the first one, or the last `scroll-anchor` row with context. | `"end" \| "last-anchor" \| "start"` | `'end'`      |
| `label`                  | `label`                     | Accessible name of the viewport.                                                                | `string`                            | `'Messages'` |
| `scrollPreviousItemPeek` | `scroll-previous-item-peek` | Pixels of the previous row kept visible above an anchored turn.                                 | `number`                            | `64`         |


## Events

| Event                 | Description                                                                              | Type                             |
| --------------------- | ---------------------------------------------------------------------------------------- | -------------------------------- |
| `scroll-state-change` | Emitted when the reader reaches or leaves the start / end, or following turns on or off. | `CustomEvent<ScrollStateDetail>` |


## Methods

### `isAtEnd() => Promise<boolean>`

Whether the reader is at the end.

#### Returns

Type: `Promise<boolean>`



### `scrollToEnd(behavior?: ScrollBehavior) => Promise<void>`

Jump to the latest message and follow new ones.

#### Parameters

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| `behavior` | `"auto" \| "instant" \| "smooth"` |             |

#### Returns

Type: `Promise<void>`



### `scrollToMessage(id: string, behavior?: ScrollBehavior) => Promise<void>`

Bring a row (`message-id`) into view near the top (following stops).

#### Parameters

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| `id`       | `string`                          |             |
| `behavior` | `"auto" \| "instant" \| "smooth"` |             |

#### Returns

Type: `Promise<void>`



### `scrollToStart(behavior?: ScrollBehavior) => Promise<void>`

Jump to the first message (following stops).

#### Parameters

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| `behavior` | `"auto" \| "instant" \| "smooth"` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                   |
| ---- | --------------------------------------------- |
|      | `<art-message-scroller-item>`s (or any rows). |


## Shadow Parts

| Part         | Description                     |
| ------------ | ------------------------------- |
| `"button"`   | The jump-to-end button.         |
| `"content"`  | The `role="log"` transcript.    |
| `"viewport"` | The scrollable `role="region"`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
