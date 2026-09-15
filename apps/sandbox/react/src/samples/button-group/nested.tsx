import { Button, ButtonGroup } from '@aranghat/base-react';

export default function Nested() {
  return (
    <>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Next</Button>
        </ButtonGroup>
      </ButtonGroup>
    </>
  );
}
