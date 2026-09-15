import type { ComponentStories } from '@artui/stories';

const steps = (attrs = '') => `<art-onboarding-wizard${attrs}>\n  <art-wizard-step label="Account" description="Sign in details">\n    <art-field>\n      <art-label slot="label">Email</art-label>\n      <art-input type="email" value="ada@example.com"></art-input>\n    </art-field>\n  </art-wizard-step>\n  <art-wizard-step label="Profile" description="Tell us about you">\n    <art-field>\n      <art-label slot="label">Full name</art-label>\n      <art-input value="Ada Lovelace"></art-input>\n    </art-field>\n    <art-field>\n      <art-label slot="label">Role</art-label>\n      <art-native-select value="engineer">\n        <option value="engineer">Engineer</option>\n        <option value="designer">Designer</option>\n        <option value="manager">Manager</option>\n      </art-native-select>\n    </art-field>\n  </art-wizard-step>\n  <art-wizard-step label="Team" description="Invite your colleagues" optional>\n    <art-field>\n      <art-label slot="label">Invite by email</art-label>\n      <art-input placeholder="name@company.com"></art-input>\n      <p slot="description">You can skip this and invite people later.</p>\n    </art-field>\n  </art-wizard-step>\n  <art-wizard-step label="Done" description="Review and finish">\n    <p style="margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Everything is set. Press Finish to open your workspace.</p>\n  </art-wizard-step>\n</art-onboarding-wizard>`;

export const stories: ComponentStories = {
  tag: 'art-onboarding-wizard',
  tier: 'widgets',
  variants: ['horizontal', 'vertical'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'block',
  examples: {
    basic: { title: 'Basic', render: () => steps(' step="2"'), note: '`art-wizard-step`s with a `label` and `description` fill the stepper; `step` (1-based) picks the visible one. Back / Next move, the last step shows Finish (`finish` event). `step-change` is cancelable — validate the current step and `preventDefault()` to stay.' },
    optional: { title: 'Optional step', render: () => steps(' step="3"'), note: 'An `optional` step offers Skip.' },
    vertical: { title: 'Vertical', render: () => steps(' orientation="vertical" step="2"'), note: '`orientation="vertical"` puts the stepper beside the content; `horizontal` (the default) puts it above.' },
    loading: { title: 'Loading', render: () => steps(' step="4" loading'), note: '`loading` puts a spinner on Next / Finish and ignores moves while you save.' },
  },
  render: ({ variant }) => steps(` orientation="${variant}" step="2"`),
  docs: {
    description: 'A multi-step onboarding flow: a stepper with numbers and check marks, one step at a time, Back / Next / Finish and Skip on optional steps. Compiled widget (ADR-0010).',
    usage: 'Slot `art-wizard-step`s (`label`, `description`, `optional`) with their content; control `step` (1-based) and listen to `step-change` (cancelable, `detail.step` / `detail.from`) and `finish`. React `<OnboardingWizard step onStepChange onFinish>`, Vue `v-model:step @finish`, Angular `[step] (stepChange) (finish)`.',
    requires: ['base'],
    keyboard: [['Tab', 'The current step\'s controls, then Back, Skip and Next / Finish'], ['Enter / Space', 'Activate a button; focus moves to the new step\'s content']],
    roles: 'The stepper is a `<nav>` with an ordered list; the current item carries `aria-current="step"`, and a visually hidden live region announces "Step n of m: label". Each step is a `role="group"` named by its label; hidden steps are `hidden`. Focus moves to the panel after a step change.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html',
    states: 'Complete / current / upcoming steps, `optional` steps with Skip, `loading`. Interactive states belong to the buttons and fields.',
    tokens: [['`--art-space-6`, `--art-space-8`, `--art-space-4`, `--art-space-2`', 'gaps, indicator size, footer padding'], ['`--art-color-primary-solid`, `--art-color-fg-on-primary`, `--art-color-border-default`, `--art-ring-width`', 'indicators and connectors'], ['`--art-color-fg-default`, `--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-size-xs`, `--art-font-weight-medium`', 'labels and descriptions'], ['`--art-radius-full`, `--art-duration-base`, `--art-ease-out`', 'indicator shape and motion']],
    dos: [['Keep three to five steps with short labels', 'Chain ten screens of settings'], ['Validate on `step-change` and keep the user on the step with an error', 'Let a broken step through'], ['Mark truly optional steps `optional`', 'Offer Skip on required data']],
  },
};
