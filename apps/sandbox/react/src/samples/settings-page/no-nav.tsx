import { SettingsPage } from '@aranghat/widgets-react';
import { Button, Field, Input, Label } from '@aranghat/base-react';

export default function NoNav() {
  return (
    <>
      <SettingsPage heading="Workspace" description="Settings for this workspace." sectionHeading="General">
        <Button slot="actions" variant="outline">Invite members</Button>
        <Field>
          <Label slot="label">Workspace name</Label>
          <Input value="Acme" />
        </Field>
        <div>
          <Button>Save</Button>
        </div>
      </SettingsPage>
    </>
  );
}
