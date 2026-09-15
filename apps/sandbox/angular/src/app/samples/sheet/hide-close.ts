import { Component } from '@angular/core';
import { ArtSheet } from '@aranghat/modals-angular';
import { ArtButton, ArtField, ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-sheet-hide-close',
  imports: [ArtButton, ArtField, ArtInput, ArtLabel, ArtSheet],
  template: `
    <art-sheet side="right" hide-close>
      <art-button slot="trigger" variant="outline">Filters</art-button>
      <span slot="title">Edit profile</span>
      <span slot="description">Make changes to your profile here. Click save when you're done.</span>
      <art-field>
        <art-label slot="label">Name</art-label>
        <art-input value="Pedro Duarte"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Username</art-label>
        <art-input value="@peduarte"></art-input>
      </art-field>
      <art-button slot="footer">Save changes</art-button>
      <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
    </art-sheet>
  `,
})
export class SheetHideClose {}
