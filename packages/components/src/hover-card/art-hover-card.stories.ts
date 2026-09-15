import type { ComponentStories } from '@artui/stories';

const card = `  <h4>@nextjs</h4>\n  <p>The React Framework – created and maintained by @vercel.</p>\n  <p class="muted">Joined December 2021</p>`;

export const stories: ComponentStories = {
  tag: 'art-hover-card',
  tier: 'components',
  variants: ['top', 'right', 'bottom', 'left'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  examples: {
    basic: { title: 'Basic', render: () => `<art-hover-card>\n  <art-button slot="trigger" variant="link">@nextjs</art-button>\n${card}\n</art-hover-card>`, note: 'Rest the pointer on the trigger for a moment; the card stays open while the pointer is on it. Keyboard focus opens it too; Escape closes.' },
    open: { title: 'Open', render: () => `<art-hover-card open>\n  <art-button slot="trigger" variant="link">@nextjs</art-button>\n${card}\n</art-hover-card>`, note: 'Controlled with the `open` attribute.' },
    placements: { title: 'Placements', render: () => ['top', 'right', 'bottom', 'left'].map((p) => `<art-hover-card placement="${p}">\n  <art-button slot="trigger" variant="link">${p[0]!.toUpperCase()}${p.slice(1)}</art-button>\n  <p>Card on ${p === 'top' || p === 'bottom' ? p : 'the ' + p}</p>\n</art-hover-card>`).join('\n'), note: '`placement` is the preferred side (`top`, `right`, `bottom`, `left`); the card flips when there is no room.' },
    'with-link': { title: 'On a link', render: () => `<art-hover-card>\n  <a slot="trigger" href="#">Read the docs</a>\n  <p>A short preview of the page behind the link, so people can decide whether to follow it.</p>\n</art-hover-card>` },
  },
  render: ({ variant }) => `<art-hover-card placement="${variant}" open>\n  <art-button slot="trigger" variant="link">Trigger</art-button>\n  <p>Hover card on ${variant}</p>\n</art-hover-card>`,
  docs: {
    description: 'For sighted users to preview content available behind a link. shadcn/ui parity, on the platform top layer.',
    usage: 'Slot the link or button as `trigger`; the rest is the card. Opens after the hover-card intent delay (longer than a tooltip), stays open while hovered, and also opens on keyboard focus.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the trigger — the card opens'], ['Escape', 'Close the card']],
    roles: 'The card is plain content: it previews, it does not replace, the destination. The trigger keeps its own name and behaviour.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Open / closed with enter and exit motion. No hover, active, disabled, loading or invalid state of its own.',
    tokens: [['`--art-color-bg-popover`, `--art-color-fg-default`', 'card'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-popover`', 'frame'], ['`--art-space-4`, `--art-space-64`', 'padding and width'], ['`--art-duration-hover-card-open`, `--art-duration-hover-card-close`', 'hover intent'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-space-2`', 'enter / exit motion and slide']],
    dos: [['Preview what is behind a link', 'Hide the only way to reach content in it'], ['Keep it read-only', 'Put forms in a hover card (use a Popover)']],
  },
};
