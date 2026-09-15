import { Component } from '@angular/core';
import { ArtBadge, ArtButton, ArtItem } from '@aranghat/base-angular';

@Component({
  selector: 'sample-item-header-and-footer',
  imports: [ArtBadge, ArtButton, ArtItem],
  template: `
    <art-item variant="outline">
      <span slot="header">Release notes<art-badge variant="secondary">New</art-badge></span>
      <p slot="title">v1.2.0</p>
      <p slot="description">Field, Input OTP and Button Group land in base.</p>
      <span slot="footer">Published today<art-button variant="link" size="sm">Read more</art-button></span>
    </art-item>
  `,
})
export class ItemHeaderAndFooter {}
