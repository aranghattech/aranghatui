import { Checkbox, Field, Label } from '@aranghat/base-react';

export default function Horizontal() {
  return (
    <>
      <Field orientation="horizontal">
        <Checkbox />
        <Label slot="label">Accept terms and conditions</Label>
        <p slot="description">You agree to our Terms of Service and Privacy Policy.</p>
      </Field>
    </>
  );
}
