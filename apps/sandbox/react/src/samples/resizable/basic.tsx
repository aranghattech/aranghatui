import { Resizable, ResizableHandle, ResizablePanel } from '@aranghat/components-react';

export default function Basic() {
  return (
    <>
      <Resizable style={{ height: '12rem', border: 'var(--art-border-width) solid var(--art-color-border-default)', borderRadius: 'var(--art-radius-lg)' }}>
        <ResizablePanel defaultSize="50">
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--art-font-size-sm)', fontWeight: 'var(--art-font-weight-semibold)' }}>One</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="50">
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--art-font-size-sm)', fontWeight: 'var(--art-font-weight-semibold)' }}>Two</div>
        </ResizablePanel>
      </Resizable>
    </>
  );
}
