import { Button, ButtonGroup, Input } from '@aranghat/base-react';

export default function WithInput() {
  return (
    <>
      <ButtonGroup>
        <Input placeholder="Search…" aria-label="Search" />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </>
  );
}
