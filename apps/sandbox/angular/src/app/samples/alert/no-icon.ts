import { Component } from '@angular/core';
import { ArtAlert } from '@aranghat/components-angular';

@Component({
  selector: 'sample-alert-no-icon',
  imports: [ArtAlert],
  template: `
    <art-alert>
      <h5 slot="title">Heads up</h5>
      <p slot="description">You can add components to your app using the CLI.</p>
    </art-alert>
  `,
})
export class AlertNoIcon {}
