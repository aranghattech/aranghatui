import { Component } from '@angular/core';
import { ArtAlertDialog } from '@aranghat/modals-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-alert-dialog-media',
  imports: [ArtAlertDialog, ArtButton],
  template: `
    <art-alert-dialog>
      <art-button slot="trigger" variant="outline">Show dialog</art-button>
      <svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
      <span slot="title">Are you absolutely sure?</span>
      <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
      <art-button slot="cancel" variant="outline">Cancel</art-button>
      <art-button slot="action">Continue</art-button>
    </art-alert-dialog>
  `,
})
export class AlertDialogMedia {}
