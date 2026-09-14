import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-hello',
  tier: 'base',
  variants: ['default', 'outline'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
  directional: false,
  examples: {
    basic: { title: 'Basic', render: () => `<art-hello name="artui"></art-hello>` },
    outline: { title: 'Outline', render: () => `<art-hello name="artui" variant="outline"></art-hello>` },
  },
  render: ({ variant, state }) =>
    `<art-hello name="artui" variant="${variant}"${state === 'disabled' ? ' disabled' : ''}></art-hello>`,
  // Playwright CSS pierces shadow roots on its own; never use `>>>` (it parses as a child combinator).
  focusTarget: 'art-hello button',
};
