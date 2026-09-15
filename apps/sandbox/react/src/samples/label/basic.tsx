import { Input, Label } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Label htmlFor="email">Your email address</Label>
      <Input id="email" type="email" placeholder="Email" />
    </>
  );
}
