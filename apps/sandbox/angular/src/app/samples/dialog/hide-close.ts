import { Component } from '@angular/core';
import { ArtDialog } from '@aranghat/modals-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dialog-hide-close',
  imports: [ArtButton, ArtDialog],
  template: `
    <art-dialog hide-close>
      <art-button slot="trigger" variant="outline">Terms</art-button>
      <span slot="title">Terms of service</span>
      <span slot="description">Read the terms before you continue.</span>
      <p style="margin: 0; font-size: var(--art-font-size-sm)">By continuing you agree to the terms of service and the privacy policy.</p>
      <art-button slot="footer" variant="outline" dialog-close>Decline</art-button>
      <art-button slot="footer" dialog-close>Accept</art-button>
    </art-dialog>
  `,
})
export class DialogHideClose {}
