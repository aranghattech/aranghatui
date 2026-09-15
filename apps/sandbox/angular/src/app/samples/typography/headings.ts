import { Component } from '@angular/core';
import { ArtTypography } from '@aranghat/base-angular';

@Component({
  selector: 'sample-typography-headings',
  imports: [ArtTypography],
  template: `
    <art-typography>
      <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      <h4>Heading four</h4>
    </art-typography>
  `,
})
export class TypographyHeadings {}
