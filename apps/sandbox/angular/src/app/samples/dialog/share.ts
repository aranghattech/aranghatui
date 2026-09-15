import { Component } from '@angular/core';
import { ArtDialog } from '@aranghat/modals-angular';
import { ArtButton, ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dialog-share',
  imports: [ArtButton, ArtDialog, ArtField, ArtInput, ArtLabel],
  template: `
    <art-dialog>
      <art-button slot="trigger" variant="outline">Share</art-button>
      <span slot="title">Share link</span>
      <span slot="description">Anyone who has this link will be able to view this.</span>
      <art-field>
        <art-label slot="label">Link</art-label>
        <art-input value="https://ui.shadcn.com/docs/installation" readonly></art-input>
      </art-field>
      <art-button slot="footer" variant="secondary" dialog-close>Close</art-button>
    </art-dialog>
  `,
})
export class DialogShare {}
