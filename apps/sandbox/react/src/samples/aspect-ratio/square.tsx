import { AspectRatio } from '@aranghat/base-react';

export default function Square() {
  return (
    <>
      <AspectRatio ratio="1">
        <div style={{ background: 'var(--art-color-bg-muted)', borderRadius: 'var(--art-radius-md)' }}></div>
      </AspectRatio>
    </>
  );
}
