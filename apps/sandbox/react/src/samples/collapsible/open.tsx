import { Collapsible } from '@aranghat/components-react';

export default function Open() {
  return (
    <>
      <Collapsible open>
        <p slot="trigger">Show details</p>
        <p>These details start expanded because of the open attribute.</p>
      </Collapsible>
    </>
  );
}
