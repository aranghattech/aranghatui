import { Component } from '@angular/core';
import { ArtButton, ArtEmpty, ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-empty-basic',
  imports: [ArtButton, ArtEmpty, ArtIcon],
  template: `
    <art-empty>
      <art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>
      <h3 slot="title">No projects yet</h3>
      <p slot="description">You haven't created any projects yet. Get started by creating your first project.</p>
      <art-button>Create project</art-button>
    </art-empty>
  `,
})
export class EmptyBasic {}
