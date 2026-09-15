import { SettingsPage } from '@aranghat/widgets-react';
import { Button, Field, Input, Label, NativeSelect, Textarea } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <SettingsPage sectionHeading="Profile" sectionDescription="This is how others will see you on the site.">
        <a slot="nav" href="#profile" aria-current="page">Profile</a>
        <a slot="nav" href="#account">Account</a>
        <a slot="nav" href="#appearance">Appearance</a>
        <a slot="nav" href="#notifications">Notifications</a>
        <a slot="nav" href="#display">Display</a>
        <Field>
          <Label slot="label">Username</Label>
          <Input value="shadcn" />
          <p slot="description">This is your public display name. It can be your real name or a pseudonym.</p>
        </Field>
        <Field>
          <Label slot="label">Email</Label>
          <NativeSelect>
            <option value="">Select a verified email to display</option>
            <option value="m@example.com">m@example.com</option>
            <option value="m@google.com">m@google.com</option>
          </NativeSelect>
          <p slot="description">You can manage verified email addresses in your email settings.</p>
        </Field>
        <Field>
          <Label slot="label">Bio</Label>
          <Textarea value="I own a computer." />
          <p slot="description">You can @mention other users and organizations to link to them.</p>
        </Field>
        <div>
          <Button>Update profile</Button>
        </div>
      </SettingsPage>
    </>
  );
}
