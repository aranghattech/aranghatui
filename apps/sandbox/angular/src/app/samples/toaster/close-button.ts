import { Component } from '@angular/core';
import { ArtToast, ArtToaster } from '@aranghat/components-angular';

@Component({
  selector: 'sample-toaster-close-button',
  imports: [ArtToast, ArtToaster],
  template: `
    <art-toaster inline close-button>
      <art-toast duration="0">Copied to clipboard</art-toast>
    </art-toaster>
  `,
})
export class ToasterCloseButton {}
