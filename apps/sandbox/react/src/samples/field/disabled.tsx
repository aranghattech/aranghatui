import { Field, Input, Label } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Field>
        <Label slot="label">Username</Label>
        <Input value="shadcn" disabled />
        <p slot="description">Contact support to change your username.</p>
      </Field>
    </>
  );
}
