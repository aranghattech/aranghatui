import { Component } from '@angular/core';
import { ArtItem } from '@aranghat/base-angular';

@Component({
  selector: 'sample-item-variants',
  imports: [ArtItem],
  template: `
    <art-item>
      <p slot="title">Default</p>
      <p slot="description">No border, no fill.</p>
    </art-item>
    <art-item variant="outline">
      <p slot="title">Outline</p>
      <p slot="description">Bordered.</p>
    </art-item>
    <art-item variant="muted">
      <p slot="title">Muted</p>
      <p slot="description">Filled with the muted background.</p>
    </art-item>
  `,
})
export class ItemVariants {}
