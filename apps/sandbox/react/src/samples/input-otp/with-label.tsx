import { Field, InputOtp, Label } from '@aranghat/base-react';

export default function WithLabel() {
  return (
    <>
      <Field>
        <Label slot="label">Verification code</Label>
        <InputOtp groupSize="3" />
        <p slot="description">Enter the 6-digit code we sent to your phone.</p>
      </Field>
    </>
  );
}
