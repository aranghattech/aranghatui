import { Component } from '@angular/core';
import { ArtAspectRatio } from '@aranghat/base-angular';

@Component({
  selector: 'sample-aspect-ratio-basic',
  imports: [ArtAspectRatio],
  template: `
    <art-aspect-ratio ratio="16/9">
      <div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>
    </art-aspect-ratio>
  `,
})
export class AspectRatioBasic {}
