import { Breadcrumb, BreadcrumbItem } from '@aranghat/navigation-react';

export default function Ellipsis() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem ellipsis />
        <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
