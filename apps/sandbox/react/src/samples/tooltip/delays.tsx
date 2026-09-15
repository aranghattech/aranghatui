import { Tooltip } from '@aranghat/components-react';
import { Button } from '@aranghat/base-react';

export default function Delays() {
  return (
    <>
      <Tooltip openDelay="0" closeDelay="0">
        <Button slot="trigger" variant="outline">Instant</Button>
        No hover intent
      </Tooltip>
    </>
  );
}
