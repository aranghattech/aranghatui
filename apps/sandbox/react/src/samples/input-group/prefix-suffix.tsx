import { Input, InputGroup } from '@aranghat/base-react';

export default function PrefixSuffix() {
  return (
    <>
      <InputGroup>
        <span slot="start">https://</span>
        <Input placeholder="example" aria-label="Domain" />
        <span slot="end">.com</span>
      </InputGroup>
    </>
  );
}
