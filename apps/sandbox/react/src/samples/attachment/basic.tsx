import { Attachment } from '@aranghat/components-react';
import { Button, Icon } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Attachment name="q3-results.pdf" description="PDF · 1.2 MB">
        <Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button>
      </Attachment>
    </>
  );
}
