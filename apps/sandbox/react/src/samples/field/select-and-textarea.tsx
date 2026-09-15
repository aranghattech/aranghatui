import { Field, Label, NativeSelect, Textarea } from '@aranghat/base-react';

export default function SelectAndTextarea() {
  return (
    <>
      <Field>
        <Label slot="label">Department</Label>
        <NativeSelect>
          <option value="eng">Engineering</option>
          <option value="design">Design</option>
        </NativeSelect>
      </Field>
      <Field>
        <Label slot="label">Feedback</Label>
        <Textarea placeholder="Your feedback…" />
        <p slot="description">Max 500 characters.</p>
      </Field>
    </>
  );
}
