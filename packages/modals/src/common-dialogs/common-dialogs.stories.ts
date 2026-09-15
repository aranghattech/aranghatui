import type { ComponentStories } from '@artui/stories';

/**
 * Common Dialogs are an imperative API, not an element: `confirm()`, `alert()` and `prompt()`
 * from `@aranghat/modals` build an Alert Dialog / Dialog on the fly and resolve a promise. The
 * previews are the declarative equivalents of what each call shows; the framework samples are
 * the calls.
 */
const confirmDialog = `<art-alert-dialog>\n  <art-button slot="trigger" variant="outline">Delete account</art-button>\n  <span slot="title">Delete account?</span>\n  <span slot="description">This permanently removes your account and all of its data.</span>\n  <art-button slot="cancel" variant="outline">Cancel</art-button>\n  <art-button slot="action" variant="destructive">Delete</art-button>\n</art-alert-dialog>`;

export const stories: ComponentStories = {
  tag: 'common-dialogs',
  tier: 'modals',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    confirm: { title: 'Confirm', manual: true, render: () => confirmDialog, note: '`confirm({ title, description, actionLabel, cancelLabel, destructive, size })` resolves `true` for the action and `false` for cancel or Escape.' },
    alert: { title: 'Alert', manual: true, render: () => `<art-alert-dialog>\n  <art-button slot="trigger" variant="outline">Show alert</art-button>\n  <span slot="title">Export finished</span>\n  <span slot="description">Your report is ready to download.</span>\n  <art-button slot="action">OK</art-button>\n</art-alert-dialog>`, note: '`alert({ title, description, actionLabel })` shows one button and resolves when the dialog closes.' },
    prompt: { title: 'Prompt', manual: true, render: () => `<art-dialog>\n  <art-button slot="trigger" variant="outline">Rename</art-button>\n  <span slot="title">Rename project</span>\n  <span slot="description">Pick a short, memorable name.</span>\n  <art-field>\n    <art-label slot="label">Name</art-label>\n    <art-input value="Design system"></art-input>\n  </art-field>\n  <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>\n  <art-button slot="footer">OK</art-button>\n</art-dialog>`, note: '`prompt({ title, description, label, defaultValue, placeholder, type, required })` resolves the text for OK or Enter and `null` for cancel or Escape.' },
  },
  render: () => confirmDialog.replace('<art-alert-dialog>', '<art-alert-dialog open>'),
};
