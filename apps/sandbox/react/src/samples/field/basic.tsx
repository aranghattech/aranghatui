import { Field, Input, Label } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Field>
        <Label slot="label">Username</Label>
        <Input placeholder="shadcn" />
        <p slot="description">Choose a unique username for your account.</p>
      </Field>
    </>
  );
}
