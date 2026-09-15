import { Component } from '@angular/core';
import { ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-card-basic',
  imports: [ArtCard],
  template: `
    <art-card>
      <h3 slot="title">Card title</h3>
      <p slot="description">Card description</p>
      <p>Card content</p>
      <p slot="footer">Card footer</p>
    </art-card>
  `,
})
export class CardBasic {}
