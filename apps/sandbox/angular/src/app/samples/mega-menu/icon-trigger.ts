import { Component } from '@angular/core';
import { ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink } from '@aranghat/extended-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-mega-menu-icon-trigger',
  imports: [ArtButton, ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink],
  template: `
    <art-mega-menu full-width>
      <art-mega-menu-item label="Menu" hide-chevron [maxColumns]="4">
        <svg slot="trigger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
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
        <art-mega-menu-group label="Store">
          <art-mega-menu-link href="#postgres">Postgres<span slot="description">Serverless SQL</span></art-mega-menu-link>
          <art-mega-menu-link href="#key-value">Key-value<span slot="description">Low-latency cache</span></art-mega-menu-link>
          <art-mega-menu-link href="#blob">Blob<span slot="description">Files at any size</span></art-mega-menu-link>
        </art-mega-menu-group>
        <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>
      </art-mega-menu-item>
    </art-mega-menu>
  `,
})
export class MegaMenuIconTrigger {}
