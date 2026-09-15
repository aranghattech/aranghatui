import { Component } from '@angular/core';
import { ArtButton, ArtSpinner } from '@aranghat/base-angular';

@Component({
  selector: 'sample-spinner-in-button',
  imports: [ArtButton, ArtSpinner],
  template: `
    <art-button disabled>
      <art-spinner slot="start"></art-spinner>
      Please wait
    </art-button>
  `,
})
export class SpinnerInButton {}
