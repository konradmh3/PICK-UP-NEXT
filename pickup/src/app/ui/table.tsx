import Image from "next/image";
import { fetchFilteredRestaurants } from "@/app/lib/data";
import Link from "next/link";

export default async function RestaurantsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const restaurants = await fetchFilteredRestaurants(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {restaurants?.map((restaurant) => (
              <div
                key={restaurant.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="mb-2 flex text-black text-xl font-medium items-center">
                    <p>{restaurant.name}</p>
                  </div>
                  <p className="text-sm text-black">
                    Phone: {restaurant.phone}
                  </p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-black">{restaurant.address}</p>
                  </div>
                  <div className="pl-3">
                    <Link
                      href={`/dashboard/tempcards?restaurantID=${restaurant.id}`}
                      className="text-blue-500"
                    >
                      Menu
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium pl-6">
                  Restaurant
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Address
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Menu
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {restaurants?.map((restaurant) => (
                <tr
                  key={restaurant.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{restaurant.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-3 pr-3">
                    <p>{restaurant.phone}</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-3 pr-3">
                    <p>{restaurant.address}</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-3 pr-3">
                    <Link
                      href={`/dashboard/tempcards?restaurantID=${restaurant.id}`}
                      className="text-blue-500"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
