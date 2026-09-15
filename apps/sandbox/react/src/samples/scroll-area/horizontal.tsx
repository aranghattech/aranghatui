import { ScrollArea } from '@aranghat/components-react';
import { Skeleton } from '@aranghat/base-react';

export default function Horizontal() {
  return (
    <>
      <ScrollArea orientation="horizontal" style={{ width: '24rem', border: 'var(--art-border-width) solid var(--art-color-border-default)', borderRadius: 'var(--art-radius-md)', padding: 'var(--art-space-4)', display: 'flex', gap: 'var(--art-space-4)' }}>
        <Skeleton style={{ flex: 'none', width: '10rem', height: '6rem' }} />
        <Skeleton style={{ flex: 'none', width: '10rem', height: '6rem' }} />
        <Skeleton style={{ flex: 'none', width: '10rem', height: '6rem' }} />
        <Skeleton style={{ flex: 'none', width: '10rem', height: '6rem' }} />
        <Skeleton style={{ flex: 'none', width: '10rem', height: '6rem' }} />
        <Skeleton style={{ flex: 'none', width: '10rem', height: '6rem' }} />
      </ScrollArea>
    </>
  );
}
