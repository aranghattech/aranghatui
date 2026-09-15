import { Label, Textarea } from '@aranghat/base-react';

export default function WithText() {
  return (
    <>
      <Label htmlFor="message-2">Your message</Label>
      <Textarea id="message-2" placeholder="Type your message here." aria-describedby="message-2-help" />
      <p id="message-2-help">Your message will be copied to the support team.</p>
    </>
  );
}
