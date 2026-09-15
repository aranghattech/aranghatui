import type { ComponentStories } from '@artui/stories';

const account = `  <art-tab value="account">Account</art-tab>\n  <art-tab value="password">Password</art-tab>\n  <art-tab-panel value="account">\n    <art-card>\n      <h3 slot="title">Account</h3>\n      <p slot="description">Make changes to your account here. Click save when you're done.</p>\n      <art-field>\n        <art-label slot="label">Name</art-label>\n        <art-input value="Pedro Duarte"></art-input>\n      </art-field>\n      <art-button slot="footer">Save changes</art-button>\n    </art-card>\n  </art-tab-panel>\n  <art-tab-panel value="password">\n    <art-card>\n      <h3 slot="title">Password</h3>\n      <p slot="description">Change your password here. After saving, you'll be logged out.</p>\n      <art-field>\n        <art-label slot="label">Current password</art-label>\n        <art-input type="password"></art-input>\n      </art-field>\n      <art-button slot="footer">Save password</art-button>\n    </art-card>\n  </art-tab-panel>`;

export const stories: ComponentStories = {
  tag: 'art-tabs',
  tier: 'components',
  variants: ['default', 'line'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-tabs value="account">\n${account}\n</art-tabs>`, note: 'Tabs and panels are siblings inside `art-tabs`; the shared `value` selects one of each. Arrow keys move between tabs and select as they go.' },
    line: { title: 'Line', render: () => `<art-tabs value="overview" variant="line">\n  <art-tab value="overview">Overview</art-tab>\n  <art-tab value="analytics">Analytics</art-tab>\n  <art-tab value="reports">Reports</art-tab>\n  <art-tab-panel value="overview"><p>Overview of the last 30 days.</p></art-tab-panel>\n  <art-tab-panel value="analytics"><p>Traffic and conversion.</p></art-tab-panel>\n  <art-tab-panel value="reports"><p>Downloadable reports.</p></art-tab-panel>\n</art-tabs>`, note: '`variant="line"` drops the filled list for an underline.' },
    vertical: { title: 'Vertical', render: () => `<art-tabs value="general" orientation="vertical">\n  <art-tab value="general">General</art-tab>\n  <art-tab value="security">Security</art-tab>\n  <art-tab value="billing">Billing</art-tab>\n  <art-tab-panel value="general"><p>General settings.</p></art-tab-panel>\n  <art-tab-panel value="security"><p>Security settings.</p></art-tab-panel>\n  <art-tab-panel value="billing"><p>Billing settings.</p></art-tab-panel>\n</art-tabs>`, note: '`orientation="vertical"` stacks the list beside the panels; ↑ / ↓ move between tabs.' },
    disabled: { title: 'Disabled tab', render: () => `<art-tabs value="one">\n  <art-tab value="one">One</art-tab>\n  <art-tab value="two" disabled>Two</art-tab>\n  <art-tab value="three">Three</art-tab>\n  <art-tab-panel value="one"><p>First panel.</p></art-tab-panel>\n  <art-tab-panel value="two"><p>Never reachable.</p></art-tab-panel>\n  <art-tab-panel value="three"><p>Third panel.</p></art-tab-panel>\n</art-tabs>` },
    manual: { title: 'Manual activation', render: () => `<art-tabs value="a" activation="manual">\n  <art-tab value="a">Alpha</art-tab>\n  <art-tab value="b">Beta</art-tab>\n  <art-tab-panel value="a"><p>Arrows move focus; Enter or Space selects.</p></art-tab-panel>\n  <art-tab-panel value="b"><p>Beta panel.</p></art-tab-panel>\n</art-tabs>`, note: '`activation="manual"` is for panels that are expensive to show: arrows only move focus.' },
  },
  render: ({ variant, state }) => `<art-tabs value="one" variant="${variant}">\n  <art-tab value="one">One</art-tab>\n  <art-tab value="two"${state === 'disabled' ? ' disabled' : ''}>Two</art-tab>\n  <art-tab value="three">Three</art-tab>\n  <art-tab-panel value="one"><p>First panel.</p></art-tab-panel>\n  <art-tab-panel value="two"><p>Second panel.</p></art-tab-panel>\n  <art-tab-panel value="three"><p>Third panel.</p></art-tab-panel>\n</art-tabs>`,
  focusTarget: 'art-tab[value="one"]',
  docs: {
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time. shadcn/ui parity.',
    usage: 'Put `art-tab`s and `art-tab-panel`s with matching `value`s inside `art-tabs`; bind `value` and listen to `value-change`. React `onValueChange`, Vue `v-model:value`, Angular `[value]` / `(valueChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the selected tab, then the panel'], ['← / → (↑ / ↓ when vertical)', 'Move between tabs and select (`activation="automatic"`)'], ['Home / End', 'First / last tab'], ['Enter / Space', 'Select the focused tab (`activation="manual"`)']],
    roles: '`tablist` with `aria-orientation`; each `art-tab` host is `role="tab"` with `aria-selected` and `aria-controls`; each panel is `role="tabpanel"` with `aria-labelledby`. Only the selected tab is in the tab order.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
    states: '`hover`, `focus-visible`, `disabled` and the selected state are implemented. `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-color-bg-muted`, `--art-radius-lg`, `--art-space-1`, `--art-space-9`', 'tab list'], ['`--art-color-bg-canvas`, `--art-shadow-raised`, `--art-radius-md`', 'selected tab (default)'], ['`--art-color-fg-default`, `--art-space-0-5`', 'underline (line)'], ['`--art-color-fg-default` (70 % mix for unselected tabs), `--art-font-size-sm`, `--art-font-weight-medium`, `--art-space-2`, `--art-space-1-5`', 'tab text and padding'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Use tabs for peer sections of one thing', 'Use tabs as navigation between pages'], ['Keep labels to one or two words', 'Put counts or long phrases in a tab'], ['Prefer automatic activation', 'Use manual activation unless panels are heavy']],
  },
};
