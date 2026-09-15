import type { ComponentStories } from '@artui/stories';

const dimensions = `  <art-field>\n    <art-label slot="label">Width</art-label>\n    <art-input value="100%" size="sm"></art-input>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Height</art-label>\n    <art-input value="25px" size="sm"></art-input>\n  </art-field>`;

export const stories: ComponentStories = {
  tag: 'art-popover',
  tier: 'components',
  variants: ['top', 'right', 'bottom', 'left'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  examples: {
    basic: { title: 'Basic', render: () => `<art-popover>\n  <art-button slot="trigger" variant="outline">Open popover</art-button>\n  <h4>Dimensions</h4>\n  <p class="muted">Set the dimensions for the layer.</p>\n${dimensions}\n</art-popover>`, note: 'Click the trigger to open; Escape, a click outside or focus leaving closes it. Focus moves into the panel and back to the trigger.' },
    open: { title: 'Open', render: () => `<art-popover open>\n  <art-button slot="trigger" variant="outline">Open popover</art-button>\n  <h4>Dimensions</h4>\n  <p class="muted">Set the dimensions for the layer.</p>\n${dimensions}\n</art-popover>`, note: 'Controlled with the `open` attribute; `open-change` reports user interaction.' },
    placements: { title: 'Placements', render: () => ['top', 'right', 'bottom', 'left'].map((p) => `<art-popover placement="${p}">\n  <art-button slot="trigger" variant="outline">${p[0]!.toUpperCase()}${p.slice(1)}</art-button>\n  <p>Popover on ${p === 'top' || p === 'bottom' ? p : 'the ' + p}</p>\n</art-popover>`).join('\n'), note: '`placement` is the preferred side (`top`, `right`, `bottom`, `left`, with `-start` / `-end` alignments); the panel flips when there is no room.' },
  },
  render: ({ variant }) => `<art-popover placement="${variant}" open>\n  <art-button slot="trigger" variant="outline">Trigger</art-button>\n  <p>Popover on ${variant}</p>\n</art-popover>`,
  docs: {
    description: 'Displays rich content in a portal, triggered by a button. shadcn/ui parity, on the platform top layer.',
    usage: 'Slot the trigger as `trigger`; everything else is the content. `open` reflects the state; `open-change` fires on user interaction. React `onOpenChange`, Vue `v-model:open`, Angular `[open]` / `(openChange)`.',
    requires: ['base'],
    keyboard: [['Enter / Space on the trigger', 'Toggle'], ['Tab', 'Move through the content; leaving it closes the popover'], ['Escape', 'Close and return focus to the trigger']],
    roles: 'The panel is a non-modal `role="dialog"` that receives focus on open; the trigger carries `aria-haspopup="dialog"` and `aria-expanded`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    states: 'Open / closed with enter and exit motion. No hover, active, disabled, loading or invalid state of its own.',
    tokens: [['`--art-color-bg-popover`, `--art-color-fg-default`', 'panel'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-popover`', 'frame'], ['`--art-space-4`, `--art-space-72`', 'padding and width'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-space-2`', 'enter / exit motion and slide']],
    dos: [['Use it for a small form or details tied to one control', 'Use it for a whole page of content (use a Sheet)'], ['Keep one popover open at a time', 'Nest popovers three deep']],
  },
};
