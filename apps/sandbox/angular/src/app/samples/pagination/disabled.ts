import { Component } from '@angular/core';
import { ArtPagination } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-pagination-disabled',
  imports: [ArtPagination],
  template: `
    <art-pagination page="10" total="10"></art-pagination>
  `,
})
export class PaginationDisabled {}
