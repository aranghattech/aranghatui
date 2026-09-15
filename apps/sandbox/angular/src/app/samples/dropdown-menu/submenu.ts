import { Component } from '@angular/core';
import { ArtDropdownMenu, ArtDropdownMenuItem, ArtDropdownMenuSeparator, ArtDropdownMenuSub } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-dropdown-menu-submenu',
  imports: [ArtButton, ArtDropdownMenu, ArtDropdownMenuItem, ArtDropdownMenuSeparator, ArtDropdownMenuSub],
  template: `
    <art-dropdown-menu open>
      <art-button slot="trigger" variant="outline">Open</art-button>
      <art-dropdown-menu-item value="new">New file</art-dropdown-menu-item>
      <art-dropdown-menu-sub open>
        <art-dropdown-menu-item slot="trigger">Share</art-dropdown-menu-item>
        <art-dropdown-menu-item value="email">Email</art-dropdown-menu-item>
        <art-dropdown-menu-item value="message">Message</art-dropdown-menu-item>
        <art-dropdown-menu-separator></art-dropdown-menu-separator>
        <art-dropdown-menu-item value="more">More…</art-dropdown-menu-item>
      </art-dropdown-menu-sub>
      <art-dropdown-menu-separator></art-dropdown-menu-separator>
      <art-dropdown-menu-item value="delete" variant="destructive">Delete</art-dropdown-menu-item>
    </art-dropdown-menu>
  `,
})
export class DropdownMenuSubmenu {}
