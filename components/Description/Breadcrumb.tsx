import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Telescope, Home, ScrollText } from 'lucide-react';
import React from 'react';
// Adapter la page
export default function BreadcrumbHotel() {
  const { data } = useTemplateActivities();

  const findData = !data
    ? '<div>Non trouvé </div>'
    : data?.find((item: any) => item.id === 12);

  return (
    <Breadcrumb className="mt-8 ">
      <BreadcrumbList className="text-md">
        <BreadcrumbItem className="flex">
          <Home />
          <BreadcrumbLink href="/activities">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="flex">
          <Telescope />
          <BreadcrumbLink href="/activities/description/12">
            {findData?.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="flex">
          <ScrollText />
          <BreadcrumbLink href="/information/12">Information</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
