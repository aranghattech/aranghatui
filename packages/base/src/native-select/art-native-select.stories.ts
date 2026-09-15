import type { ComponentStories } from '@artui/stories';

const opts = `\n  <option value="">Select status</option>\n  <option value="todo">Todo</option>\n  <option value="in-progress">In Progress</option>\n  <option value="done">Done</option>\n  <option value="cancelled">Cancelled</option>\n`;

export const stories: ComponentStories = {
  tag: 'art-native-select',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-native-select aria-label="Status">${opts}</art-native-select>` },
    'with-label': { title: 'With label', render: () => `<art-label for="status">Status</art-label>\n<art-native-select id="status" value="in-progress">${opts}</art-native-select>` },
    groups: { title: 'Option groups', render: () => `<art-native-select aria-label="Country">\n  <optgroup label="Europe">\n    <option value="de">Germany</option>\n    <option value="fr">France</option>\n  </optgroup>\n  <optgroup label="Asia">\n    <option value="in">India</option>\n    <option value="jp">Japan</option>\n  </optgroup>\n</art-native-select>` },
    sizes: { title: 'Sizes', render: () => `<art-native-select size="sm" aria-label="Small">${opts}</art-native-select>\n<art-native-select aria-label="Medium">${opts}</art-native-select>\n<art-native-select size="lg" aria-label="Large">${opts}</art-native-select>` },
    disabled: { title: 'Disabled', render: () => `<art-native-select aria-label="Status" disabled>${opts}</art-native-select>` },
    invalid: { title: 'Invalid', render: () => `<art-label for="status-2">Status</art-label>\n<art-native-select id="status-2" invalid required aria-describedby="status-2-error">${opts}</art-native-select>\n<p id="status-2-error">Please choose a status.</p>` },
  },
  render: ({ size, state }) => `<art-native-select size="${size}" aria-label="Status"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}>${opts}</art-native-select>`,
  focusTarget: 'art-native-select select',
  docs: {
    description: 'A native select element styled to match the system. Uses the platform picker — the right choice for forms and mobile. shadcn/ui parity, form-associated.',
    usage: 'Write plain `<option>` / `<optgroup>` children; they are mirrored into the control and kept in sync. `change` bubbles from the host with `detail.value`; `v-model` and `ngModel` work out of the box. For a custom listbox with search, use Select (Tier 3).',
    keyboard: [['Tab', 'Focus the select'], ['Space / Enter / Alt+Down', 'Open the native picker'], ['Arrow keys', 'Change the selection (platform behaviour)']],
    roles: 'Native `<select>` semantics; names and descriptions resolved across the shadow boundary from `aria-label`, `aria-labelledby` / `art-label` and `aria-describedby`.',
    states: '`focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply to a native select.',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`, `--art-space-9`', 'sizes, chevron inset'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`', 'frame'], ['`--art-color-fg-default`, `--art-color-fg-muted`', 'text, chevron'], ['`--art-size-icon-md`', 'chevron'], ['`--art-color-destructive-solid`', 'invalid ring'], ['`--art-ring-*`', 'focus ring'], ['`--art-shadow-raised`', 'elevation']],
    dos: [['Use it for short lists in forms', 'Use it when the user must search or see rich options (use Select)'], ['Give it a placeholder option with an empty value when nothing is preselected', 'Preselect the first real option silently']],
  },
};
