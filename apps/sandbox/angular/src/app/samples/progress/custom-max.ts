import { Component } from '@angular/core';
import { ArtProgress } from '@aranghat/base-angular';

@Component({
  selector: 'sample-progress-custom-max',
  imports: [ArtProgress],
  template: `
    <art-progress value="3" max="8" aria-label="Steps"></art-progress>
  `,
})
export class ProgressCustomMax {}
