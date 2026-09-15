import { Button, Kbd } from '@aranghat/base-react';

export default function InButton() {
  return (
    <>
      <Button variant="outline" size="sm">
        Accept
        <Kbd slot="end">⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm">
        Cancel
        <Kbd slot="end">Esc</Kbd>
      </Button>
    </>
  );
}
