import { Input } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Input type="email" placeholder="Email" aria-label="Email"></Input></div>
    </>
  );
}
