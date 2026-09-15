import { Tooltip } from '@aranghat/components-react';
import { Button } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Tooltip>
        <Button slot="trigger" variant="outline">Hover</Button>
        Add to library
      </Tooltip>
    </>
  );
}
