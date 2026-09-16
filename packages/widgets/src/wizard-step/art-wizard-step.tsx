import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Wizard Step — one step of an `art-onboarding-wizard`: its `label` / `description` feed the
 * stepper, its content is shown while it is the current step (the wizard hides the others).
 *
 * @slot - The step content (a form, a summary).
 */
@Component({ tag: 'art-wizard-step', styleUrl: 'art-wizard-step.css', shadow: true })
export class ArtWizardStep {
  @Prop({ reflect: true }) label = '';
  @Prop() description?: string;
  /** May be skipped (the wizard offers a Skip button on it). */
  @Prop({ reflect: true }) optional = false;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
