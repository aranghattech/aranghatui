import { Component } from '@angular/core';
import { ArtSeparator } from '@aranghat/base-angular';

@Component({
  selector: 'sample-separator-semantic',
  imports: [ArtSeparator],
  template: `
    <p>Account</p>
    <art-separator semantic></art-separator>
    <p>Billing</p>
  `,
})
export class SeparatorSemantic {}
