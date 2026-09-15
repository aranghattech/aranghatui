import { Button, ButtonGroup } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
        <Button variant="outline">Snooze</Button>
      </ButtonGroup>
    </>
  );
}
