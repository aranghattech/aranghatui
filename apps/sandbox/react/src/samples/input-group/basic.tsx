import { Icon, Input, InputGroup } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <InputGroup>
        <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
        <Input placeholder="Search…" aria-label="Search" />
        <span slot="end">12 results</span>
      </InputGroup>
    </>
  );
}
