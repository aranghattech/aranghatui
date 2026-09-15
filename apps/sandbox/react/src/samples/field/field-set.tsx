import { Field, FieldSet, Input, Label } from '@aranghat/base-react';

export default function FieldSetExample() {
  return (
    <>
      <FieldSet>
        <span slot="legend">Address</span>
        <Field>
          <Label slot="label">Street</Label>
          <Input placeholder="123 Main St" />
        </Field>
        <Field>
          <Label slot="label">City</Label>
          <Input placeholder="New York" />
        </Field>
      </FieldSet>
    </>
  );
}
