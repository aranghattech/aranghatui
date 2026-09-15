import { Component } from '@angular/core';
import { ArtPagination } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-pagination-basic',
  imports: [ArtPagination],
  template: `
    <art-pagination page="2" total="3"></art-pagination>
  `,
})
export class PaginationBasic {}
