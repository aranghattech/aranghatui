import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-slider',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-slider value="33" aria-label="Volume"></art-slider>` },
    range: { title: 'Range', render: () => `<art-slider value="25,75" aria-label="Price"></art-slider>`, note: 'Two thumbs: `value="25,75"` (an array as a property). Thumbs cannot cross; each thumb announces its own bounds.' },
    step: { title: 'Steps', render: () => `<art-slider value="40" step="10" aria-label="Opacity"></art-slider>` },
    sizes: { title: 'Sizes', render: () => `<art-slider size="sm" value="30" aria-label="Small"></art-slider>\n<art-slider value="50" aria-label="Medium"></art-slider>\n<art-slider size="lg" value="70" aria-label="Large"></art-slider>` },
    vertical: { title: 'Vertical', frame: 'inline', render: () => `<art-slider orientation="vertical" value="60" aria-label="Level"></art-slider>` },
    disabled: { title: 'Disabled', render: () => `<art-slider value="50" disabled aria-label="Volume"></art-slider>` },
  },
  render: ({ size, state }) => `<art-slider size="${size}" value="40" aria-label="Volume"${state === 'disabled' ? ' disabled' : ''}></art-slider>`,
  focusTarget: 'art-slider [role="slider"]',
  docs: {
    description: 'An input where the user selects a value from within a given range. shadcn/ui parity, one or two thumbs, form-associated.',
    usage: '`input` fires continuously while dragging or stepping, `change` when the interaction ends; both bubble from the host with `detail.value` (a number, or a number[] for a range). `v-model` and `ngModel` (single value) work out of the box.',
    keyboard: [['Tab', 'Focus a thumb'], ['Arrow Right / Up', 'Increase by `step` (Right/Left swap in RTL)'], ['Arrow Left / Down', 'Decrease by `step`'], ['Page Up / Page Down', 'Increase / decrease by a tenth of the range'], ['Home / End', 'Minimum / maximum']],
    roles: 'Each thumb is `role="slider"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and `aria-orientation`; the host `aria-label` names each thumb (suffixed "minimum" / "maximum" for a range).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/',
    states: 'hover (thumb grows), active (dragging), focus-visible, disabled are implemented; `invalid` and `loading` are not applicable.',
    tokens: [['`--art-space-*`', 'track thickness (1 / 1.5 / 2) and thumb size (3 / 4 / 5)'], ['`--art-color-bg-muted`, `--art-color-primary-solid`', 'track and range'], ['`--art-color-bg-canvas`, `--art-color-primary-solid`', 'thumb fill and border'], ['`--art-radius-full`', 'shape'], ['`--art-ring-*`', 'focus ring'], ['`--art-shadow-raised`', 'thumb elevation'], ['`--art-duration-fast`, `--art-ease-out`', 'thumb motion']],
    dos: [['Show the current value next to the slider', 'Rely on the thumb position alone'], ['Use a step that matches meaningful increments', 'Use a slider for precise numeric entry (use Input)']],
  },
};
