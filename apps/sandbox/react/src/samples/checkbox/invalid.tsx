import { Checkbox, Label } from '@aranghat/base-react';

export default function Invalid() {
  return (
    <>
      <Checkbox id="i1" invalid required />
      <Label htmlFor="i1">Required</Label>
    </>
  );
}
