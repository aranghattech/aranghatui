import { Avatar, Bubble, Message } from '@aranghat/components-react';
import { Marker } from '@aranghat/base-react';

export default function HeaderFooter() {
  return (
    <>
      <Message>
        <Avatar slot="avatar" size="sm" alt="">AL</Avatar>
        <span slot="header">Ada Lovelace · 09:41</span>
        <Bubble variant="muted">The analytical engine has no pretensions to originate anything.</Bubble>
        <span slot="footer">Delivered</span>
      </Message>
      <Message align="end">
        <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
        <span slot="header">You · 09:42</span>
        <Bubble>It can do whatever we know how to order it to perform.</Bubble>
        <Marker slot="footer" role="status">Sending…</Marker>
      </Message>
    </>
  );
}
