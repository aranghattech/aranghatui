import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-with-label',
  imports: [ArtInput, ArtLabel],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><art-label for="email-1">Email</art-label><art-input id="email-1" type="email" placeholder="Email"></art-input></div>
  `,
})
export class InputWithLabel {}
