import { Breadcrumb, BreadcrumbItem } from '@aranghat/navigation-react';

export default function Basic() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
