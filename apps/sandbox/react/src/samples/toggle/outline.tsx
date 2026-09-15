import { Icon, Toggle } from '@aranghat/base-react';

export default function Outline() {
  return (
    <>
      <Toggle variant="outline" icon aria-label="Toggle italic"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></Icon></Toggle>
    </>
  );
}
