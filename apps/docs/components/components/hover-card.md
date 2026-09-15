# Hover Card

For sighted users to preview content available behind a link. shadcn/ui parity, on the platform top layer.

## Preview

<Preview frame="inline">
  <art-hover-card>
    <art-button slot="trigger" variant="link">@nextjs</art-button>
    <h4>@nextjs</h4>
    <p>The React Framework – created and maintained by @vercel.</p>
    <p class="muted">Joined December 2021</p>
  </art-hover-card>
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
<<< ../../../sandbox/html/src/samples/hover-card/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/hover-card/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/hover-card/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hover-card/basic.ts [Angular]
:::

Slot the link or button as `trigger`; the rest is the card. Opens after the hover-card intent delay (longer than a tooltip), stays open while hovered, and also opens on keyboard focus.

## Examples

### Basic

Rest the pointer on the trigger for a moment; the card stays open while the pointer is on it. Keyboard focus opens it too; Escape closes.

<Preview frame="inline">
  <art-hover-card>
    <art-button slot="trigger" variant="link">@nextjs</art-button>
    <h4>@nextjs</h4>
    <p>The React Framework – created and maintained by @vercel.</p>
    <p class="muted">Joined December 2021</p>
  </art-hover-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hover-card/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/hover-card/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/hover-card/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hover-card/basic.ts [Angular]
:::

### Open

Controlled with the `open` attribute.

<Preview frame="inline">
  <art-hover-card open>
    <art-button slot="trigger" variant="link">@nextjs</art-button>
    <h4>@nextjs</h4>
    <p>The React Framework – created and maintained by @vercel.</p>
    <p class="muted">Joined December 2021</p>
  </art-hover-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hover-card/open.html [HTML]
<<< ../../../sandbox/react/src/samples/hover-card/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/hover-card/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hover-card/open.ts [Angular]
:::

### Placements

`placement` is the preferred side (`top`, `right`, `bottom`, `left`); the card flips when there is no room.

<Preview frame="inline">
  <art-hover-card placement="top">
    <art-button slot="trigger" variant="link">Top</art-button>
    <p>Card on top</p>
  </art-hover-card>
  <art-hover-card placement="right">
    <art-button slot="trigger" variant="link">Right</art-button>
    <p>Card on the right</p>
  </art-hover-card>
  <art-hover-card placement="bottom">
    <art-button slot="trigger" variant="link">Bottom</art-button>
    <p>Card on bottom</p>
  </art-hover-card>
  <art-hover-card placement="left">
    <art-button slot="trigger" variant="link">Left</art-button>
    <p>Card on the left</p>
  </art-hover-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hover-card/placements.html [HTML]
<<< ../../../sandbox/react/src/samples/hover-card/placements.tsx [React]
<<< ../../../sandbox/vue/src/samples/hover-card/placements.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hover-card/placements.ts [Angular]
:::

### On a link

<Preview frame="inline">
  <art-hover-card>
    <a slot="trigger" href="#">Read the docs</a>
    <p>A short preview of the page behind the link, so people can decide whether to follow it.</p>
  </art-hover-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/hover-card/with-link.html [HTML]
<<< ../../../sandbox/react/src/samples/hover-card/with-link.tsx [React]
<<< ../../../sandbox/vue/src/samples/hover-card/with-link.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/hover-card/with-link.ts [Angular]
:::

## API Reference

<ApiReference tag="art-hover-card" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the trigger — the card opens |
| `Escape` | Close the card |

The card is plain content: it previews, it does not replace, the destination. The trigger keeps its own name and behaviour. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Open / closed with enter and exit motion. No hover, active, disabled, loading or invalid state of its own.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-popover`, `--art-color-fg-default`` | card |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-popover`` | frame |
| ``--art-space-4`, `--art-space-64`` | padding and width |
| ``--art-duration-hover-card-open`, `--art-duration-hover-card-close`` | hover intent |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-space-2`` | enter / exit motion and slide |

## Do / Don't

| Do | Don't |
|---|---|
| Preview what is behind a link | Hide the only way to reach content in it |
| Keep it read-only | Put forms in a hover card (use a Popover) |
