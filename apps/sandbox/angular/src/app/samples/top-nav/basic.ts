import { Component } from '@angular/core';
import { ArtTopNav } from '@aranghat/navigation-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-top-nav-basic',
  imports: [ArtButton, ArtTopNav],
  template: `
    <art-top-nav>
      <a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>
      <a href="#" aria-current="page">Overview</a>
      <a href="#">Customers</a>
      <a href="#">Products</a>
      <a href="#">Settings</a>
      <art-button slot="end" variant="ghost" size="sm">Sign in</art-button>
      <art-button slot="end" size="sm">Get started</art-button>
    </art-top-nav>
  `,
})
export class TopNavBasic {}
