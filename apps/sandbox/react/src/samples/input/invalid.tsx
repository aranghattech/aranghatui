import { Input, Label } from '@aranghat/base-react';

export default function Invalid() {
  return (
    <>
      <Label htmlFor="email-2">Email</Label>
      <Input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error" />
      <p id="email-2-error">Enter a valid email address.</p>
    </>
  );
}
