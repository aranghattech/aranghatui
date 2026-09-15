import type { ComponentStories } from '@artui/stories';

const chevron = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-button-group',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'focus-visible'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-button-group>\n  <art-button variant="outline">Archive</art-button>\n  <art-button variant="outline">Report</art-button>\n  <art-button variant="outline">Snooze</art-button>\n</art-button-group>`, note: 'Neighbours share one border and only the outer corners stay rounded. Works with every button variant.' },
    vertical: { title: 'Vertical', render: () => `<art-button-group orientation="vertical">\n  <art-button variant="outline">Top</art-button>\n  <art-button variant="outline">Middle</art-button>\n  <art-button variant="outline">Bottom</art-button>\n</art-button-group>` },
    sizes: { title: 'Sizes', render: () => `<art-button-group>\n  <art-button variant="outline" size="sm">Small</art-button>\n  <art-button variant="outline" size="sm">Small</art-button>\n</art-button-group>\n<art-button-group>\n  <art-button variant="outline" size="lg">Large</art-button>\n  <art-button variant="outline" size="lg">Large</art-button>\n</art-button-group>`, note: 'The group has no size of its own — size the buttons.' },
    nested: { title: 'Nested', render: () => `<art-button-group>\n  <art-button-group>\n    <art-button variant="outline">1</art-button>\n    <art-button variant="outline">2</art-button>\n    <art-button variant="outline">3</art-button>\n  </art-button-group>\n  <art-button-group>\n    <art-button variant="outline">Next</art-button>\n  </art-button-group>\n</art-button-group>`, note: 'A group of groups is spaced instead of joined; each inner group keeps its own corners.' },
    'with-separator': { title: 'With separator', render: () => `<art-button-group>\n  <art-button variant="secondary">Copy</art-button>\n  <art-separator orientation="vertical"></art-separator>\n  <art-button variant="secondary">Paste</art-button>\n</art-button-group>`, note: 'Filled variants have no border, so a vertical `art-separator` draws the split.' },
    split: { title: 'Split button', render: () => `<art-button-group>\n  <art-button>Update</art-button>\n  <art-button icon aria-label="More options">\n    ${chevron}\n  </art-button>\n</art-button-group>` },
    'with-input': { title: 'With input', render: () => `<art-button-group>\n  <art-input placeholder="Search…" aria-label="Search"></art-input>\n  <art-button variant="outline">Search</art-button>\n</art-button-group>`, note: 'Inputs and native selects join the group the same way; the input grows to fill the row.' },
    'with-text': { title: 'With text', render: () => `<art-button-group>\n  <art-button-group-text>$</art-button-group-text>\n  <art-input placeholder="0.00" aria-label="Amount"></art-input>\n  <art-button-group-text>USD</art-button-group-text>\n</art-button-group>`, note: '`art-button-group-text` is a muted, bordered label that stretches to the height of its neighbours.' },
  },
  render: ({ size }) => `<art-button-group>\n  <art-button variant="outline" size="${size}">Archive</art-button>\n  <art-button variant="outline" size="${size}">Report</art-button>\n  <art-button variant="outline" size="${size}">Snooze</art-button>\n</art-button-group>`,
  focusTarget: 'art-button-group art-button button',
  docs: {
    description: 'A container that groups related buttons together with consistent styling. shadcn/ui parity.',
    usage: 'Put buttons (any variant), inputs, native selects, `art-button-group-text` labels or vertical separators inside; nest groups to space clusters. `orientation="vertical"` stacks them.',
    keyboard: [['Tab', 'Moves through the buttons in order — every button stays its own tab stop'], ['Enter / Space', 'Activate the focused button (native)']],
    roles: '`role="group"` on the host; children keep their native semantics. Name the group with `aria-label` when its purpose is not obvious from the buttons.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    states: 'The group itself has no states; `focus-visible` is shown because a focused item is lifted above its neighbours so the ring is never clipped. Other states belong to the buttons.',
    tokens: [['`--art-border-width`', 'border overlap between neighbours'], ['`--art-radius-md`', 'outer corners'], ['`--art-space-2`', 'gap between nested groups'], ['`--art-color-bg-muted`, `--art-color-border-default`, `--art-control-padding-x-md`, `--art-font-size-sm`, `--art-font-weight-medium`', '`art-button-group-text`']],
    dos: [['Group actions that belong together (Archive · Report · Snooze)', 'Group unrelated actions to save space'], ['Use one variant across a group', 'Mix filled and outline buttons in one group'], ['Use Toggle Group for exclusive on/off choices', 'Fake a toggle group with buttons']],
  },
};
