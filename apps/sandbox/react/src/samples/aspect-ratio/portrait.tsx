import { AspectRatio } from '@aranghat/base-react';

export default function Portrait() {
  return (
    <>
      <AspectRatio ratio="3/4">
        <div style={{ background: 'var(--art-color-bg-muted)', borderRadius: 'var(--art-radius-md)' }}></div>
      </AspectRatio>
    </>
  );
}
