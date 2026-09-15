import { Component } from '@angular/core';
import { ArtAlert } from '@aranghat/components-angular';
import { ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-alert-basic',
  imports: [ArtAlert, ArtIcon],
  template: `
    <art-alert>
      <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></art-icon>
      <h5 slot="title">Success! Your changes have been saved</h5>
      <p slot="description">This is an alert with icon, title and description.</p>
    </art-alert>
  `,
})
export class AlertBasic {}
