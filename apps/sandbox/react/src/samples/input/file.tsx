import { Input, Label } from '@aranghat/base-react';

export default function File() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--art-space-2)', width: '20rem', maxWidth: '100%' }}><Label htmlFor="picture">Picture</Label><Input id="picture" type="file"></Input></div>
    </>
  );
}
