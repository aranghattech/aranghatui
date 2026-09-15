import { Avatar, Bubble, Message } from '@aranghat/components-react';

export default function Basic() {
  return (
    <>
      <Message>
        <Avatar slot="avatar" size="sm" alt="">AL</Avatar>
        <Bubble variant="muted">Hey! Are we still on for lunch tomorrow?</Bubble>
      </Message>
      <Message align="end">
        <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
        <Bubble>Yes — 12:30 at the usual place.</Bubble>
      </Message>
    </>
  );
}
