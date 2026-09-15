import type { ComponentStories } from '@artui/stories';

const tags = Array.from({ length: 30 }, (_, i) => `v1.2.0-beta.${30 - i}`);
const list = tags.map((t) => `  <art-item size="sm">\n    <p slot="title">${t}</p>\n  </art-item>`).join('\n');
const artwork = Array.from({ length: 6 }, (_, i) => `  <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>`).join('\n');

export const stories: ComponentStories = {
  tag: 'art-scroll-area',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-scroll-area style="height: 18rem; width: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md)">\n${list}\n</art-scroll-area>`, note: 'Size the host; the content scrolls inside with a thin scrollbar. The viewport is a tab stop, so keyboard users can scroll it. Here the rows are small Items.' },
    horizontal: { title: 'Horizontal', render: () => `<art-scroll-area orientation="horizontal" style="width: 24rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md); padding: var(--art-space-4); display: flex; gap: var(--art-space-4)">\n${artwork}\n</art-scroll-area>`, note: '`orientation="horizontal"` scrolls sideways; `both` allows both axes.' },
  },
  render: () => `<art-scroll-area style="height: 10rem; width: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md)">\n${list}\n</art-scroll-area>`,
  focusTarget: 'art-scroll-area [part="viewport"]',
  docs: {
    description: 'Augments native scroll functionality for custom, cross-browser styling. shadcn/ui parity, on native overflow.',
    usage: 'Give the host a size (and a border or radius if you like); the content scrolls inside. `orientation` picks the axis.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the viewport'], ['↑ / ↓ / Page Up / Page Down / Home / End', 'Scroll (native)']],
    roles: 'A plain scroll container with `tabindex="0"`, so it is reachable and scrollable from the keyboard; content keeps its own semantics.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`focus-visible` (ring on the viewport) is implemented; other states do not apply.',
    tokens: [['`--art-color-border-default`', 'scrollbar thumb'], ['`--art-space-2-5`, `--art-space-0-5`, `--art-radius-full`', 'scrollbar size and shape (WebKit)'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Use it for lists and panes with a fixed height', 'Nest scroll areas'], ['Let the browser scroll (wheel, touch, keys)', 'Reimplement scrolling with drag handlers']],
  },
};
