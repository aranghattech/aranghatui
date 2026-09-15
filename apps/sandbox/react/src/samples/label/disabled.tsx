import { Input, Label } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Label htmlFor="email-off" disabled>Your email address</Label>
      <Input id="email-off" type="email" placeholder="Email" disabled />
    </>
  );
}
