import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { ArtToaster } from '@aranghat/components-angular';
import { toast } from '@aranghat/components';

@Component({
  selector: 'sample-toaster-basic',
  imports: [ArtButton, ArtToaster],
  // one art-toaster per app, usually in the root component
  template: `
    <art-toaster></art-toaster>
    <art-button variant="outline" (click)="notify()">Show toast</art-button>
  `,
})
export class ToasterBasic {
  notify() {
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: { label: 'Undo', onClick: () => console.log('Undo') },
    });
  }
}
