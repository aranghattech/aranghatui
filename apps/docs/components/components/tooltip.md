# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. shadcn/ui parity, on the platform top layer.

## Preview

<Preview frame="inline">
  <art-tooltip>
    <art-button slot="trigger" variant="outline">Hover</art-button>
    Add to library
  </art-tooltip>
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
<<< ../../../sandbox/html/src/samples/tooltip/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/tooltip/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/tooltip/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tooltip/basic.ts [Angular]
:::

Slot the trigger as `trigger` and put the text in the default slot. `open` reflects the state; `open-change` fires on user interaction. React `onOpenChange`, Vue `v-model:open`, Angular `[open]` / `(openChange)`.

## Examples

### Basic

Rest the pointer on the trigger, focus it with the keyboard, or press and hold on touch. The trigger is described by the text (`aria-description`), so screen readers get it even while the bubble is closed.

<Preview frame="inline">
  <art-tooltip>
    <art-button slot="trigger" variant="outline">Hover</art-button>
    Add to library
  </art-tooltip>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tooltip/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/tooltip/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/tooltip/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tooltip/basic.ts [Angular]
:::

### Placements

`placement` is the preferred side; the bubble flips when there is no room.

<Preview frame="inline">
  <art-tooltip placement="top">
    <art-button slot="trigger" variant="outline">Top</art-button>
    Tooltip on top
  </art-tooltip>
  <art-tooltip placement="right">
    <art-button slot="trigger" variant="outline">Right</art-button>
    Tooltip on the right
  </art-tooltip>
  <art-tooltip placement="bottom">
    <art-button slot="trigger" variant="outline">Bottom</art-button>
    Tooltip on the bottom
  </art-tooltip>
  <art-tooltip placement="left">
    <art-button slot="trigger" variant="outline">Left</art-button>
    Tooltip on the left
  </art-tooltip>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tooltip/placements.html [HTML]
<<< ../../../sandbox/react/src/samples/tooltip/placements.tsx [React]
<<< ../../../sandbox/vue/src/samples/tooltip/placements.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tooltip/placements.ts [Angular]
:::

### Icon button

An icon-only button still needs its own `aria-label`; the tooltip adds a description.

<Preview frame="inline">
  <art-tooltip>
    <art-button slot="trigger" variant="outline" icon aria-label="Add">
      <art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-icon>
    </art-button>
    Add a new item
  </art-tooltip>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tooltip/icon-button.html [HTML]
<<< ../../../sandbox/react/src/samples/tooltip/icon-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/tooltip/icon-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tooltip/icon-button.ts [Angular]
:::

### Delays

`open-delay` / `close-delay` override the `--art-duration-hover-*` tokens (ms).

<Preview frame="inline">
  <art-tooltip open-delay="0" close-delay="0">
    <art-button slot="trigger" variant="outline">Instant</art-button>
    No hover intent
  </art-tooltip>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tooltip/delays.html [HTML]
<<< ../../../sandbox/react/src/samples/tooltip/delays.tsx [React]
<<< ../../../sandbox/vue/src/samples/tooltip/delays.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tooltip/delays.ts [Angular]
:::

## API Reference

<ApiReference tag="art-tooltip" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the trigger — the tooltip opens |
| `Escape` | Close the tooltip |
| `Hover / press-and-hold` | Open after the hover-intent delay |

The bubble is `role="tooltip"`; the trigger gets `aria-description` with the tooltip text, so the label is available whether or not the bubble is visible. The trigger keeps its own name. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).

States: Open / closed with enter and exit motion (`--animate-overlay-in|out`). No hover, active, disabled, loading or invalid state of its own.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-fg-default`, `--art-color-bg-canvas`` | bubble fill and text |
| ``--art-radius-md`, `--art-space-3`, `--art-space-1-5`, `--art-font-size-xs`` | bubble shape and text |
| ``--art-space-2-5`, `--art-radius-xs`` | arrow |
| ``--art-duration-hover-open`, `--art-duration-hover-close`` | hover intent |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-space-2`` | enter / exit motion and slide |

## Do / Don't

| Do | Don't |
|---|---|
| Keep it to a few words | Put actions or links in a tooltip |
| Use it to name icon-only controls in addition to `aria-label` | Rely on the tooltip as the only name |
| Let hover intent do its job | Set `open-delay="0"` everywhere |
