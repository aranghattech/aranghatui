import { Checkbox, Label } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </>
  );
}
