import { Component } from '@angular/core';
import { ArtSeparator } from '@aranghat/base-angular';

@Component({
  selector: 'sample-separator-basic',
  imports: [ArtSeparator],
  template: `
    <p>An open-source UI component library.</p>
    <art-separator></art-separator>
    <p>Built for HTML, React, Vue and Angular.</p>
  `,
})
export class SeparatorBasic {}
