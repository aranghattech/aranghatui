import { Component } from '@angular/core';
import { ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-label-basic',
  imports: [ArtLabel],
  template: `
    <div style="display:flex;flex-direction:column;gap:var(--art-space-2)"><art-label for="email">Your email address</art-label><input id="email" type="email" placeholder="you@example.com"  style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit"></div>
  `,
})
export class LabelBasic {}
