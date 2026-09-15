import { Textarea } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Textarea placeholder="Type your message here." aria-label="Message" disabled />
    </>
  );
}
