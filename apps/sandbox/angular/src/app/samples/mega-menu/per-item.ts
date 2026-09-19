import { Component } from '@angular/core';
import { ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink } from '@aranghat/extended-angular';

@Component({
  selector: 'sample-mega-menu-per-item',
  imports: [ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink],
  template: `
    <art-mega-menu>
      <art-mega-menu-item label="Products" full-width [maxColumns]="3">
        <art-mega-menu-group label="Build">
          <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
          <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
          <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
        </art-mega-menu-group>
        <art-mega-menu-group label="Observe">
          <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
          <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
          <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
        </art-mega-menu-group>
        <art-mega-menu-group label="Secure">
          <art-mega-menu-link href="#firewall">Firewall<span slot="description">Block bad traffic</span></art-mega-menu-link>
          <art-mega-menu-link href="#access">Access<span slot="description">Roles and SSO</span></art-mega-menu-link>
          <art-mega-menu-link href="#audit-log">Audit log<span slot="description">Who changed what</span></art-mega-menu-link>
        </art-mega-menu-group>
      </art-mega-menu-item>
      <art-mega-menu-item label="Company">
        <art-mega-menu-group label="Company">
          <art-mega-menu-link href="#about">About</art-mega-menu-link>
          <art-mega-menu-link href="#blog">Blog</art-mega-menu-link>
          <art-mega-menu-link href="#careers">Careers</art-mega-menu-link>
        </art-mega-menu-group>
      </art-mega-menu-item>
      <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
      <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
    </art-mega-menu>
  `,
})
export class MegaMenuPerItem {}
