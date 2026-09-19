import { Component } from '@angular/core';
import { ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink } from '@aranghat/extended-angular';
import { ArtButton, ArtCard } from '@aranghat/base-angular';

@Component({
  selector: 'sample-mega-menu-aside-footer',
  imports: [ArtButton, ArtCard, ArtMegaMenu, ArtMegaMenuGroup, ArtMegaMenuItem, ArtMegaMenuLink],
  template: `
    <art-mega-menu>
      <art-mega-menu-item label="Products" [maxColumns]="2">
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
        <art-card slot="aside">
          <span slot="title">Getting started</span>
          <span slot="description">Learn the basics in five minutes.</span>
          <art-button slot="footer" size="sm" full>Watch tutorial</art-button>
        </art-card>
        <art-card slot="aside">
          <span slot="title">Need help?</span>
          <span slot="description">Talk to our sales team.</span>
          <art-button slot="footer" size="sm" variant="outline" full>Contact sales</art-button>
        </art-card>
        <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>
      </art-mega-menu-item>
      <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
      <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
    </art-mega-menu>
  `,
})
export class MegaMenuAsideFooter {}
