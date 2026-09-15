# Drawer

A panel that slides in from an edge of the screen and can be swiped away. shadcn/ui parity (Vaul-style), on the native `<dialog>`.

## Preview

<Preview frame="inline">
  <art-drawer>
    <art-button slot="trigger" variant="outline">Open drawer</art-button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <art-button variant="outline" icon aria-label="Decrease">−</art-button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <art-button variant="outline" icon aria-label="Increase">+</art-button>
    </div>
    <art-button slot="footer">Submit</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
  </art-drawer>
</Preview>

## Installation

Lives in `@aranghat/modals` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/modals-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/modals-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/modals-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/drawer/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/drawer/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/drawer/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/drawer/basic.ts [Angular]
:::

Put a button in `trigger`, text in `title` / `description`, content in the default slot (it scrolls) and buttons in `footer` (`dialog-close` closes). `side` picks the edge, `persistent` disables dismissal, `hide-handle` hides the pill. Control it with `open` / `open-change`: React `<Drawer open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.

## Examples

### Basic

Slides up from the bottom with a swipe handle; drag it down (from the handle, header or footer) to dismiss. Same slots as Dialog: `trigger`, `title`, `description`, the body, `footer` with `dialog-close` buttons; Escape and the backdrop close it too.

<Preview frame="inline">
  <art-drawer>
    <art-button slot="trigger" variant="outline">Open drawer</art-button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <art-button variant="outline" icon aria-label="Decrease">−</art-button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <art-button variant="outline" icon aria-label="Increase">+</art-button>
    </div>
    <art-button slot="footer">Submit</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
  </art-drawer>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/drawer/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/drawer/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/drawer/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/drawer/basic.ts [Angular]
:::

### Sides

`side` is `bottom` (default), `top`, `right` or `left`; `left` / `right` follow the writing direction. Swiping towards the edge dismisses.

<Preview frame="inline">
  <art-drawer side="top">
    <art-button slot="trigger" variant="outline">Top</art-button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <art-button variant="outline" icon aria-label="Decrease">−</art-button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <art-button variant="outline" icon aria-label="Increase">+</art-button>
    </div>
    <art-button slot="footer">Submit</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
  </art-drawer>
  <art-drawer side="right">
    <art-button slot="trigger" variant="outline">Right</art-button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <art-button variant="outline" icon aria-label="Decrease">−</art-button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <art-button variant="outline" icon aria-label="Increase">+</art-button>
    </div>
    <art-button slot="footer">Submit</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
  </art-drawer>
  <art-drawer side="bottom">
    <art-button slot="trigger" variant="outline">Bottom</art-button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <art-button variant="outline" icon aria-label="Decrease">−</art-button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <art-button variant="outline" icon aria-label="Increase">+</art-button>
    </div>
    <art-button slot="footer">Submit</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
  </art-drawer>
  <art-drawer side="left">
    <art-button slot="trigger" variant="outline">Left</art-button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <art-button variant="outline" icon aria-label="Decrease">−</art-button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <art-button variant="outline" icon aria-label="Increase">+</art-button>
    </div>
    <art-button slot="footer">Submit</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
  </art-drawer>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/drawer/sides.html [HTML]
<<< ../../../sandbox/react/src/samples/drawer/sides.tsx [React]
<<< ../../../sandbox/vue/src/samples/drawer/sides.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/drawer/sides.ts [Angular]
:::

### Scrollable content

Long content scrolls inside the body while the drawer stays capped below the top of the page.

<Preview frame="inline">
  <art-drawer>
    <art-button slot="trigger" variant="outline">Read terms</art-button>
    <span slot="title">Terms of service</span>
    <span slot="description">Scroll inside; swipe from the handle to dismiss.</span>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">Section 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <art-button slot="footer" dialog-close>Done</art-button>
  </art-drawer>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/drawer/scrollable.html [HTML]
<<< ../../../sandbox/react/src/samples/drawer/scrollable.tsx [React]
<<< ../../../sandbox/vue/src/samples/drawer/scrollable.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/drawer/scrollable.ts [Angular]
:::

### Persistent

`persistent` ignores Escape, the backdrop and swipes: only a `dialog-close` element (or `open`) closes it.

<Preview frame="inline">
  <art-drawer persistent>
    <art-button slot="trigger" variant="outline">Pick a plan</art-button>
    <span slot="title">Choose a plan</span>
    <span slot="description">You need to pick one to continue.</span>
    <art-button slot="footer" dialog-close>Free</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Pro</art-button>
  </art-drawer>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/drawer/persistent.html [HTML]
<<< ../../../sandbox/react/src/samples/drawer/persistent.tsx [React]
<<< ../../../sandbox/vue/src/samples/drawer/persistent.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/drawer/persistent.ts [Angular]
:::

## API Reference

<ApiReference tag="art-drawer" />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space on the trigger` | Open |
| `Tab / Shift + Tab` | Cycle through the drawer only (the page is inert) |
| `Escape` | Close and return focus to the trigger (not when `persistent`) |

A native `<dialog>` shown with `showModal()` (`aria-modal`, page inert), `aria-labelledby` the title, `aria-describedby` the description; the handle is decorative (`aria-hidden`). The trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Swiping is a pointer gesture with keyboard and button equivalents (Escape, `dialog-close`). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

States: Open / closed with a slide from the edge and a scrim fade, dragging (follows the pointer, springs back or dismisses past a quarter of its size or on a flick), four sides, RTL mirrored, `persistent`. Interactive states belong to the controls inside.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-sm`, `--art-space-24`, `--art-space-4`, `--art-space-6`` | panel width, cap below the top, padding |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-lg`` | panel |
| ``--art-color-bg-muted`, `--art-space-2`, `--art-radius-full`` | swipe handle |
| ``--art-color-bg-overlay`` | scrim |
| ``--art-font-size-md`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`` | title, description |
| ``--art-duration-slow`, `--art-duration-base`, `--art-ease-out`` | slide, spring-back and scrim motion |

## Do / Don't

| Do | Don't |
|---|---|
| Use it on touch for quick choices and short forms | Put a long multi-step flow in a drawer |
| Keep the handle visible on bottom drawers | Hide the only hint that it can be swiped |
| Reserve `persistent` for a required decision | Trap users in a drawer with no `dialog-close` button |
