import { Component } from '@angular/core';
import { ArtIcon, ArtItem, ArtItemGroup, ArtSeparator } from '@aranghat/base-angular';

@Component({
  selector: 'sample-item-group',
  imports: [ArtIcon, ArtItem, ArtItemGroup, ArtSeparator],
  template: `
    <art-item-group>
      <art-item>
        <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
        <p slot="title">Personal</p>
        <p slot="description">Your private workspace.</p>
      </art-item>
      <art-separator></art-separator>
      <art-item>
        <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
        <p slot="title">Team</p>
        <p slot="description">Shared with 4 people.</p>
      </art-item>
    </art-item-group>
  `,
})
export class ItemGroup {}
