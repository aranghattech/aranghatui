import { Checkbox, Label } from '@aranghat/base-react';

export default function Checked() {
  return (
    <>
      <Checkbox id="terms-2" checked />
      <Label htmlFor="terms-2">Accept terms and conditions</Label>
    </>
  );
}
