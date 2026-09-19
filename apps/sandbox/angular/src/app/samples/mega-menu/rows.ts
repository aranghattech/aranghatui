import { Component } from '@angular/core';
import { ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink } from '@aranghat/extended-angular';

@Component({
  selector: 'sample-mega-menu-rows',
  imports: [ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink],
  template: `
    <art-mega-menu>
      <art-mega-menu-item label="Products" layout="rows">
        <art-mega-menu-group label="Build" [columns]="3">
          <art-mega-menu-link href="#editor">Editor</art-mega-menu-link>
          <art-mega-menu-link href="#deploy">Deploy</art-mega-menu-link>
          <art-mega-menu-link href="#functions">Functions</art-mega-menu-link>
        </art-mega-menu-group>
        <art-mega-menu-group label="Observe" [columns]="3">
          <art-mega-menu-link href="#analytics">Analytics</art-mega-menu-link>
          <art-mega-menu-link href="#logs">Logs</art-mega-menu-link>
          <art-mega-menu-link href="#alerts">Alerts</art-mega-menu-link>
        </art-mega-menu-group>
        <art-mega-menu-group label="Secure" [columns]="3">
          <art-mega-menu-link href="#firewall">Firewall</art-mega-menu-link>
          <art-mega-menu-link href="#access">Access</art-mega-menu-link>
          <art-mega-menu-link href="#audit-log">Audit log</art-mega-menu-link>
        </art-mega-menu-group>
      </art-mega-menu-item>
      <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
      <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
    </art-mega-menu>
  `,
})
export class MegaMenuRows {}
