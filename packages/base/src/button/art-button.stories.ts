import type { ComponentStories } from '@artui/stories';

const mail = `<art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></art-icon>`;
const chevron = (slot: string) => `<art-icon slot="${slot}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></art-icon>`;
const plus = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-icon>`;
const row = (inner: string) => `<div style="display:flex;flex-wrap:wrap;gap:var(--art-space-3);align-items:center">${inner}</div>`;

export const stories: ComponentStories = {
  tag: 'art-button',
  tier: 'base',
  variants: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
  sizes: ['sm', 'md', 'lg'],
  // `invalid` does not apply: a button has no validity state (documented on the page).
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled', 'loading'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-button>Button</art-button>` },
    variants: {
      title: 'Variants',
      render: () => row(['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'].map((v) => `<art-button variant="${v}">${v[0]!.toUpperCase()}${v.slice(1)}</art-button>`).join('')),
    },
    sizes: { title: 'Sizes', render: () => row(`<art-button size="sm">Small</art-button><art-button>Medium</art-button><art-button size="lg">Large</art-button>`) },
    'with-icon': { title: 'With icon', render: () => row(`<art-button variant="outline">${mail}Login with Email</art-button><art-button>Next${chevron('end')}</art-button>`) },
    'icon-only': { title: 'Icon only', render: () => row(`<art-button variant="outline" icon size="sm" aria-label="Add">${plus}</art-button><art-button variant="outline" icon aria-label="Add">${plus}</art-button><art-button variant="outline" icon size="lg" aria-label="Add">${plus}</art-button>`) },
    full: {
      title: 'Full width',
      render: () => `<div style="display:grid;gap:var(--art-space-2);max-width:var(--art-container-xs)"><art-button full>Continue</art-button><art-button full variant="outline">Back</art-button></div>`,
      note: 'The host stretches and the control fills it. Use it for stacked forms, dialog footers and any grid cell — a content-sized button in a stretched host looks right but only takes clicks on its own box.',
    },
    rounded: {
      title: 'Rounded',
      render: () => row(`<art-button rounded>Button</art-button><art-button rounded variant="outline">Outline</art-button><art-button rounded icon aria-label="Add">${plus}</art-button>`),
      note: 'A pill, opt-in per button: it uses the `full` step of the one radius scale, so it stays consistent with every other surface (N4). An `icon` button becomes a circle. Inside a Button Group the group still squares the joined corners.',
    },
    loading: { title: 'Loading', render: () => `<art-button loading>Please wait</art-button>` },
    disabled: { title: 'Disabled', render: () => row(`<art-button disabled>Disabled</art-button><art-button variant="outline" disabled>Disabled</art-button>`) },
    link: { title: 'As link', render: () => `<art-button href="https://ui.shadcn.com/docs/components/button" target="_blank" rel="noreferrer" variant="outline">Open shadcn</art-button>` },
    form: {
      title: 'In a form',
      render: () => `<form onsubmit="event.preventDefault(); this.dataset.submitted = 'true'" style="display:flex;gap:var(--art-space-2);align-items:center"><input name="email" required placeholder="you@example.com" style="font:inherit;padding:var(--art-space-2)"><art-button type="submit">Subscribe</art-button><art-button type="reset" variant="ghost">Reset</art-button></form>`,
    },
  },
  render: ({ variant, size, state }) =>
    `<art-button variant="${variant}" size="${size}"${state === 'disabled' ? ' disabled' : ''}${state === 'loading' ? ' loading' : ''}>${variant === 'link' ? 'Link' : 'Button'}</art-button>`,
  focusTarget: 'art-button button',
};
