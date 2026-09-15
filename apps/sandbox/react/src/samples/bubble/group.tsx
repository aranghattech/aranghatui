import { Bubble, BubbleGroup } from '@aranghat/components-react';

export default function Group() {
  return (
    <>
      <BubbleGroup>
        <Bubble variant="muted">First of three.</Bubble>
        <Bubble variant="muted">Second, from the same sender.</Bubble>
        <Bubble variant="muted">Third.</Bubble>
      </BubbleGroup>
    </>
  );
}
