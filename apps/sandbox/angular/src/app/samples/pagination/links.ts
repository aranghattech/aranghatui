import { Component } from '@angular/core';
import { ArtPagination } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-pagination-links',
  imports: [ArtPagination],
  // Real links: `{page}` in `href-template` becomes the page number, so the browser (and crawlers) navigate; read `?page` on the server or in your router.
  template: `<art-pagination [page]="3" [total]="10" href-template="?page={page}"></art-pagination>`,
})
export class PaginationLinks {}
