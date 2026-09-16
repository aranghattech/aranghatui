import { OnboardingWizard, WizardStep } from '@aranghat/widgets-react';
import { Field, Input, Label, NativeSelect } from '@aranghat/base-react';

export default function Optional() {
  return (
    <>
      <OnboardingWizard step="3">
        <WizardStep label="Account" description="Sign in details">
          <Field>
            <Label slot="label">Email</Label>
            <Input type="email" value="ada@example.com" />
          </Field>
        </WizardStep>
        <WizardStep label="Profile" description="Tell us about you">
          <Field>
            <Label slot="label">Full name</Label>
            <Input value="Ada Lovelace" />
          </Field>
          <Field>
            <Label slot="label">Role</Label>
            <NativeSelect value="engineer">
              <option value="engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </NativeSelect>
          </Field>
        </WizardStep>
        <WizardStep label="Team" description="Invite your colleagues" optional>
          <Field>
            <Label slot="label">Invite by email</Label>
            <Input placeholder="name@company.com" />
            <p slot="description">You can skip this and invite people later.</p>
          </Field>
        </WizardStep>
        <WizardStep label="Done" description="Review and finish">
          <p style={{ margin: '0', fontSize: 'var(--art-font-size-sm)', color: 'var(--art-color-fg-muted)' }}>Everything is set. Press Finish to open your workspace.</p>
        </WizardStep>
      </OnboardingWizard>
    </>
  );
}
