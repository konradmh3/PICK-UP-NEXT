import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/table';



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

  // const totalPages = await fetchInvoicesPages(query);

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
      {/* <Pagination totalPages={totalPages} /> */}
    </div>
  </div>;
    }
    