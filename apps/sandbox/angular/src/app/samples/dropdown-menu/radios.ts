import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtDropdownMenuItem, ArtDropdownMenuLabel, ArtDropdownMenuRadioGroup, ArtDropdownMenuSeparator } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-radios',
  imports: [ArtButton, ArtDropdownMenu, ArtDropdownMenuItem, ArtDropdownMenuLabel, ArtDropdownMenuRadioGroup, ArtDropdownMenuSeparator],
  template: `
    <art-dropdown-menu open>
      <art-button slot="trigger" variant="outline">Panel position</art-button>
      <art-dropdown-menu-label>Panel position</art-dropdown-menu-label>
      <art-dropdown-menu-separator></art-dropdown-menu-separator>
      <art-dropdown-menu-radio-group value="bottom">
        <art-dropdown-menu-item type="radio" value="top">Top</art-dropdown-menu-item>
        <art-dropdown-menu-item type="radio" value="bottom">Bottom</art-dropdown-menu-item>
        <art-dropdown-menu-item type="radio" value="right">Right</art-dropdown-menu-item>
      </art-dropdown-menu-radio-group>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuRadios {}
