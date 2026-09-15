import { Button, Input, InputGroup } from '@aranghat/base-react';

export default function WithButton() {
  return (
    <>
      <InputGroup>
        <Input type="email" placeholder="Email" aria-label="Email" />
        <Button slot="end" size="sm" variant="secondary">Subscribe</Button>
      </InputGroup>
    </>
  );
}
