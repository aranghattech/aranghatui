import { Checkbox, Label } from '@aranghat/base-react';

export default function WithText() {
  return (
    <>
      <Checkbox id="terms-3" aria-describedby="terms-3-help" />
      <Label htmlFor="terms-3">Accept terms and conditions</Label>
      <p id="terms-3-help">You agree to our Terms of Service and Privacy Policy.</p>
    </>
  );
}
