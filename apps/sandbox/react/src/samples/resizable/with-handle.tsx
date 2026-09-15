import { Resizable, ResizableHandle, ResizablePanel } from '@aranghat/components-react';

export default function WithHandle() {
  return (
    <>
      <Resizable style={{ height: '12rem', border: 'var(--art-border-width) solid var(--art-color-border-default)', borderRadius: 'var(--art-radius-lg)' }}>
        <ResizablePanel defaultSize="25" minSize="15">
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--art-font-size-sm)', fontWeight: 'var(--art-font-weight-semibold)' }}>Sidebar</div>
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel defaultSize="75">
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--art-font-size-sm)', fontWeight: 'var(--art-font-weight-semibold)' }}>Content</div>
        </ResizablePanel>
      </Resizable>
    </>
  );
}
