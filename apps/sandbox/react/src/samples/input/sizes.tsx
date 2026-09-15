import { Input } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Input size="sm" placeholder="Small" aria-label="Small"></Input><Input placeholder="Medium" aria-label="Medium"></Input><Input size="lg" placeholder="Large" aria-label="Large"></Input></div>
    </>
  );
}
