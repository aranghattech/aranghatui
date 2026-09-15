import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-date-picker',
  tier: 'components',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  screenshot: 'viewport',
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-date-picker aria-label="Date"></art-date-picker>`, note: 'Click (or ↓) opens the calendar; picking a day closes it and `change` reports the ISO `value` plus `date`. Escape closes and returns focus to the trigger.' },
    open: { title: 'Open', render: () => `<art-date-picker value="2026-09-15" aria-label="Date" open></art-date-picker>`, note: 'Controlled with `open`.' },
    range: { title: 'Range', render: () => `<art-date-picker mode="range" value="2026-09-08/2026-09-17" placeholder="Pick a date range" aria-label="Dates" open></art-date-picker>`, note: '`mode="range"` shows two months and closes once both ends are picked; `value` is `start/end`.' },
    'date-of-birth': { title: 'Date of birth', render: () => `<art-date-picker caption-layout="dropdown" min="1900-01-01" max="2026-12-31" placeholder="Select date" aria-label="Date of birth"></art-date-picker>`, note: 'Dropdown caption and `min` / `max` for dates far from today.' },
    sizes: { title: 'Sizes', render: () => `<art-date-picker size="sm" aria-label="Small"></art-date-picker>\n<art-date-picker aria-label="Medium"></art-date-picker>\n<art-date-picker size="lg" aria-label="Large"></art-date-picker>` },
    disabled: { title: 'Disabled', render: () => `<art-date-picker value="2026-09-15" aria-label="Date" disabled></art-date-picker>` },
    form: { title: 'In a form', manual: true, render: () => `<form onsubmit="event.preventDefault()">\n  <art-label for="dob">Date of birth</art-label>\n  <art-date-picker id="dob" name="dob" caption-layout="dropdown" min="1900-01-01" max="2026-12-31" required></art-date-picker>\n  <art-button type="submit">Submit</art-button>\n</form>`, note: 'Form-associated: the ISO value is submitted under `name`; `required` participates in validation.' },
  },
  render: ({ size, state }) => `<art-date-picker size="${size}" value="2026-09-15" aria-label="Date"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}></art-date-picker>`,
  focusTarget: 'art-date-picker button',
  docs: {
    description: 'A date picker component with range and presets. shadcn/ui parity: a Calendar in a Popover behind a field-height trigger, form-associated.',
    usage: 'Bind `value` (`YYYY-MM-DD` or `start/end`) and listen to `change` (`detail.date`, `detail.start`, `detail.end` are `Date`s). Calendar options (`min`, `max`, `disabledDates`, `caption-layout`, `locale`) pass straight through. React `onChange`, Vue `v-model`, Angular `[(ngModel)]`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the trigger'], ['Enter / Space / ↓', 'Open the calendar on the chosen day'], ['Arrows, Page Up / Down, Home / End', 'Move in the calendar (see Calendar)'], ['Enter / Space', 'Pick the focused day and close'], ['Escape', 'Close and return to the trigger']],
    roles: 'The trigger is a `<button aria-haspopup="dialog">` with `aria-expanded` and `aria-controls`; the popover is `role="dialog"` named after the field and holds the Calendar grid. Name the picker with `aria-label`, `aria-labelledby` or `art-label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/',
    states: '`focus-visible`, `disabled` and `invalid` on the trigger; open / closed with enter and exit motion. `hover`, `active` and `loading` do not apply.',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`', 'trigger sizes'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`', 'trigger frame'], ['`--art-color-fg-muted`, `--art-size-icon-md`', 'placeholder and icon'], ['`--art-color-bg-popover`, `--art-shadow-popover`', 'popover'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Show the format users will see (`format="medium"` for dense tables)', 'Show raw ISO strings'], ['Use `mode="range"` for stays and reporting periods', 'Use two single pickers for one range'], ['Bound with `min` / `max`', 'Accept dates the backend rejects']],
  },
};
