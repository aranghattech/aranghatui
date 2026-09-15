import { HoverCard } from '@aranghat/components-react';
import { Button } from '@aranghat/base-react';

export default function Placements() {
  return (
    <>
      <HoverCard placement="top">
        <Button slot="trigger" variant="link">Top</Button>
        <p>Card on top</p>
      </HoverCard>
      <HoverCard placement="right">
        <Button slot="trigger" variant="link">Right</Button>
        <p>Card on the right</p>
      </HoverCard>
      <HoverCard placement="bottom">
        <Button slot="trigger" variant="link">Bottom</Button>
        <p>Card on bottom</p>
      </HoverCard>
      <HoverCard placement="left">
        <Button slot="trigger" variant="link">Left</Button>
        <p>Card on the left</p>
      </HoverCard>
    </>
  );
}
