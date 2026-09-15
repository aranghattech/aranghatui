import { Avatar, Bubble, Message } from '@aranghat/components-react';
import { Button, Icon } from '@aranghat/base-react';

export default function Actions() {
  return (
    <>
      <Message>
        <Avatar slot="avatar" size="sm" alt="">AI</Avatar>
        <Bubble variant="ghost">Here is a summary of the document you shared: it covers three quarters of results and ends with next year's targets.</Bubble>
        <Button slot="footer" variant="ghost" size="sm" icon aria-label="Copy"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></Icon></Button>
        <Button slot="footer" variant="ghost" size="sm" icon aria-label="Retry"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg></Icon></Button>
      </Message>
    </>
  );
}
