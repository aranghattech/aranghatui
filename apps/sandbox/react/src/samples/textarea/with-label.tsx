import { Label, Textarea } from '@aranghat/base-react';

export default function WithLabel() {
  return (
    <>
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </>
  );
}
