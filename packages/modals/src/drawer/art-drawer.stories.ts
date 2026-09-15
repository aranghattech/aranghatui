import type { ComponentStories } from '@artui/stories';

const goal = `  <span slot="title">Move Goal</span>\n  <span slot="description">Set your daily activity goal.</span>\n  <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">\n    <art-button variant="outline" icon aria-label="Decrease">−</art-button>\n    <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>\n    <art-button variant="outline" icon aria-label="Increase">+</art-button>\n  </div>\n  <art-button slot="footer">Submit</art-button>\n  <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>`;
const drawer = (attrs = '', trigger = 'Open drawer', body = goal) => `<art-drawer${attrs}>\n  <art-button slot="trigger" variant="outline">${trigger}</art-button>\n${body}\n</art-drawer>`;
const paragraphs = Array.from({ length: 10 }, (_, i) => `  <p style="margin: 0; font-size: var(--art-font-size-sm)">Section ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>`).join('\n');

export const stories: ComponentStories = {
  tag: 'art-drawer',
  tier: 'modals',
  variants: ['bottom', 'top', 'left', 'right'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => drawer(), note: 'Slides up from the bottom with a swipe handle; drag it down (from the handle, header or footer) to dismiss. Same slots as Dialog: `trigger`, `title`, `description`, the body, `footer` with `dialog-close` buttons; Escape and the backdrop close it too.' },
    sides: { title: 'Sides', render: () => ['top', 'right', 'bottom', 'left'].map((s) => drawer(` side="${s}"`, s[0]!.toUpperCase() + s.slice(1))).join('\n'), note: '`side` is `bottom` (default), `top`, `right` or `left`; `left` / `right` follow the writing direction. Swiping towards the edge dismisses.' },
    scrollable: { title: 'Scrollable content', render: () => drawer('', 'Read terms', `  <span slot="title">Terms of service</span>\n  <span slot="description">Scroll inside; swipe from the handle to dismiss.</span>\n${paragraphs}\n  <art-button slot="footer" dialog-close>Done</art-button>`), note: 'Long content scrolls inside the body while the drawer stays capped below the top of the page.' },
    persistent: { title: 'Persistent', render: () => drawer(' persistent', 'Pick a plan', `  <span slot="title">Choose a plan</span>\n  <span slot="description">You need to pick one to continue.</span>\n  <art-button slot="footer" dialog-close>Free</art-button>\n  <art-button slot="footer" variant="outline" dialog-close>Pro</art-button>`), note: '`persistent` ignores Escape, the backdrop and swipes: only a `dialog-close` element (or `open`) closes it.' },
  },
  render: ({ variant }) => drawer(` side="${variant}" open`),
  docs: {
    description: 'A panel that slides in from an edge of the screen and can be swiped away. shadcn/ui parity (Vaul-style), on the native `<dialog>`.',
    usage: 'Put a button in `trigger`, text in `title` / `description`, content in the default slot (it scrolls) and buttons in `footer` (`dialog-close` closes). `side` picks the edge, `persistent` disables dismissal, `hide-handle` hides the pill. Control it with `open` / `open-change`: React `<Drawer open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.',
    requires: ['base'],
    keyboard: [['Enter / Space on the trigger', 'Open'], ['Tab / Shift + Tab', 'Cycle through the drawer only (the page is inert)'], ['Escape', 'Close and return focus to the trigger (not when `persistent`)']],
    roles: 'A native `<dialog>` shown with `showModal()` (`aria-modal`, page inert), `aria-labelledby` the title, `aria-describedby` the description; the handle is decorative (`aria-hidden`). The trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Swiping is a pointer gesture with keyboard and button equivalents (Escape, `dialog-close`).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    states: 'Open / closed with a slide from the edge and a scrim fade, dragging (follows the pointer, springs back or dismisses past a quarter of its size or on a flick), four sides, RTL mirrored, `persistent`. Interactive states belong to the controls inside.',
    tokens: [['`--art-container-sm`, `--art-space-24`, `--art-space-4`, `--art-space-6`', 'panel width, cap below the top, padding'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-lg`', 'panel'], ['`--art-color-bg-muted`, `--art-space-2`, `--art-radius-full`', 'swipe handle'], ['`--art-color-bg-overlay`', 'scrim'], ['`--art-font-size-md`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`', 'title, description'], ['`--art-duration-slow`, `--art-duration-base`, `--art-ease-out`', 'slide, spring-back and scrim motion']],
    dos: [['Use it on touch for quick choices and short forms', 'Put a long multi-step flow in a drawer'], ['Keep the handle visible on bottom drawers', 'Hide the only hint that it can be swiped'], ['Reserve `persistent` for a required decision', 'Trap users in a drawer with no `dialog-close` button']],
  },
};
