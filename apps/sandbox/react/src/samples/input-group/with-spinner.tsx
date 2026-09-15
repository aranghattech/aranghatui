import { Input, InputGroup, Spinner } from '@aranghat/base-react';

export default function WithSpinner() {
  return (
    <>
      <InputGroup>
        <Input placeholder="Searching…" aria-label="Search" value="design" />
        <span slot="end"><Spinner size="sm" label="Searching" /> Searching…</span>
      </InputGroup>
    </>
  );
}
