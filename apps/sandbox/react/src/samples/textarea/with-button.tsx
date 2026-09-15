import { Button, Textarea } from '@aranghat/base-react';

export default function WithButton() {
  return (
    <>
      <Textarea placeholder="Type your message here." aria-label="Message" />
      <Button>Send message</Button>
    </>
  );
}
