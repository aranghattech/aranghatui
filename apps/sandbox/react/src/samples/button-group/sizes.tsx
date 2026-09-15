import { Button, ButtonGroup } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <ButtonGroup>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline" size="sm">Small</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">Large</Button>
        <Button variant="outline" size="lg">Large</Button>
      </ButtonGroup>
    </>
  );
}
