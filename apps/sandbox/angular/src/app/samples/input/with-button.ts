import { Component } from '@angular/core';
import { ArtButton, ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-with-button',
  imports: [ArtButton, ArtInput],
  template: `
    <div style="display:flex;gap:var(--art-space-2);width:20rem;max-width:100%"><art-input type="email" placeholder="Email" aria-label="Email"></art-input><art-button type="submit">Subscribe</art-button></div>
  `,
})
export class InputWithButton {}
