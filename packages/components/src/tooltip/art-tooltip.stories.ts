import type { ComponentStories } from '@artui/stories';

const plus = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-tooltip',
  tier: 'components',
  variants: ['top', 'right', 'bottom', 'left'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  examples: {
    basic: { title: 'Basic', render: () => `<art-tooltip>\n  <art-button slot="trigger" variant="outline">Hover</art-button>\n  Add to library\n</art-tooltip>`, note: 'Rest the pointer on the trigger, focus it with the keyboard, or press and hold on touch. The trigger is described by the text (`aria-description`), so screen readers get it even while the bubble is closed.' },
    placements: { title: 'Placements', render: () => `<art-tooltip placement="top">\n  <art-button slot="trigger" variant="outline">Top</art-button>\n  Tooltip on top\n</art-tooltip>\n<art-tooltip placement="right">\n  <art-button slot="trigger" variant="outline">Right</art-button>\n  Tooltip on the right\n</art-tooltip>\n<art-tooltip placement="bottom">\n  <art-button slot="trigger" variant="outline">Bottom</art-button>\n  Tooltip on the bottom\n</art-tooltip>\n<art-tooltip placement="left">\n  <art-button slot="trigger" variant="outline">Left</art-button>\n  Tooltip on the left\n</art-tooltip>`, note: '`placement` is the preferred side; the bubble flips when there is no room.' },
    'icon-button': { title: 'Icon button', render: () => `<art-tooltip>\n  <art-button slot="trigger" variant="outline" icon aria-label="Add">\n    ${plus}\n  </art-button>\n  Add a new item\n</art-tooltip>`, note: 'An icon-only button still needs its own `aria-label`; the tooltip adds a description.' },
    delays: { title: 'Delays', render: () => `<art-tooltip open-delay="0" close-delay="0">\n  <art-button slot="trigger" variant="outline">Instant</art-button>\n  No hover intent\n</art-tooltip>`, note: '`open-delay` / `close-delay` override the `--art-duration-hover-*` tokens (ms).' },
  },
  render: ({ variant }) => `<art-tooltip placement="${variant}" open>\n  <art-button slot="trigger" variant="outline">Trigger</art-button>\n  Tooltip on ${variant}\n</art-tooltip>`,
  docs: {
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. shadcn/ui parity, on the platform top layer.',
    usage: 'Slot the trigger as `trigger` and put the text in the default slot. `open` reflects the state; `open-change` fires on user interaction. React `onOpenChange`, Vue `v-model:open`, Angular `[open]` / `(openChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the trigger — the tooltip opens'], ['Escape', 'Close the tooltip'], ['Hover / press-and-hold', 'Open after the hover-intent delay']],
    roles: 'The bubble is `role="tooltip"`; the trigger gets `aria-description` with the tooltip text, so the label is available whether or not the bubble is visible. The trigger keeps its own name.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
    states: 'Open / closed with enter and exit motion (`--animate-overlay-in|out`). No hover, active, disabled, loading or invalid state of its own.',
    tokens: [['`--art-color-fg-default`, `--art-color-bg-canvas`', 'bubble fill and text'], ['`--art-radius-md`, `--art-space-3`, `--art-space-1-5`, `--art-font-size-xs`', 'bubble shape and text'], ['`--art-space-2-5`, `--art-radius-xs`', 'arrow'], ['`--art-duration-hover-open`, `--art-duration-hover-close`', 'hover intent'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-space-2`', 'enter / exit motion and slide']],
    dos: [['Keep it to a few words', 'Put actions or links in a tooltip'], ['Use it to name icon-only controls in addition to `aria-label`', 'Rely on the tooltip as the only name'], ['Let hover intent do its job', 'Set `open-delay="0"` everywhere']],
  },
};
