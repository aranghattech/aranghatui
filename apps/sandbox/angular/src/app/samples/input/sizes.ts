import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-sizes',
  imports: [ArtInput],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><art-input size="sm" placeholder="Small" aria-label="Small"></art-input><art-input placeholder="Medium" aria-label="Medium"></art-input><art-input size="lg" placeholder="Large" aria-label="Large"></art-input></div>
  `,
})
export class InputSizes {}
