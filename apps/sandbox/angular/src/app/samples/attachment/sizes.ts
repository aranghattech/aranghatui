import { Component } from '@angular/core';
import { ArtAttachment } from '@aranghat/components-angular';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-attachment-sizes',
  imports: [ArtAttachment, ArtButton, ArtIcon],
  template: `
    <art-attachment size="sm" name="notes.txt" description="TXT · 2 KB">
      <art-button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></art-icon></art-button>
    </art-attachment>
    <art-attachment name="notes.txt" description="TXT · 2 KB">
      <art-button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></art-icon></art-button>
    </art-attachment>
  `,
})
export class AttachmentSizes {}
