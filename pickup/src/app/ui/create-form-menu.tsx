import { RestaurantField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createMenuItem } from '@/app/lib/actions';

export default function Form({
  restaurants,
}: {
  restaurants: RestaurantField[];
}) {
  return (
    <form action={createMenuItem}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Restaurant Name */}
        <div className="mb-4">
          <label htmlFor="restaurant" className="mb-2 block text-sm font-medium">
            Choose restaurant
          </label>
          <div className="relative">
            <select
              id="restaurant"
              name="restaurantId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a restaurant
              </option>
              {restaurants.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="menuitem" className="mb-2 block text-sm font-medium">
            Set the item name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="menuitem"
                name="menuitem"
                type="string"
                placeholder="Enter name of the menu item"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="customize" className="mb-2 block text-sm font-medium">
            Set the customizability
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customize"
                name="customize"
                type="string"
                placeholder="customize1, customize2, customize3, ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Item Price/Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose a price for menu item
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.25"
                min={0}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/manage"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Menu Item</Button>
      </div>
    </form>
  );
}
