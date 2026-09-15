import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { confirm } from '@aranghat/modals';

@Component({
  selector: 'sample-common-dialogs-confirm',
  imports: [ArtButton],
  template: `
    <art-button variant="outline" (click)="ask()">Delete account</art-button>
    <p>{{ result }}</p>
  `,
})
export class CommonDialogsConfirm {
  result = '';
  // confirm() mounts the dialog itself and resolves when it closes — no element to render
  async ask() {
    this.result = (await confirm({ title: 'Delete account?', description: 'This permanently removes your account and all of its data.', actionLabel: 'Delete', destructive: true })) ? 'Deleted.' : 'Kept.';
  }
}
