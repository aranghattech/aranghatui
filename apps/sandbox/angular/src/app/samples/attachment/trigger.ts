import { Component } from '@angular/core';
import { ArtAttachment } from '@aranghat/components-angular';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';

@Component({
  selector: 'sample-attachment-trigger',
  imports: [ArtAttachment, ArtButton, ArtIcon],
  template: `
    <art-attachment href="#" name="handbook.pdf" description="Open in a new tab" target="_blank">
      <art-button slot="actions" variant="ghost" size="sm" icon aria-label="Download"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg></art-icon></art-button>
    </art-attachment>
    <art-attachment trigger-label="Preview slides.key" name="slides.key" description="Keynote · 8 MB">
      <art-button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></art-icon></art-button>
    </art-attachment>
  `,
})
export class AttachmentTrigger {}
