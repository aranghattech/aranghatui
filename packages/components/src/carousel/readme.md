# art-carousel



<!-- Auto Generated Below -->


## Overview

Carousel — shadcn/ui parity on Embla (ADR-0005). Slides are `<art-carousel-item>`s in the
light DOM; the viewport, track and the previous / next buttons live here. Drag / swipe,
arrow keys, `loop`, `align`, horizontal or vertical.

## Properties

| Property             | Attribute         | Description                                  | Type                           | Default        |
| -------------------- | ----------------- | -------------------------------------------- | ------------------------------ | -------------- |
| `align`              | `align`           | Where a slide settles in the viewport.       | `"center" \| "end" \| "start"` | `'start'`      |
| `controls`           | `controls`        | Show the previous / next buttons.            | `boolean`                      | `true`         |
| `dragFree`           | `drag-free`       | Free-scrolling momentum instead of snapping. | `boolean`                      | `false`        |
| `hostAriaLabel`      | `aria-label`      |                                              | `null \| string \| undefined`  | `undefined`    |
| `hostAriaLabelledby` | `aria-labelledby` |                                              | `null \| string \| undefined`  | `undefined`    |
| `loop`               | `loop`            | Wrap around at the ends.                     | `boolean`                      | `false`        |
| `orientation`        | `orientation`     |                                              | `"horizontal" \| "vertical"`   | `'horizontal'` |


## Events

| Event          | Description                                                            | Type                              |
| -------------- | ---------------------------------------------------------------------- | --------------------------------- |
| `slide-change` | Emitted when the selected slide changes; `detail.index` is zero-based. | `CustomEvent<{ index: number; }>` |


## Methods

### `scrollNext() => Promise<void>`

Go to the next slide.

#### Returns

Type: `Promise<void>`



### `scrollPrev() => Promise<void>`

Go to the previous slide.

#### Returns

Type: `Promise<void>`



### `scrollToSlide(index: number) => Promise<void>`

Go to a slide by zero-based index (`scrollTo` is taken by the DOM).

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `index` | `number` |             |

#### Returns

Type: `Promise<void>`



### `selectedIndex() => Promise<number>`

Index of the selected slide.

#### Returns

Type: `Promise<number>`




## Slots

| Slot | Description             |
| ---- | ----------------------- |
|      | `<art-carousel-item>`s. |


## Shadow Parts

| Part          | Description                    |
| ------------- | ------------------------------ |
| `"container"` | The moving track.              |
| `"next"`      | The next button.               |
| `"previous"`  | The previous button.           |
| `"viewport"`  | The clipping box (Embla root). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
