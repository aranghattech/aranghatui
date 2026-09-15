import type { ComponentStories } from '@artui/stories';

const items = (open = 'item-1') => `  <art-accordion-item value="item-1"${open === 'item-1' ? ' open' : ''}>\n    <span slot="trigger">Product Information</span>\n    <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>\n  </art-accordion-item>\n  <art-accordion-item value="item-2"${open === 'item-2' ? ' open' : ''}>\n    <span slot="trigger">Shipping Details</span>\n    <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days.</p>\n  </art-accordion-item>\n  <art-accordion-item value="item-3">\n    <span slot="trigger">Return Policy</span>\n    <p>We stand behind our products with a comprehensive 30-day return policy.</p>\n  </art-accordion-item>`;

export const stories: ComponentStories = {
  tag: 'art-accordion',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-accordion value="item-1">\n${items()}\n</art-accordion>`, note: 'Each item is a native `<details>`; with `type="single"` (default) the accordion keeps only one open. `value` reflects the open item and `value-change` reports user toggles.' },
    multiple: { title: 'Multiple', render: () => `<art-accordion type="multiple" value="item-1,item-2">\n${items('item-1').replace('value="item-2"', 'value="item-2" open')}\n</art-accordion>`, note: '`type="multiple"` lets any number of items stay open; `value` becomes a list.' },
    disabled: { title: 'Disabled', render: () => `<art-accordion disabled>\n${items('')}\n</art-accordion>` },
  },
  render: ({ state }) => `<art-accordion value="item-1"${state === 'disabled' ? ' disabled' : ''}>\n${items()}\n</art-accordion>`,
  focusTarget: 'art-accordion-item summary',
  docs: {
    description: 'A vertically stacked set of interactive headings that each reveal a section of content. shadcn/ui parity, on native `<details>`.',
    usage: 'Put `art-accordion-item`s with a `value` inside; slot each title as `trigger` and the content in the default slot. Bind `value` (string, or a list for `type="multiple"`) and listen to `value-change`. React `onValueChange`, Vue `v-model:value`, Angular `[value]` / `(valueChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Move to the next trigger (every trigger is a tab stop, as in the native element)'], ['Enter / Space', 'Toggle the section (native `<summary>`)'], ['↓ / ↑', 'Move focus to the next / previous trigger'], ['Home / End', 'First / last trigger']],
    roles: 'Native `<details>` / `<summary>` per item — the expanded state needs no ARIA. In a `single` accordion the component closes the other items (the native `name` grouping cannot span shadow roots).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
    states: '`focus-visible` (ring on the trigger) and `disabled` are implemented; open / closed is the native state. `hover` underlines the trigger. `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-color-border-default`, `--art-border-width`', 'item dividers'], ['`--art-space-4`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-radius-md`', 'trigger and content'], ['`--art-color-fg-muted`, `--art-size-icon-md`', 'chevron'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring'], ['`--art-duration-base`, `--art-ease-out`', 'chevron and height motion']],
    dos: [['Use it for a few related sections (FAQ, settings groups)', 'Hide the main content of a page in an accordion'], ['Keep titles short and parallel', 'Write full sentences as triggers']],
  },
};
