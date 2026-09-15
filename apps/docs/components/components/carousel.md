# Carousel

A carousel with motion and swipe built using Embla. shadcn/ui parity; Embla is the only runtime dependency (ADR-0005).

## Preview

<Preview frame="stack">
  <art-carousel aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">
    <art-carousel-item>
      <art-card><p class="slide">1</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">2</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">3</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">4</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">5</p></art-card>
    </art-carousel-item>
  </art-carousel>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/carousel/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/carousel/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/carousel/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/carousel/basic.ts [Angular]
:::

Put `art-carousel-item`s inside; each slide is any content. Listen to `slide-change` (`detail.index`), call `scrollToSlide(i)` for tabs or dots. React `onSlideChange`, Vue `@slide-change`, Angular `(slideChange)`.

## Examples

### Basic

Drag or swipe, use the buttons, or press ← / → with the carousel focused. The buttons sit outside the viewport, so leave a margin for them. `slide-change` reports the selected index.

<Preview frame="stack">
  <art-carousel aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">
    <art-carousel-item>
      <art-card><p class="slide">1</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">2</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">3</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">4</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">5</p></art-card>
    </art-carousel-item>
  </art-carousel>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/carousel/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/carousel/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/carousel/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/carousel/basic.ts [Angular]
:::

### Several per view

Set `--art-carousel-basis` (any width) to show more than one slide; slides keep their gap.

<Preview frame="stack">
  <art-carousel aria-label="Numbers" style="max-width: var(--art-container-sm); margin-inline: var(--art-space-12); --art-carousel-basis: 33.333%">
    <art-carousel-item>
      <art-card><p class="slide">1</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">2</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">3</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">4</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">5</p></art-card>
    </art-carousel-item>
  </art-carousel>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/carousel/multiple-per-view.html [HTML]
<<< ../../../sandbox/react/src/samples/carousel/multiple-per-view.tsx [React]
<<< ../../../sandbox/vue/src/samples/carousel/multiple-per-view.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/carousel/multiple-per-view.ts [Angular]
:::

### Loop

`loop` wraps around; `align="center"` settles slides in the middle.

<Preview frame="stack">
  <art-carousel loop align="center" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">
    <art-carousel-item>
      <art-card><p class="slide">1</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">2</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">3</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">4</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">5</p></art-card>
    </art-carousel-item>
  </art-carousel>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/carousel/loop.html [HTML]
<<< ../../../sandbox/react/src/samples/carousel/loop.tsx [React]
<<< ../../../sandbox/vue/src/samples/carousel/loop.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/carousel/loop.ts [Angular]
:::

### Vertical

The viewport takes the height of one slide; ↑ / ↓ move.

<Preview frame="stack">
  <art-carousel orientation="vertical" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-block: var(--art-space-12)">
    <art-carousel-item>
      <art-card><p class="slide">1</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">2</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">3</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">4</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">5</p></art-card>
    </art-carousel-item>
  </art-carousel>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/carousel/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/carousel/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/carousel/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/carousel/vertical.ts [Angular]
:::

### Without buttons

`controls="false"` leaves drag, keys and your own buttons (`scrollPrev()` / `scrollNext()` / `scrollToSlide(i)`); `drag-free` scrolls with momentum instead of snapping.

<Preview frame="stack">
  <art-carousel controls="false" drag-free aria-label="Numbers" style="max-width: var(--art-container-sm); --art-carousel-basis: 50%">
    <art-carousel-item>
      <art-card><p class="slide">1</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">2</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">3</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">4</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">5</p></art-card>
    </art-carousel-item>
    <art-carousel-item>
      <art-card><p class="slide">6</p></art-card>
    </art-carousel-item>
  </art-carousel>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/carousel/no-controls.html [HTML]
<<< ../../../sandbox/react/src/samples/carousel/no-controls.tsx [React]
<<< ../../../sandbox/vue/src/samples/carousel/no-controls.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/carousel/no-controls.ts [Angular]
:::

## API Reference

<ApiReference tag="art-carousel" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the previous / next buttons (and anything inside slides) |
| `← / → (↑ / ↓ when vertical)` | Previous / next slide while the carousel has focus |
| `Enter / Space` | Activate a button |

The host is `role="region"` with `aria-roledescription="carousel"` and your `aria-label`; each item is `role="group"` with `aria-roledescription="slide"` and an `aria-label` of "n of N" unless you set one. Buttons are named "Previous slide" / "Next slide" and disable at the ends (never when `loop`). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

States: `hover`, `focus-visible` and `disabled` (at the ends) on the buttons. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-4`` | gap between slides |
| ``--art-space-12`` | button offset outside the viewport |
| ``--art-control-height-sm`, `--art-color-border-default`, `--art-color-bg-canvas`, `--art-shadow-raised`, `--art-color-bg-accent`` | buttons |
| ``--art-size-icon-md`` | arrow icons |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Keep slides the same size | Mix tall and short slides |
| Give the carousel an `aria-label` | Leave the region unnamed |
| Leave room for the buttons or hide them with `controls="false"` | Let the buttons overlap the slides |
