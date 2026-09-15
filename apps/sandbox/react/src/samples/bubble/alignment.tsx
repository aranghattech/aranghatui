import { Bubble } from '@aranghat/components-react';

export default function Alignment() {
  return (
    <>
      <Bubble variant="muted">Received on the start side.</Bubble>
      <Bubble align="end">Sent on the end side.</Bubble>
    </>
  );
}
