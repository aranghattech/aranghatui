import { Button, ButtonGroup } from '@aranghat/base-react';

export default function Vertical() {
  return (
    <>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </>
  );
}
