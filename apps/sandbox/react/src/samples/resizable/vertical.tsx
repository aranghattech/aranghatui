import { Resizable, ResizableHandle, ResizablePanel } from '@aranghat/components-react';

export default function Vertical() {
  return (
    <>
      <Resizable direction="vertical" style={{ height: '12rem', border: 'var(--art-border-width) solid var(--art-color-border-default)', borderRadius: 'var(--art-radius-lg)' }}>
        <ResizablePanel defaultSize="25">
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--art-font-size-sm)', fontWeight: 'var(--art-font-weight-semibold)' }}>Header</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="75">
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--art-font-size-sm)', fontWeight: 'var(--art-font-weight-semibold)' }}>Content</div>
        </ResizablePanel>
      </Resizable>
    </>
  );
}
