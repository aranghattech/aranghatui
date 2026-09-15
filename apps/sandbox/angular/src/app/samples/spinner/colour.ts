import { Component } from '@angular/core';
import { ArtSpinner } from '@aranghat/base-angular';

@Component({
  selector: 'sample-spinner-colour',
  imports: [ArtSpinner],
  template: `
    <art-spinner style="color: var(--art-color-fg-muted)"></art-spinner>
  `,
})
export class SpinnerColour {}
