import { Component } from '@angular/core';
import { ArtDrawer } from '@aranghat/modals-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-drawer-persistent',
  imports: [ArtButton, ArtDrawer],
  template: `
    <art-drawer persistent>
      <art-button slot="trigger" variant="outline">Pick a plan</art-button>
      <span slot="title">Choose a plan</span>
      <span slot="description">You need to pick one to continue.</span>
      <art-button slot="footer" dialog-close>Free</art-button>
      <art-button slot="footer" variant="outline" dialog-close>Pro</art-button>
    </art-drawer>
  `,
})
export class DrawerPersistent {}
