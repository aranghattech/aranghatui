import { Component } from '@angular/core';
import { ArtPagination } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-pagination-many-pages',
  imports: [ArtPagination],
  template: `
    <art-pagination page="12" total="40"></art-pagination>
  `,
})
export class PaginationManyPages {}
