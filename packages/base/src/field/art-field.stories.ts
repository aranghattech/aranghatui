import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-field',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default', 'invalid'],
  directional: false,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-field>\n  <art-label slot="label">Username</art-label>\n  <art-input placeholder="shadcn"></art-input>\n  <p slot="description">Choose a unique username for your account.</p>\n</art-field>`, note: 'The label names the control and the description becomes its accessible description — no ids to wire by hand.' },
    error: { title: 'With error', render: () => `<art-field>\n  <art-label slot="label">Email</art-label>\n  <art-input type="email" value="not-an-email"></art-input>\n  <p slot="error">Enter a valid email address.</p>\n</art-field>`, note: 'Content in the `error` slot marks the control invalid and is announced as an alert.' },
    horizontal: { title: 'Horizontal', render: () => `<art-field orientation="horizontal">\n  <art-checkbox></art-checkbox>\n  <art-label slot="label">Accept terms and conditions</art-label>\n  <p slot="description">You agree to our Terms of Service and Privacy Policy.</p>\n</art-field>`, note: '`horizontal` puts the control first with label and description beside it — checkboxes and switches.' },
    'select-and-textarea': { title: 'Other controls', render: () => `<art-field>\n  <art-label slot="label">Department</art-label>\n  <art-native-select>\n    <option value="eng">Engineering</option>\n    <option value="design">Design</option>\n  </art-native-select>\n</art-field>\n<art-field>\n  <art-label slot="label">Feedback</art-label>\n  <art-textarea placeholder="Your feedback…"></art-textarea>\n  <p slot="description">Max 500 characters.</p>\n</art-field>` },
    'field-set': { title: 'Field set', render: () => `<art-field-set>\n  <span slot="legend">Address</span>\n  <art-field>\n    <art-label slot="label">Street</art-label>\n    <art-input placeholder="123 Main St"></art-input>\n  </art-field>\n  <art-field>\n    <art-label slot="label">City</art-label>\n    <art-input placeholder="New York"></art-input>\n  </art-field>\n</art-field-set>`, note: '`art-field-set` is a native `<fieldset>` with a legend; `disabled` disables every control inside.' },
    'field-group': { title: 'Field group', render: () => `<art-field-group>\n  <art-field>\n    <art-label slot="label">Name</art-label>\n    <art-input placeholder="Ada Lovelace"></art-input>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Email</art-label>\n    <art-input type="email" placeholder="ada@example.com"></art-input>\n  </art-field>\n  <art-field orientation="horizontal">\n    <art-switch></art-switch>\n    <art-label slot="label">Email me about product updates</art-label>\n  </art-field>\n</art-field-group>`, note: '`art-field-group` stacks fields with form spacing.' },
    disabled: { title: 'Disabled', render: () => `<art-field>\n  <art-label slot="label">Username</art-label>\n  <art-input value="shadcn" disabled></art-input>\n  <p slot="description">Contact support to change your username.</p>\n</art-field>`, note: 'A disabled control dims its label (muted foreground, so the text stays readable).' },
  },
  render: ({ state }) => `<art-field${state === 'invalid' ? ' invalid' : ''}>\n  <art-label slot="label">Username</art-label>\n  <art-input placeholder="shadcn"></art-input>\n  <p slot="description">Choose a unique username.</p>\n</art-field>`,
  docs: {
    description: 'Combines a label, a control, a description and an error into one accessible form field. shadcn/ui parity.',
    usage: 'Slot an `art-label` as `label`, the control in the default slot, and `<p>`s as `description` / `error`. The field fills in `for`, `aria-describedby` and `invalid` for you. Wrap several in `art-field-group`; group related ones in `art-field-set`.',
    keyboard: [['Tab', 'Focus the control (the label is not a tab stop)'], ['Click on the label', 'Focuses or toggles the control (native label behaviour, across the shadow boundary)']],
    roles: 'No role of its own. The control keeps its native semantics; the label names it, description and error are its `aria-describedby`, and the error carries `role="alert"`. `art-field-set` is a native `<fieldset>`/`<legend>`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`invalid` (from the prop or the error slot) and `disabled` (mirrored from the control) are implemented; the rest belong to the control.',
    tokens: [['`--art-space-2`, `--art-space-3`, `--art-space-1`', 'vertical and horizontal spacing'], ['`--art-space-6`', 'field group and field set spacing'], ['`--art-font-size-sm`, `--art-font-line-height-sm`', 'description and error text'], ['`--art-color-fg-muted`', 'description'], ['`--art-color-destructive-fg`', 'error'], ['`--art-font-size-md`, `--art-font-weight-medium`', 'legend']],
    dos: [['Write the error as the fix (“Enter a valid email”)', 'Write “Invalid input”'], ['Keep descriptions to one line', 'Repeat the label in the description'], ['Use `art-field-set` for a radio group with a question', 'Fake a legend with a bold label']],
  },
};
