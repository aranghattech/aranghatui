import { Field, Input, Label } from '@aranghat/base-react';

export default function Error() {
  return (
    <>
      <Field>
        <Label slot="label">Email</Label>
        <Input type="email" value="not-an-email" />
        <p slot="error">Enter a valid email address.</p>
      </Field>
    </>
  );
}
