import { Drawer } from '@aranghat/modals-react';
import { Button } from '@aranghat/base-react';

export default function Sides() {
  return (
    <>
      <Drawer side="top">
        <Button slot="trigger" variant="outline">Top</Button>
        <span slot="title">Move Goal</span>
        <span slot="description">Set your daily activity goal.</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--art-space-4)' }}>
          <Button variant="outline" icon aria-label="Decrease">−</Button>
          <span style={{ fontSize: 'var(--art-font-size-4xl)', fontWeight: 'var(--art-font-weight-bold)', letterSpacing: 'var(--art-font-tracking-tight)', fontVariantNumeric: 'tabular-nums' }}>350</span>
          <Button variant="outline" icon aria-label="Increase">+</Button>
        </div>
        <Button slot="footer">Submit</Button>
        <Button slot="footer" variant="outline" dialog-close>Cancel</Button>
      </Drawer>
      <Drawer side="right">
        <Button slot="trigger" variant="outline">Right</Button>
        <span slot="title">Move Goal</span>
        <span slot="description">Set your daily activity goal.</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--art-space-4)' }}>
          <Button variant="outline" icon aria-label="Decrease">−</Button>
          <span style={{ fontSize: 'var(--art-font-size-4xl)', fontWeight: 'var(--art-font-weight-bold)', letterSpacing: 'var(--art-font-tracking-tight)', fontVariantNumeric: 'tabular-nums' }}>350</span>
          <Button variant="outline" icon aria-label="Increase">+</Button>
        </div>
        <Button slot="footer">Submit</Button>
        <Button slot="footer" variant="outline" dialog-close>Cancel</Button>
      </Drawer>
      <Drawer side="bottom">
        <Button slot="trigger" variant="outline">Bottom</Button>
        <span slot="title">Move Goal</span>
        <span slot="description">Set your daily activity goal.</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--art-space-4)' }}>
          <Button variant="outline" icon aria-label="Decrease">−</Button>
          <span style={{ fontSize: 'var(--art-font-size-4xl)', fontWeight: 'var(--art-font-weight-bold)', letterSpacing: 'var(--art-font-tracking-tight)', fontVariantNumeric: 'tabular-nums' }}>350</span>
          <Button variant="outline" icon aria-label="Increase">+</Button>
        </div>
        <Button slot="footer">Submit</Button>
        <Button slot="footer" variant="outline" dialog-close>Cancel</Button>
      </Drawer>
      <Drawer side="left">
        <Button slot="trigger" variant="outline">Left</Button>
        <span slot="title">Move Goal</span>
        <span slot="description">Set your daily activity goal.</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--art-space-4)' }}>
          <Button variant="outline" icon aria-label="Decrease">−</Button>
          <span style={{ fontSize: 'var(--art-font-size-4xl)', fontWeight: 'var(--art-font-weight-bold)', letterSpacing: 'var(--art-font-tracking-tight)', fontVariantNumeric: 'tabular-nums' }}>350</span>
          <Button variant="outline" icon aria-label="Increase">+</Button>
        </div>
        <Button slot="footer">Submit</Button>
        <Button slot="footer" variant="outline" dialog-close>Cancel</Button>
      </Drawer>
    </>
  );
}
