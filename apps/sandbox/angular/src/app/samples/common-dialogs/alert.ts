import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { alert } from '@aranghat/modals';

@Component({
  selector: 'sample-common-dialogs-alert',
  imports: [ArtButton],
  template: `
    <art-button variant="outline" (click)="ask()">Show alert</art-button>
    <p>{{ result }}</p>
  `,
})
export class CommonDialogsAlert {
  result = '';
  // alert() mounts the dialog itself and resolves when it closes — no element to render
  async ask() {
    await alert({ title: 'Export finished', description: 'Your report is ready to download.' });
    this.result = 'Acknowledged.';
  }
}
