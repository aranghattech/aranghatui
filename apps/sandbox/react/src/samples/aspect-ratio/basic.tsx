import { AspectRatio } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <AspectRatio ratio="16/9">
        <div style={{ background: 'var(--art-color-bg-muted)', borderRadius: 'var(--art-radius-md)' }}></div>
      </AspectRatio>
    </>
  );
}
