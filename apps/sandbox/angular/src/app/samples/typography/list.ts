import { Component } from '@angular/core';
import { ArtTypography } from '@aranghat/base-angular';

@Component({
  selector: 'sample-typography-list',
  imports: [ArtTypography],
  template: `
    <art-typography>
      <ol>
        <li>Install the package</li>
        <li>Import the token sheet</li>
        <li>Use the components</li>
      </ol>
      <hr>
      <ul>
        <li>HTML</li>
        <li>React, Vue and Angular</li>
      </ul>
    </art-typography>
  `,
})
export class TypographyList {}
