import { Collapsible } from '@aranghat/components-react';

export default function Disabled() {
  return (
    <>
      <Collapsible disabled>
        <p slot="trigger">Unavailable section</p>
        <p>Never shown.</p>
      </Collapsible>
    </>
  );
}
