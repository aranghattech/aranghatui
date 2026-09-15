# art-bubble



<!-- Auto Generated Below -->


## Overview

Bubble — shadcn/ui parity. The visible surface of a conversational message: seven variants,
start / end alignment, an optional reactions row anchored to an edge, and a link form
(`href`) when the whole bubble is a target. Compose consecutive bubbles in
`<art-bubble-group>`; put one inside `<art-message>` for avatar, header and footer.

## Properties

| Property         | Attribute         | Description                                                        | Type                                                                                       | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------- |
| `align`          | `align`           | `end` aligns the bubble to the end of its row (the sender's side). | `"end" \| "start"`                                                                         | `'start'`   |
| `href`           | `href`            | Renders the surface as a link.                                     | `string \| undefined`                                                                      | `undefined` |
| `reactionsAlign` | `reactions-align` | Which end of that edge.                                            | `"end" \| "start"`                                                                         | `'end'`     |
| `reactionsSide`  | `reactions-side`  | Which edge the reactions pill hangs from.                          | `"bottom" \| "top"`                                                                        | `'bottom'`  |
| `rel`            | `rel`             |                                                                    | `string \| undefined`                                                                      | `undefined` |
| `target`         | `target`          |                                                                    | `string \| undefined`                                                                      | `undefined` |
| `variant`        | `variant`         |                                                                    | `"default" \| "destructive" \| "ghost" \| "muted" \| "outline" \| "secondary" \| "tinted"` | `'default'` |


## Slots

| Slot          | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
|               | The message content (text, links, media).                                                    |
| `"reactions"` | Emoji or counts shown in a pill on the bubble's edge (`reactions-side` / `reactions-align`). |


## Shadow Parts

| Part          | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `"content"`   | The bubble surface (`<div>`, or `<a>` when `href` is set). |
| `"reactions"` | The reactions pill.                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
