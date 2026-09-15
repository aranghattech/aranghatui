# Aspect Ratio

Displays content within a desired ratio. shadcn/ui parity, on the native `aspect-ratio` property.

## Preview

<Preview frame="stack">
  <art-aspect-ratio ratio="16/9">
    <div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>
  </art-aspect-ratio>
</Preview>

## Installation

Lives in `@aranghat/base`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/aspect-ratio/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/aspect-ratio/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/aspect-ratio/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/aspect-ratio/basic.ts [Angular]
:::

Set `ratio` as `width/height` (or a number) and put one element inside — an image, a video, an iframe or a placeholder.

## Examples

### Basic

The box is as wide as its container and as tall as the ratio dictates; the slotted element is stretched to fill it (`object-fit: cover` for images and video).

<Preview frame="stack">
  <art-aspect-ratio ratio="16/9">
    <div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>
  </art-aspect-ratio>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/aspect-ratio/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/aspect-ratio/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/aspect-ratio/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/aspect-ratio/basic.ts [Angular]
:::

### Square

<Preview frame="stack">
  <art-aspect-ratio ratio="1">
    <div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>
  </art-aspect-ratio>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/aspect-ratio/square.html [HTML]
<<< ../../../sandbox/react/src/samples/aspect-ratio/square.tsx [React]
<<< ../../../sandbox/vue/src/samples/aspect-ratio/square.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/aspect-ratio/square.ts [Angular]
:::

### Portrait

<Preview frame="stack">
  <art-aspect-ratio ratio="3/4">
    <div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>
  </art-aspect-ratio>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/aspect-ratio/portrait.html [HTML]
<<< ../../../sandbox/react/src/samples/aspect-ratio/portrait.tsx [React]
<<< ../../../sandbox/vue/src/samples/aspect-ratio/portrait.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/aspect-ratio/portrait.ts [Angular]
:::

## API Reference

<ApiReference tag="art-aspect-ratio" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable; the content keeps its own behaviour |

No role; the slotted content keeps its native semantics (give images an `alt`). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — no states.

## Tokens used

| Token | Used for |
|---|---|
| `none` | the box is pure geometry; the example placeholder uses `--art-color-bg-muted` and `--art-radius-md` |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for media whose size is not known up front | Wrap text content in it |
| Set the ratio the media was produced in | Force a square onto a wide photo |
