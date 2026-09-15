import { Component } from '@angular/core';
import { ArtSpinner } from '@aranghat/base-angular';

@Component({
  selector: 'sample-spinner-sizes',
  imports: [ArtSpinner],
  template: `
    <art-spinner size="sm"></art-spinner>
    <art-spinner></art-spinner>
    <art-spinner size="lg"></art-spinner>
  `,
})
export class SpinnerSizes {}
