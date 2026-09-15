import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-disabled',
  imports: [ArtInput],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><art-input placeholder="Email" aria-label="Email" disabled></art-input></div>
  `,
})
export class InputDisabled {}
