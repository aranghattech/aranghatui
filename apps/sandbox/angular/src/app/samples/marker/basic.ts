import { Component } from '@angular/core';
import { ArtIcon, ArtMarker } from '@aranghat/base-angular';

@Component({
  selector: 'sample-marker-basic',
  imports: [ArtIcon, ArtMarker],
  template: `
    <art-marker>
      <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></art-icon>
      Task completed
    </art-marker>
  `,
})
export class MarkerBasic {}
