import { Component } from '@angular/core';
import { ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-label-disabled',
  imports: [ArtLabel],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2)"><art-label for="email-off" disabled>Your email address</art-label><input id="email-off" type="email" placeholder="you@example.com" disabled style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit"></div>
  `,
})
export class LabelDisabled {}
