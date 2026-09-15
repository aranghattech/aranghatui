# art-message-scroller-item



<!-- Auto Generated Below -->


## Overview

Message Scroller Item — one row of the transcript. `message-id` makes it a jump target;
`scroll-anchor` marks a turn boundary that the scroller places near the top when appended.

## Properties

| Property       | Attribute       | Description                                                                                    | Type                  | Default     |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `messageId`    | `message-id`    | Stable id for `scrollToMessage()`.                                                             | `string \| undefined` | `undefined` |
| `scrollAnchor` | `scroll-anchor` | A turn boundary: when appended while following, it is positioned near the top of the viewport. | `boolean`             | `false`     |


## Slots

| Slot | Description  |
| ---- | ------------ |
|      | The message. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
