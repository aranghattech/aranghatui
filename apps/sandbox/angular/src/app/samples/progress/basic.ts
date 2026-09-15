import { Component } from '@angular/core';
import { ArtProgress } from '@aranghat/base-angular';

@Component({
  selector: 'sample-progress-basic',
  imports: [ArtProgress],
  template: `
    <art-progress value="33" aria-label="Upload"></art-progress>
  `,
})
export class ProgressBasic {}
