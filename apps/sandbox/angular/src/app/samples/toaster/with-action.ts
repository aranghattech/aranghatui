import { Component } from '@angular/core';
import { ArtToast, ArtToaster } from '@aranghat/components-angular';

@Component({
  selector: 'sample-toaster-with-action',
  imports: [ArtToast, ArtToaster],
  template: `
    <art-toaster inline>
      <art-toast duration="0" action-label="Undo" cancel-label="Dismiss">Message deleted<span slot="description">The message was moved to Trash.</span></art-toast>
    </art-toaster>
  `,
})
export class ToasterWithAction {}
