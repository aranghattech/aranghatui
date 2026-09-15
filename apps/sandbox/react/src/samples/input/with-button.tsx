import { Button, Input } from '@aranghat/base-react';

export default function WithButton() {
  return (
    <>
      <div style={{ display: 'flex', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Input type="email" placeholder="Email" aria-label="Email"></Input><Button type="submit">Subscribe</Button></div>
    </>
  );
}
