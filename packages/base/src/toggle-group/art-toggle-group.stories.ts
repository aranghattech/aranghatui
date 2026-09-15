import type { ComponentStories } from '@artui/stories';
const bold = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>`;
const italic = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>`;
const underline = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>`;
const items = `\n  <art-toggle value="bold" aria-label="Toggle bold"><art-icon>${bold}</art-icon></art-toggle>\n  <art-toggle value="italic" aria-label="Toggle italic"><art-icon>${italic}</art-icon></art-toggle>\n  <art-toggle value="underline" aria-label="Toggle underline"><art-icon>${underline}</art-icon></art-toggle>\n`;

export const stories: ComponentStories = {
  tag: 'art-toggle-group',
  tier: 'base',
  variants: ['default', 'outline'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-toggle-group type="multiple" value="bold" aria-label="Text formatting">${items}</art-toggle-group>` },
    single: { title: 'Single', render: () => `<art-toggle-group type="single" value="italic" aria-label="Text formatting">${items}</art-toggle-group>`, note: '`type="single"` keeps at most one item pressed; pressing it again clears the value.' },
    outline: { title: 'Outline', render: () => `<art-toggle-group variant="outline" type="multiple" value="bold,italic" aria-label="Text formatting">${items}</art-toggle-group>` },
    sizes: { title: 'Sizes', render: () => `<art-toggle-group size="sm" value="bold" aria-label="Small">${items}</art-toggle-group>\n<art-toggle-group value="bold" aria-label="Medium">${items}</art-toggle-group>\n<art-toggle-group size="lg" value="bold" aria-label="Large">${items}</art-toggle-group>` },
    disabled: { title: 'Disabled', render: () => `<art-toggle-group disabled value="bold" aria-label="Text formatting">${items}</art-toggle-group>` },
  },
  render: ({ variant, size, state }) => `<art-toggle-group variant="${variant}" size="${size}" value="bold" aria-label="Text formatting"${state === 'disabled' ? ' disabled' : ''}>${items}</art-toggle-group>`,
  focusTarget: 'art-toggle[value="bold"] button',
  docs: {
    description: 'A set of two-state buttons that can be toggled on or off. shadcn/ui parity.',
    usage: 'Items are `<art-toggle value="…">`; the group owns `value` (string for `single`, array — comma-separated as an attribute — for `multiple`) and emits one `change`. `variant`, `size` and `disabled` on the group apply to every item.',
    keyboard: [['Tab', 'Focus the group (one tab stop)'], ['Arrow Left / Right', 'Move between items (swapped in RTL)'], ['Home / End', 'First / last item'], ['Space / Enter', 'Toggle the focused item']],
    roles: '`role="group"` on the host (`aria-label` goes there); each item is a button with `aria-pressed` and its own `aria-label` when icon-only.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    states: 'Item states as Toggle; `disabled` on the group disables every item. `invalid` and `loading` are not applicable.',
    tokens: [['`--art-radius-md`', 'outer corners (items join their edges)'], ['`--art-shadow-raised`, `--art-color-border-default`', 'outline variant'], ['Toggle tokens', 'items']],
    dos: [['Use `single` for one-of choices like alignment', 'Use it for navigation (use Tabs)'], ['Give every icon-only item an `aria-label`', 'Rely on tooltips for the name']],
  },
};
