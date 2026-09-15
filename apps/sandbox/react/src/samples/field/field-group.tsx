import { Field, FieldGroup, Input, Label, Switch } from '@aranghat/base-react';

export default function FieldGroupExample() {
  return (
    <>
      <FieldGroup>
        <Field>
          <Label slot="label">Name</Label>
          <Input placeholder="Ada Lovelace" />
        </Field>
        <Field>
          <Label slot="label">Email</Label>
          <Input type="email" placeholder="ada@example.com" />
        </Field>
        <Field orientation="horizontal">
          <Switch />
          <Label slot="label">Email me about product updates</Label>
        </Field>
      </FieldGroup>
    </>
  );
}
