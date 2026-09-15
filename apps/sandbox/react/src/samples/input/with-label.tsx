import { Input, Label } from '@aranghat/base-react';

export default function WithLabel() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Label htmlFor="email-1">Email</Label><Input id="email-1" type="email" placeholder="Email"></Input></div>
    </>
  );
}
