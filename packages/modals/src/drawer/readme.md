# art-drawer



<!-- Auto Generated Below -->


## Overview

Drawer — shadcn/ui parity on the native `<dialog>`: a panel that slides in from an edge
(`side`, bottom by default) with a swipe handle; drag it towards its edge to dismiss. Same
modal behaviour as Dialog (page inert, scroll locked, Escape / backdrop / `dialog-close`
elements close it, focus returns to the trigger); `persistent` keeps it open until a
`dialog-close` element or `open` says otherwise.

## Properties

| Property     | Attribute     | Description                                                                               | Type                                     | Default     |
| ------------ | ------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| `hideHandle` | `hide-handle` | Remove the swipe handle (swiping still works from the header and footer).                 | `boolean`                                | `false`     |
| `label`      | `label`       | Accessible name when there is no `title` slot.                                            | `string \| undefined`                    | `undefined` |
| `open`       | `open`        |                                                                                           | `boolean`                                | `false`     |
| `persistent` | `persistent`  | No dismissal by Escape, the backdrop or a swipe — only `dialog-close` elements or `open`. | `boolean`                                | `false`     |
| `side`       | `side`        | Edge the drawer slides in from; `left` / `right` follow the writing direction.            | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'`  |


## Events

| Event         | Description                                                      | Type                              |
| ------------- | ---------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the drawer; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot            | Description                                                    |
| --------------- | -------------------------------------------------------------- |
|                 | The body (scrolls).                                            |
| `"description"` | Supporting text under the title.                               |
| `"footer"`      | Actions (`<art-button slot="footer" dialog-close>`).           |
| `"title"`       | The heading (required for an accessible name; or set `label`). |
| `"trigger"`     | The element that opens the drawer.                             |


## Shadow Parts

| Part            | Description          |
| --------------- | -------------------- |
| `"body"`        | The scrolling body.  |
| `"content"`     | The `<dialog>`.      |
| `"description"` | The `<p>`.           |
| `"footer"`      | The footer.          |
| `"handle"`      | The swipe handle.    |
| `"header"`      | Title + description. |
| `"title"`       | The `<h2>`.          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
