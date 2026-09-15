import { Drawer } from '@aranghat/modals-react';
import { Button } from '@aranghat/base-react';

export default function Persistent() {
  return (
    <>
      <Drawer persistent>
        <Button slot="trigger" variant="outline">Pick a plan</Button>
        <span slot="title">Choose a plan</span>
        <span slot="description">You need to pick one to continue.</span>
        <Button slot="footer" dialog-close>Free</Button>
        <Button slot="footer" variant="outline" dialog-close>Pro</Button>
      </Drawer>
    </>
  );
}
