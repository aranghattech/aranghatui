import type { ComponentStories } from '@artui/stories';

const items = (prefix = '') => `<art-radio value="default">Default</art-radio>\n<art-radio value="comfortable">Comfortable</art-radio>\n<art-radio value="compact"${prefix}>Compact</art-radio>`;

export const stories: ComponentStories = {
  tag: 'art-radio-group',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled', 'invalid'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-radio-group value="comfortable" aria-label="Density">\n  ${items().replace(/\n/g, '\n  ')}\n</art-radio-group>` },
    horizontal: { title: 'Horizontal', render: () => `<art-radio-group orientation="horizontal" value="default" aria-label="Density">\n  ${items().replace(/\n/g, '\n  ')}\n</art-radio-group>` },
    'disabled-item': { title: 'Disabled item', render: () => `<art-radio-group value="default" aria-label="Density">\n  ${items(' disabled').replace(/\n/g, '\n  ')}\n</art-radio-group>` },
    sizes: { title: 'Sizes', render: () => `<art-radio-group orientation="horizontal" size="sm" value="a" aria-label="Small">\n  <art-radio value="a">Small</art-radio>\n</art-radio-group>\n<art-radio-group orientation="horizontal" value="b" aria-label="Medium">\n  <art-radio value="b">Medium</art-radio>\n</art-radio-group>\n<art-radio-group orientation="horizontal" size="lg" value="c" aria-label="Large">\n  <art-radio value="c">Large</art-radio>\n</art-radio-group>` },
    form: { title: 'In a form', manual: true, render: () => `<form onsubmit="event.preventDefault()">\n  <art-radio-group name="notify" required aria-label="Notify me about">\n    <art-radio value="all">All new messages</art-radio>\n    <art-radio value="mentions">Direct messages and mentions</art-radio>\n    <art-radio value="none">Nothing</art-radio>\n  </art-radio-group>\n  <art-button type="submit">Submit</art-button>\n</form>` },
  },
  render: ({ size, state }) => `<art-radio-group size="${size}" value="b" aria-label="Density"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}>\n<art-radio value="a">Default</art-radio>\n<art-radio value="b">Comfortable</art-radio>\n</art-radio-group>`,
  focusTarget: 'art-radio[value="b"] button',
  docs: {
    description: 'A set of checkable buttons, known as radio buttons, where no more than one can be checked at a time. shadcn/ui parity, form-associated.',
    usage: 'Items are `<art-radio value="…">Label</art-radio>` with the label as the default slot, so no wrapper markup. The group owns `value`, emits `change` with `detail.value`, and supports `v-model` / `ngModel`.',
    keyboard: [['Tab', 'Focus the checked item (or the first enabled one)'], ['Arrow Down / Right', 'Move to and select the next item'], ['Arrow Up / Left', 'Move to and select the previous item (Left/Right swap in RTL)'], ['Home / End', 'First / last item'], ['Space', 'Select the focused item']],
    roles: '`role="radiogroup"` on the host (`aria-label` / `aria-labelledby` go there), `role="radio"` + `aria-checked` on each item; each item is named by its slotted label.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
    states: 'All six on items: hover, active, focus-visible, disabled (per item or whole group), invalid (`aria-invalid` on the group). `loading` is not applicable.',
    tokens: [['`--art-size-icon-{sm,md,lg}`', 'item size'], ['`--art-space-3`, `--art-space-4`', 'item gap (vertical / horizontal)'], ['`--art-color-border-default`, `--art-color-primary-solid`', 'ring and indicator'], ['`--art-ring-*`', 'focus ring'], ['`--art-shadow-raised`', 'elevation']],
    dos: [['Use for 2–5 mutually exclusive options', 'Use for a single yes/no (use Checkbox or Switch)'], ['Pre-select a sensible default', 'Leave a required group with no selection and no hint']],
  },
};
