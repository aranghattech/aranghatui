import { Button } from '@aranghat/base-react';

export default function Full() {
  return (
    <div style={{ display: 'grid', gap: 'var(--art-space-2)', maxWidth: 'var(--art-container-xs)' }}>
      <Button full>Continue</Button>
      <Button full variant="outline">Back</Button>
    </div>
  );
}
