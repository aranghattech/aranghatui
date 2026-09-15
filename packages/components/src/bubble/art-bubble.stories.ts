import type { ComponentStories } from '@artui/stories';

const VARIANTS = ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] as const;

export const stories: ComponentStories = {
  tag: 'art-bubble',
  tier: 'components',
  variants: [...VARIANTS],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'thread',
  examples: {
    basic: { title: 'Basic', render: () => `<art-bubble>Hey! Are we still on for lunch tomorrow?</art-bubble>\n<art-bubble variant="muted" align="end">Yes — 12:30 at the usual place.<span slot="reactions" role="img" aria-label="thumbs up">👍</span></art-bubble>`, note: 'A bubble takes up to 80 % of its row; `align="end"` puts it on the sender\'s side. Reactions hang off an edge in a pill.' },
    variants: { title: 'Variants', render: () => VARIANTS.map((v) => `<art-bubble variant="${v}">${v[0].toUpperCase() + v.slice(1)} bubble</art-bubble>`).join('\n'), note: '`default` is the primary fill for the sender; `muted` / `secondary` for the other side; `tinted` is a light primary wash; `outline`, `ghost` (no surface) and `destructive` for system or error content.' },
    alignment: { title: 'Alignment', render: () => `<art-bubble variant="muted">Received on the start side.</art-bubble>\n<art-bubble align="end">Sent on the end side.</art-bubble>` },
    group: { title: 'Bubble group', render: () => `<art-bubble-group>\n  <art-bubble variant="muted">First of three.</art-bubble>\n  <art-bubble variant="muted">Second, from the same sender.</art-bubble>\n  <art-bubble variant="muted">Third.</art-bubble>\n</art-bubble-group>`, note: '`art-bubble-group` stacks consecutive bubbles from one sender with a tighter gap.' },
    links: { title: 'Links and buttons', render: () => `<art-bubble variant="outline" href="https://example.com" target="_blank" rel="noreferrer">Open the shared document ↗</art-bubble>\n<art-bubble variant="muted">Reply with <a href="#">a link</a> inside the text.</art-bubble>`, note: 'A bubble with `href` is one big link with the focus ring and a hover tint; a link inside the text stays a normal link.' },
    reactions: { title: 'Reactions', render: () => `<art-bubble variant="muted" reactions-side="bottom" reactions-align="start"><span>Reactions at the bottom start.</span><span slot="reactions" role="img" aria-label="heart and fire">❤️ 🔥</span></art-bubble>\n<art-bubble align="end" reactions-side="top" reactions-align="end"><span>Reactions at the top end.</span><span slot="reactions" role="img" aria-label="3 laughing">😂 3</span></art-bubble>`, note: 'Give the reactions slot `role="img"` and an `aria-label` so screen readers hear one unit.' },
  },
  render: ({ variant }) => `<art-bubble variant="${variant}">A ${variant} bubble with enough text to wrap onto a second line in a narrow column.</art-bubble>`,
  docs: {
    description: 'Displays conversational content in a message bubble. shadcn/ui parity: seven variants, alignment, reactions and grouping.',
    usage: 'Put the text (or media) inside; set `variant` and `align`. Add `<span slot="reactions">` for a reactions pill and wrap consecutive bubbles in `art-bubble-group`. Compose with `art-message` for avatar, header and footer.',
    requires: ['base'],
    keyboard: [['Tab', 'Reaches a bubble with `href` (and any link or button inside)'], ['Enter', 'Follows the link']],
    roles: 'A bubble is plain content; with `href` its surface is an `<a>`. Reactions should carry `role="img"` and an `aria-label`. Meaning must not rely on colour alone — the alignment and text carry it.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/link/',
    states: 'Only `hover` and `focus-visible` apply, and only to a bubble with `href` (or links inside). `active`, `disabled`, `loading` and `invalid` do not apply to static content.',
    tokens: [['`--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary`', 'default variant'], ['`--art-color-secondary-solid`, `--art-color-secondary-fg`, `--art-color-bg-muted`, `--art-color-bg-canvas`, `--art-color-border-default`', 'secondary, muted, tinted, outline'], ['`--art-color-destructive-muted`, `--art-color-destructive-fg`', 'destructive'], ['`--art-radius-xl`, `--art-space-3`, `--art-space-2`, `--art-space-1`, `--art-font-size-sm`, `--art-font-line-height-relaxed`', 'surface'], ['`--art-ring-width`, `--art-space-1-5`, `--art-space-0-5`', 'reactions pill']],
    dos: [['Use `default` for the current user and `muted` for others', 'Give every sender the primary fill'], ['Keep one idea per bubble; group consecutive ones', 'Put a whole thread in one bubble'], ['Label reactions for screen readers', 'Rely on the emoji glyph alone']],
  },
};
