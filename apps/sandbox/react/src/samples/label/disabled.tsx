import { Label } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)' }}><Label htmlFor="email-off" disabled>Your email address</Label><input id="email-off" type="email" placeholder="you@example.com" disabled style={{ font: 'inherit', padding: 'var(--art-space-2)', border: 'var(--art-border-width) solid var(--art-color-border-default)', borderRadius: 'var(--art-radius-md)', background: 'transparent', color: 'inherit' }} /></div>
    </>
  );
}
