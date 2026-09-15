import type { ComponentStories } from '@artui/stories';

const nav = (current = 'Profile') => ['Profile', 'Account', 'Appearance', 'Notifications', 'Display'].map((n) => `  <a slot="nav" href="#${n.toLowerCase()}"${n === current ? ' aria-current="page"' : ''}>${n}</a>`).join('\n');
const profile = `  <art-field>\n    <art-label slot="label">Username</art-label>\n    <art-input value="shadcn"></art-input>\n    <p slot="description">This is your public display name. It can be your real name or a pseudonym.</p>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Email</art-label>\n    <art-native-select>\n      <option value="">Select a verified email to display</option>\n      <option value="m@example.com">m@example.com</option>\n      <option value="m@google.com">m@google.com</option>\n    </art-native-select>\n    <p slot="description">You can manage verified email addresses in your email settings.</p>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Bio</art-label>\n    <art-textarea value="I own a computer."></art-textarea>\n    <p slot="description">You can @mention other users and organizations to link to them.</p>\n  </art-field>\n  <div>\n    <art-button>Update profile</art-button>\n  </div>`;

export const stories: ComponentStories = {
  tag: 'art-settings-page',
  tier: 'widgets',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'block',
  examples: {
    basic: { title: 'Basic', render: () => `<art-settings-page section-heading="Profile" section-description="This is how others will see you on the site.">\n${nav()}\n${profile}\n</art-settings-page>`, note: 'Section links go in `nav` (`aria-current="page"` marks the open one); `section-heading` / `section-description` title the content; the form is the default slot.' },
    appearance: { title: 'Another section', render: () => `<art-settings-page section-heading="Appearance" section-description="Customize the appearance of the app. Automatically switch between day and night themes.">\n${nav('Appearance')}\n  <art-field>\n    <art-label slot="label">Font</art-label>\n    <art-native-select value="inter">\n      <option value="inter">Inter</option>\n      <option value="manrope">Manrope</option>\n      <option value="system">System</option>\n    </art-native-select>\n    <p slot="description">Set the font you want to use in the dashboard.</p>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Theme</art-label>\n    <art-radio-group value="light">\n      <art-radio value="light">Light</art-radio>\n      <art-radio value="dark">Dark</art-radio>\n    </art-radio-group>\n    <p slot="description">Select the theme for the dashboard.</p>\n  </art-field>\n  <div>\n    <art-button>Update preferences</art-button>\n  </div>\n</art-settings-page>`, note: 'The same page with another section open: swap the `aria-current` link and the content.' },
    'no-nav': { title: 'Single section', render: () => `<art-settings-page heading="Workspace" description="Settings for this workspace." section-heading="General">\n  <art-button slot="actions" variant="outline">Invite members</art-button>\n  <art-field>\n    <art-label slot="label">Workspace name</art-label>\n    <art-input value="Acme"></art-input>\n  </art-field>\n  <div>\n    <art-button>Save</art-button>\n  </div>\n</art-settings-page>`, note: 'Without `nav` links the content takes the full width; `actions` sit beside the page heading.' },
  },
  render: () => `<art-settings-page section-heading="Profile" section-description="This is how others will see you on the site.">\n${nav()}\n${profile}\n</art-settings-page>`,
  docs: {
    description: 'The settings layout: page heading, a section nav and the open section with its heading, description and form. shadcn/ui forms example, compiled (ADR-0010).',
    usage: 'Put `<a slot="nav">` links (or router links) with `aria-current="page"` on the open one, set `section-heading` / `section-description`, and slot the section\'s form as the default content. `heading` / `description` title the page; `actions` sit beside them. React `<SettingsPage sectionHeading>`, Vue and Angular likewise.',
    requires: ['base'],
    keyboard: [['Tab', 'The section links, then the form'], ['Enter', 'Follow a link']],
    roles: 'A `<nav>` named by `nav-label` holds the section links (`aria-current="page"` on the open one); the page and section headings are `<h2>` / `<h3>`; separators are decorative. Forms keep their own semantics.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html',
    states: 'Current section link (`aria-current`), hover and focus-visible on links. Everything else belongs to the form controls.',
    tokens: [['`--art-space-6`, `--art-space-8`, `--art-space-12`, `--art-space-4`, `--art-space-1`, `--art-space-9`', 'padding, gaps, link size'], ['`--art-container-2xl`', 'content width'], ['`--art-font-size-2xl`, `--art-font-weight-bold`, `--art-font-tracking-tight`, `--art-font-size-lg`, `--art-font-weight-medium`, `--art-font-size-sm`, `--art-color-fg-muted`', 'headings and descriptions'], ['`--art-color-bg-muted`, `--art-color-bg-accent`, `--art-radius-md`', 'current and hovered links'], ['`--art-ring-width`, `--art-color-ring`', 'link focus ring']],
    dos: [['Group settings into a few named sections', 'Put every setting on one endless page'], ['Mark the open section with `aria-current`', 'Rely on colour alone to show it'], ['Keep one primary button per section', 'Save every field with its own button']],
  },
};
