import { Breadcrumb, BreadcrumbItem } from '@aranghat/navigation-react';

export default function Slash() {
  return (
    <>
      <Breadcrumb separator="slash">
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
