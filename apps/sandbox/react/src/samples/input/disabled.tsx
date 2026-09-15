import { Input } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Input placeholder="Email" aria-label="Email" disabled></Input></div>
    </>
  );
}
