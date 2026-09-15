import { Component } from '@angular/core';
import { ArtBreadcrumb, ArtBreadcrumbItem } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-breadcrumb-basic',
  imports: [ArtBreadcrumb, ArtBreadcrumbItem],
  template: `
    <art-breadcrumb>
      <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>
      <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>
      <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>
    </art-breadcrumb>
  `,
})
export class BreadcrumbBasic {}
