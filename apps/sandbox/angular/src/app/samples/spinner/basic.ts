import { Component } from '@angular/core';
import { ArtSpinner } from '@aranghat/base-angular';

@Component({
  selector: 'sample-spinner-basic',
  imports: [ArtSpinner],
  template: `
    <art-spinner></art-spinner>
  `,
})
export class SpinnerBasic {}
