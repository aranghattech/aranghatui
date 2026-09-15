import { Input, InputGroup } from '@aranghat/base-react';

export default function Invalid() {
  return (
    <>
      <InputGroup>
        <span slot="start">https://</span>
        <Input value="not a domain" aria-label="Domain" invalid />
      </InputGroup>
    </>
  );
}
