import { Button, ButtonGroup, Separator } from '@aranghat/base-react';

export default function WithSeparator() {
  return (
    <>
      <ButtonGroup>
        <Button variant="secondary">Copy</Button>
        <Separator orientation="vertical" />
        <Button variant="secondary">Paste</Button>
      </ButtonGroup>
    </>
  );
}
