import { Attachment, AttachmentGroup } from '@aranghat/components-react';
import { Button, Icon } from '@aranghat/base-react';

export default function Group() {
  return (
    <>
      <AttachmentGroup label="Files to send">
        <Attachment size="sm" name="a.pdf" description="12 KB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
        <Attachment size="sm" name="b.pdf" description="80 KB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
        <Attachment size="sm" name="c.pdf" description="1.4 MB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
        <Attachment size="sm" name="d.pdf" description="220 KB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
      </AttachmentGroup>
    </>
  );
}
