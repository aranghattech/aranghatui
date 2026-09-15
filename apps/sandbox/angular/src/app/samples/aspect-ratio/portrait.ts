import { Component } from '@angular/core';
import { ArtAspectRatio } from '@aranghat/base-angular';

@Component({
  selector: 'sample-aspect-ratio-portrait',
  imports: [ArtAspectRatio],
  template: `
    <art-aspect-ratio ratio="3/4">
      <div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>
    </art-aspect-ratio>
  `,
})
export class AspectRatioPortrait {}
