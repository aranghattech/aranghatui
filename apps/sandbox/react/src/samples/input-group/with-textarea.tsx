import { Button, InputGroup, Textarea } from '@aranghat/base-react';

export default function WithTextarea() {
  return (
    <>
      <InputGroup>
        <Textarea placeholder="Ask, search or chat…" aria-label="Message" />
        <span slot="block-end">
          Line 1, Column 1
          <Button size="sm" variant="ghost">Run</Button>
        </span>
      </InputGroup>
    </>
  );
}
