import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-separator',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: false,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<p>An open-source UI component library.</p>\n<art-separator></art-separator>\n<p>Built for HTML, React, Vue and Angular.</p>` },
    vertical: { title: 'Vertical', frame: 'inline', render: () => `<art-button variant="ghost">Blog</art-button>\n<art-separator orientation="vertical"></art-separator>\n<art-button variant="ghost">Docs</art-button>\n<art-separator orientation="vertical"></art-separator>\n<art-button variant="ghost">Source</art-button>`, note: 'A vertical rule stretches to the height of its flex row.' },
    semantic: { title: 'Semantic', render: () => `<p>Account</p>\n<art-separator semantic></art-separator>\n<p>Billing</p>`, note: 'Rules are decorative by default (`role="none"`). `semantic` exposes `role="separator"` when the rule genuinely structures content.' },
  },
  render: () => `<p>Above</p>\n<art-separator></art-separator>\n<p>Below</p>`,
  docs: {
    description: 'Visually or semantically separates content. shadcn/ui parity, a native `<hr>`.',
    usage: 'Horizontal by default; `orientation="vertical"` inside a flex row. Decorative unless `semantic` is set.',
    keyboard: [['None', 'Not focusable']],
    roles: 'Native `<hr>`, hidden with `role="none"` by default; `semantic` restores the implicit `separator` role and sets `aria-orientation` for vertical rules.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — no hover, focus, active, disabled, loading or invalid state.',
    tokens: [['`--art-color-border-default`', 'rule colour'], ['`--art-border-width`', 'rule thickness (the one border width)']],
    dos: [['Use it to group related content', 'Stack separators to add spacing (use margin)'], ['Set `semantic` only when the split matters to a screen reader', 'Expose every decorative rule as a separator']],
  },
};
