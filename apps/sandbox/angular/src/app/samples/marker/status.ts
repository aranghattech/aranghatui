import { Component } from '@angular/core';
import { ArtMarker, ArtSpinner } from '@aranghat/base-angular';

@Component({
  selector: 'sample-marker-status',
  imports: [ArtMarker, ArtSpinner],
  template: `
    <art-marker role="status">
      <art-spinner slot="icon" size="sm" label="Thinking"></art-spinner>
      Thinking…
    </art-marker>
  `,
})
export class MarkerStatus {}
