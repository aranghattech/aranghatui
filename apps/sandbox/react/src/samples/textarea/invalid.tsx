import { Label, Textarea } from '@aranghat/base-react';

export default function Invalid() {
  return (
    <>
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" value="Too short" invalid aria-describedby="bio-error" />
      <p id="bio-error">Bio must be at least 10 characters.</p>
    </>
  );
}
