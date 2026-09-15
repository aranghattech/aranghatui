import { Pagination } from '@aranghat/navigation-react';

// Real links: `{page}` in `hrefTemplate` becomes the page number, so the browser (and crawlers) navigate; read `?page` on the server or in your router.
export default function Links() {
  return <Pagination page={3} total={10} hrefTemplate="?page={page}" />;
}
