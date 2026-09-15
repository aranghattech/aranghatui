# art-avatar



<!-- Auto Generated Below -->


## Overview

Avatar — shadcn/ui parity. An image with a fallback (initials, an icon) shown until the
image has loaded, or instead of it when it fails.

## Properties

| Property | Attribute | Description                                                                               | Type                   | Default     |
| -------- | --------- | ----------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `alt`    | `alt`     | Alternative text for the image; leave empty when the avatar is decorative next to a name. | `string`               | `''`        |
| `size`   | `size`    |                                                                                           | `"lg" \| "md" \| "sm"` | `'md'`      |
| `src`    | `src`     |                                                                                           | `string \| undefined`  | `undefined` |


## Slots

| Slot | Description                  |
| ---- | ---------------------------- |
|      | Fallback content (initials). |


## Shadow Parts

| Part         | Description       |
| ------------ | ----------------- |
| `"fallback"` | The fallback box. |
| `"image"`    | The `<img>`.      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
