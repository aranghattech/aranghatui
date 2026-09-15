import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtMenuItem, ArtMenuLabel, ArtMenuRadioGroup, ArtMenuSeparator } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-radios',
  imports: [ArtButton, ArtDropdownMenu, ArtMenuItem, ArtMenuLabel, ArtMenuRadioGroup, ArtMenuSeparator],
  template: `
    <art-dropdown-menu open>
      <art-button slot="trigger" variant="outline">Panel position</art-button>
      <art-menu-label>Panel position</art-menu-label>
      <art-menu-separator></art-menu-separator>
      <art-menu-radio-group value="bottom">
        <art-menu-item type="radio" value="top">Top</art-menu-item>
        <art-menu-item type="radio" value="bottom">Bottom</art-menu-item>
        <art-menu-item type="radio" value="right">Right</art-menu-item>
      </art-menu-radio-group>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuRadios {}
