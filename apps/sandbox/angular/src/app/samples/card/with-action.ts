import { Component } from '@angular/core';
import { ArtButton, ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-card-with-action',
  imports: [ArtButton, ArtCard],
  template: `
    <art-card>
      <h3 slot="title">Notifications</h3>
      <p slot="description">You have 3 unread messages.</p>
      <art-button slot="action" variant="ghost" size="sm">Mark all read</art-button>
      <p>Your inbox is quiet today.</p>
    </art-card>
  `,
})
export class CardWithAction {}
