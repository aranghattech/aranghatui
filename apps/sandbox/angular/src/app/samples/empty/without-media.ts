import { Component } from '@angular/core';
import { ArtButton, ArtEmpty } from '@aranghat/base-angular';

@Component({
  selector: 'sample-empty-without-media',
  imports: [ArtButton, ArtEmpty],
  template: `
    <art-empty>
      <h3 slot="title">Nothing to show</h3>
      <p slot="description">Try adjusting your filters.</p>
      <art-button variant="link">Clear filters</art-button>
    </art-empty>
  `,
})
export class EmptyWithoutMedia {}
