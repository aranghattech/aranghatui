import { Component } from '@angular/core';
import { ArtInput, ArtInputGroup, ArtSpinner } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-group-with-spinner',
  imports: [ArtInput, ArtInputGroup, ArtSpinner],
  template: `
    <art-input-group>
      <art-input placeholder="Searching…" aria-label="Search" value="design"></art-input>
      <span slot="end"><art-spinner size="sm" label="Searching"></art-spinner> Searching…</span>
    </art-input-group>
  `,
})
export class InputGroupWithSpinner {}
