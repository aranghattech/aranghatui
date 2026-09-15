import { Component } from '@angular/core';
import { ArtProgress } from '@aranghat/base-angular';

@Component({
  selector: 'sample-progress-values',
  imports: [ArtProgress],
  template: `
    <art-progress value="0" aria-label="Empty"></art-progress>
    <art-progress value="50" aria-label="Half"></art-progress>
    <art-progress value="100" aria-label="Complete"></art-progress>
  `,
})
export class ProgressValues {}
