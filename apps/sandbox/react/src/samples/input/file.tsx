import { Input, Label } from '@aranghat/base-react';

export default function File() {
  return (
    <>
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </>
  );
}
