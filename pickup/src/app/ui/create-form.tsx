'use client';

// import { CustomerField } from '@/app/lib/definitions';
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createRestaurant } from "@/app/lib/actions";

export default function Form() {

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>){
    e.target.value = e.target.value.replace(/\D/g, '');
    if(e.target.value.length > 3 && e.target.value.length <= 6){
      e.target.value = `(${e.target.value.slice(0,3)})${e.target.value.slice(3,6)}`;
    }else if (e.target.value.length > 6){
      e.target.value = `(${e.target.value.slice(0,3)})${e.target.value.slice(3,6)}-${e.target.value.slice(6,10)}`;
    }
  }


  return (
    <form action={createRestaurant}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Set the restaurant name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter name of the restaurant"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            Set the address
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="string"
                placeholder="Enter the address of the restaurant"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Set the restaurant phone number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
                // required
                placeholder="(xxx)xxx-xxxx"
                minLength={9}
                maxLength={13}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                onChange={handlePhoneChange}
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
        <Button type="submit">Create Restaurant</Button>
      </div>
    </form>
  );
}
