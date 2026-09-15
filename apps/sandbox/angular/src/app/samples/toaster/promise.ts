import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { ArtToaster } from '@aranghat/components-angular';
import { toast } from '@aranghat/components';

@Component({
  selector: 'sample-toaster-promise',
  imports: [ArtButton, ArtToaster],
  template: `
    <art-toaster></art-toaster>
    <art-button variant="outline" (click)="save()">Save</art-button>
  `,
})
export class ToasterPromise {
  save() {
    const request = new Promise<{ name: string }>((resolve) => setTimeout(() => resolve({ name: 'Report' }), 2000));
    toast.promise(request, {
      loading: 'Saving…',
      success: (data) => `${data.name} has been saved`,
      error: 'Something went wrong',
    });
  }
}
