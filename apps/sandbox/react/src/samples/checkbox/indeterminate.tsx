import { Checkbox, Label } from '@aranghat/base-react';

export default function Indeterminate() {
  return (
    <>
      <Checkbox id="all" indeterminate />
      <Label htmlFor="all">Select all</Label>
    </>
  );
}
