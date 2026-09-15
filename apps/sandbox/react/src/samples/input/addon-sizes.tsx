import { Icon, Input } from '@aranghat/base-react';

export default function AddonSizes() {
  return (
    <>
      <Input size="sm" placeholder="Search" aria-label="Search small">
        <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
      </Input>
      <Input placeholder="Search" aria-label="Search medium">
        <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
      </Input>
      <Input size="lg" placeholder="Search" aria-label="Search large">
        <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
      </Input>
    </>
  );
}
