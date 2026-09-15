import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-disabled',
  imports: [ArtInput],
  template: `
    <art-input placeholder="Email" aria-label="Email" disabled></art-input>
  `,
})
export class InputDisabled {}
