import { SettingsPage } from '@aranghat/widgets-react';
import { Button, Field, Label, NativeSelect, Radio, RadioGroup } from '@aranghat/base-react';

export default function Appearance() {
  return (
    <>
      <SettingsPage sectionHeading="Appearance" sectionDescription="Customize the appearance of the app. Automatically switch between day and night themes.">
        <a slot="nav" href="#profile">Profile</a>
        <a slot="nav" href="#account">Account</a>
        <a slot="nav" href="#appearance" aria-current="page">Appearance</a>
        <a slot="nav" href="#notifications">Notifications</a>
        <a slot="nav" href="#display">Display</a>
        <Field>
          <Label slot="label">Font</Label>
          <NativeSelect value="inter">
            <option value="inter">Inter</option>
            <option value="manrope">Manrope</option>
            <option value="system">System</option>
          </NativeSelect>
          <p slot="description">Set the font you want to use in the dashboard.</p>
        </Field>
        <Field>
          <Label slot="label">Theme</Label>
          <RadioGroup value="light">
            <Radio value="light">Light</Radio>
            <Radio value="dark">Dark</Radio>
          </RadioGroup>
          <p slot="description">Select the theme for the dashboard.</p>
        </Field>
        <div>
          <Button>Update preferences</Button>
        </div>
      </SettingsPage>
    </>
  );
}
