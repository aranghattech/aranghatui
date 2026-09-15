import { Checkbox, Label } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Checkbox id="d1" disabled />
      <Label htmlFor="d1" disabled>Unavailable</Label>
    </>
  );
}
