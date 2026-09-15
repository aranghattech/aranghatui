import { Component } from '@angular/core';
import { ArtLabel, ArtProgress } from '@aranghat/base-angular';

@Component({
  selector: 'sample-progress-with-label',
  imports: [ArtLabel, ArtProgress],
  template: `
    <art-label id="upload-label">Uploading photo…</art-label>
    <art-progress value="66" aria-labelledby="upload-label"></art-progress>
  `,
})
export class ProgressWithLabel {}
