import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-sizes',
  imports: [ArtButton],
  template: `
    <art-button size="sm">Small</art-button>
    <art-button>Medium</art-button>
    <art-button size="lg">Large</art-button>
  `,
})
export class ButtonSizes {}
