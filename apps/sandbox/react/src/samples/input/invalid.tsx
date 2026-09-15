import { Input, Label } from '@aranghat/base-react';

export default function Invalid() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Label htmlFor="email-2">Email</Label><Input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error"></Input><p id="email-2-error" style={{ margin: '0', fontSize: 'var(--art-font-size-sm)', color: 'var(--art-color-destructive-fg)' }}>Enter a valid email address.</p></div>
    </>
  );
}
