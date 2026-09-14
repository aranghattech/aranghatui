import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-hello-overlay',
  tier: 'modals',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: false,
  examples: {
    basic: { title: 'Basic', render: () => `<art-hello-overlay name="artui" open></art-hello-overlay>` },
  },
  render: () => `<art-hello-overlay name="artui" open></art-hello-overlay>`,
  screenshot: 'viewport',
};
