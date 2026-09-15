import { Component } from '@angular/core';
import { ArtMarker } from '@aranghat/base-angular';

@Component({
  selector: 'sample-marker-separator',
  imports: [ArtMarker],
  template: `
    <art-marker variant="separator">Today</art-marker>
  `,
})
export class MarkerSeparator {}
