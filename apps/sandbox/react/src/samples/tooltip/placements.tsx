import { Tooltip } from '@aranghat/components-react';
import { Button } from '@aranghat/base-react';

export default function Placements() {
  return (
    <>
      <Tooltip placement="top">
        <Button slot="trigger" variant="outline">Top</Button>
        Tooltip on top
      </Tooltip>
      <Tooltip placement="right">
        <Button slot="trigger" variant="outline">Right</Button>
        Tooltip on the right
      </Tooltip>
      <Tooltip placement="bottom">
        <Button slot="trigger" variant="outline">Bottom</Button>
        Tooltip on the bottom
      </Tooltip>
      <Tooltip placement="left">
        <Button slot="trigger" variant="outline">Left</Button>
        Tooltip on the left
      </Tooltip>
    </>
  );
}
