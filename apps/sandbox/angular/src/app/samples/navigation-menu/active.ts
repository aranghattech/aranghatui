import { Component } from '@angular/core';
import { ArtNavigationMenu, ArtNavigationMenuItem } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-navigation-menu-active',
  imports: [ArtNavigationMenu, ArtNavigationMenuItem],
  template: `
    <art-navigation-menu>
      <art-navigation-menu-item label="Home" href="#" active></art-navigation-menu-item>
      <art-navigation-menu-item label="Pricing" href="#pricing"></art-navigation-menu-item>
      <art-navigation-menu-item label="Blog" href="#blog"></art-navigation-menu-item>
    </art-navigation-menu>
  `,
})
export class NavigationMenuActive {}
