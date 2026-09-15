import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtMenuItem } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-links',
  imports: [ArtButton, ArtDropdownMenu, ArtMenuItem],
  template: `
    <art-dropdown-menu>
      <art-button slot="trigger" variant="outline">Go to</art-button>
      <art-menu-item href="#dashboard">Dashboard</art-menu-item>
      <art-menu-item href="#reports">Reports</art-menu-item>
      <art-menu-item href="https://example.com" target="_blank">Docs ↗</art-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuLinks {}
