import { Component } from '@angular/core';
import { ArtButton, ArtIcon, ArtItem } from '@aranghat/base-angular';

@Component({
  selector: 'sample-item-sizes',
  imports: [ArtButton, ArtIcon, ArtItem],
  template: `
    <art-item variant="outline" size="sm">
      <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
      <p slot="title">Small item</p>
      <art-button slot="actions" variant="ghost" size="sm">Open</art-button>
    </art-item>
    <art-item variant="outline">
      <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
      <p slot="title">Medium item</p>
      <art-button slot="actions" variant="ghost" size="sm">Open</art-button>
    </art-item>
  `,
})
export class ItemSizes {}
