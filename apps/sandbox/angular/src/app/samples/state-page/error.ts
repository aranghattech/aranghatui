import { Component } from '@angular/core';
import { ArtStatePage } from '@aranghat/widgets-angular';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-state-page-error',
  imports: [ArtButton, ArtIcon, ArtStatePage],
  template: `
    <art-state-page kind="error" code="500" description="Our servers had a hiccup. Try again in a moment — if it keeps happening, tell us.">
      <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></art-icon>
      <art-button slot="actions">Try again</art-button>
      <span style="font-size: var(--art-font-size-xs); color: var(--art-color-fg-muted)">Request id 8f3c-21ab</span>
    </art-state-page>
  `,
})
export class StatePageError {}
