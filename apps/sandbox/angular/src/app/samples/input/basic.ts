import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-basic',
  imports: [ArtInput],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><art-input type="email" placeholder="Email" aria-label="Email"></art-input></div>
  `,
})
export class InputBasic {}
