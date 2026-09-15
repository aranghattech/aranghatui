import type { ComponentStories } from '@artui/stories';

const chevrons = `<art-icon slot="actions"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-collapsible',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-collapsible>\n  <art-item slot="trigger" variant="outline">\n    <p slot="title">@peduarte starred 3 repositories</p>\n    ${chevrons}\n  </art-item>\n  <art-item variant="outline">\n    <p slot="title">@radix-ui/primitives</p>\n  </art-item>\n  <art-item variant="outline">\n    <p slot="title">@radix-ui/colors</p>\n  </art-item>\n</art-collapsible>`, note: 'The `trigger` slot becomes the native `<summary>`: click, Enter or Space toggles; the content follows. Anything can be the trigger — here an Item row.' },
    open: { title: 'Open', render: () => `<art-collapsible open>\n  <p slot="trigger">Show details</p>\n  <p>These details start expanded because of the open attribute.</p>\n</art-collapsible>`, note: '`open` reflects the state; `open-change` fires when the user toggles it.' },
    disabled: { title: 'Disabled', render: () => `<art-collapsible disabled>\n  <p slot="trigger">Unavailable section</p>\n  <p>Never shown.</p>\n</art-collapsible>` },
  },
  render: ({ state }) => `<art-collapsible${state === 'disabled' ? ' disabled' : ' open'}>\n  <p slot="trigger">Toggle the details</p>\n  <p>Collapsible content.</p>\n</art-collapsible>`,
  focusTarget: 'art-collapsible summary',
  docs: {
    description: 'An interactive component which expands/collapses a panel. shadcn/ui parity, a native `<details>`.',
    usage: 'Slot the trigger as `trigger` and the content in the default slot. `open` reflects the state; `open-change` reports user toggles. React `onOpenChange`, Vue `v-model:open`, Angular `[open]` / `(openChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the trigger'], ['Enter / Space', 'Toggle (native `<summary>`)']],
    roles: 'Native `<details>` / `<summary>`: the trigger exposes the expanded state without ARIA; the content is hidden from everyone while collapsed.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/',
    states: '`focus-visible` (ring on the trigger) and `disabled` are implemented; open / closed is the native state. `hover`, `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`, `--art-radius-md`', 'trigger focus ring'], ['`--art-duration-base`, `--art-ease-out`', 'height motion (where supported)']],
    dos: [['Put a meaningful label in the trigger', 'Use an icon alone as the trigger'], ['Use Accordion for a set of related sections', 'Stack many Collapsibles by hand']],
  },
};
