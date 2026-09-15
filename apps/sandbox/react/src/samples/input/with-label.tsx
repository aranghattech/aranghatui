import { Input, Label } from '@aranghat/base-react';

export default function WithLabel() {
  return (
    <>
      <Label htmlFor="email-1">Email</Label>
      <Input id="email-1" type="email" placeholder="Email" />
    </>
  );
}
