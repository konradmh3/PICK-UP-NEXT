import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchRestaurantPages } from '@/app/lib/data';
import { fetchRestrauntMenu } from '@/app/lib/data';

import Table from '@/app/ui/table';
import Pagination from '@/app/ui/pagination';




export default async function restaurants({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page || 1);
  // above his how to recieve something from the url

  const totalPages = await fetchRestaurantPages(query);
  const restarauntMenuItems =  await fetchRestrauntMenu(2);
  // above calls the function to fetch the data from the database and the param is the restaraunt id. We need to get
  // the id from which restaraunt the user clicked on add it to the url and then get it from the url and pass it to the function

    return <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>Restaurants</h1>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Suspense fallback={null}>
        {/* create skeleton for the above */}
        <Search placeholder="Search restaurants..." />
      </Suspense>
      {/* <CreateInvoice /> */}
    </div>
     <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
      <Table query={query} currentPage={currentPage} />
    </Suspense>
    <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  </div>;
    }
    