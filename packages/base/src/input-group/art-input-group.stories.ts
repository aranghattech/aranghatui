import type { ComponentStories } from '@artui/stories';

const search = `<art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-input-group',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-input-group>\n  ${search}\n  <art-input placeholder="Search…" aria-label="Search"></art-input>\n  <span slot="end">12 results</span>\n</art-input-group>`, note: 'The group draws one frame around the control and its addons. Inline addons take `slot="start"` / `slot="end"`.' },
    'with-button': { title: 'With button', render: () => `<art-input-group>\n  <art-input type="email" placeholder="Email" aria-label="Email"></art-input>\n  <art-button slot="end" size="sm" variant="secondary">Subscribe</art-button>\n</art-input-group>`, note: 'Buttons inside a group are `size="sm"`; they keep their own focus ring and tab stop.' },
    'with-kbd': { title: 'With kbd', render: () => `<art-input-group>\n  ${search}\n  <art-input placeholder="Search…" aria-label="Search"></art-input>\n  <art-kbd slot="end">⌘K</art-kbd>\n</art-input-group>` },
    'with-spinner': { title: 'With spinner', render: () => `<art-input-group>\n  <art-input placeholder="Searching…" aria-label="Search" value="design"></art-input>\n  <span slot="end"><art-spinner size="sm" label="Searching"></art-spinner> Searching…</span>\n</art-input-group>` },
    'with-textarea': { title: 'With textarea', render: () => `<art-input-group>\n  <art-textarea placeholder="Ask, search or chat…" aria-label="Message"></art-textarea>\n  <span slot="block-end">\n    Line 1, Column 1\n    <art-button size="sm" variant="ghost">Run</art-button>\n  </span>\n</art-input-group>`, note: '`block-start` / `block-end` addons are full-width rows — a toolbar under a textarea, for example.' },
    'prefix-suffix': { title: 'Prefix and suffix', render: () => `<art-input-group>\n  <span slot="start">https://</span>\n  <art-input placeholder="example" aria-label="Domain"></art-input>\n  <span slot="end">.com</span>\n</art-input-group>` },
    disabled: { title: 'Disabled', render: () => `<art-input-group>\n  ${search}\n  <art-input placeholder="Search…" aria-label="Search" disabled></art-input>\n</art-input-group>`, note: 'The whole group dims when its control is disabled.' },
    invalid: { title: 'Invalid', render: () => `<art-input-group>\n  <span slot="start">https://</span>\n  <art-input value="not a domain" aria-label="Domain" invalid></art-input>\n</art-input-group>`, note: 'The invalid ring moves to the group frame.' },
  },
  render: ({ state }) => `<art-input-group>\n  ${search}\n  <art-input placeholder="Search…" aria-label="Search"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid value="!!"' : ''}></art-input>\n  <span slot="end">⌘K</span>\n</art-input-group>`,
  focusTarget: 'art-input-group art-input input',
  docs: {
    description: 'Groups an input or textarea with addons — icons, text, buttons, kbd hints and full-width rows — in one field frame. shadcn/ui parity.',
    usage: 'Put an `art-input` or `art-textarea` in the default slot; addons go in `start`, `end`, `block-start` or `block-end`. The control keeps its own API (`value`, `input`/`change`, `v-model`, `ngModel`); the group only draws the frame. For a single icon or short text, `art-input`\'s own `start` / `end` slots are enough.',
    keyboard: [['Tab', 'Focus the control; a button addon is its own tab stop'], ['Typing', 'Goes to the control as usual']],
    roles: '`role="group"` on the host. The control and any buttons keep their native semantics and names; addon text is plain content.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`focus-visible` (ring on the frame), `disabled` (whole group dims) and `invalid` (destructive ring on the frame) follow the control. `hover`, `active` and `loading` do not apply.',
    tokens: [['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`', 'frame'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring'], ['`--art-color-destructive-solid`', 'invalid ring'], ['`--art-control-padding-x-field-md`, `--art-space-2`, `--art-space-1`', 'addon spacing'], ['`--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-weight-medium`', 'addon text'], ['`--art-size-icon-md`', 'addon icons']],
    dos: [['Use it when a field needs a button, kbd hint or toolbar', 'Use it for a lone icon (use Input\'s own slots)'], ['Keep addon buttons `size="sm"` and `ghost` / `secondary`', 'Put a primary call to action inside the field'], ['One control per group', 'Stack several inputs in one frame']],
  },
};
