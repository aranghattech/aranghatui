import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-file',
  imports: [ArtInput, ArtLabel],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><art-label for="picture">Picture</art-label><art-input id="picture" type="file"></art-input></div>
  `,
})
export class InputFile {}
