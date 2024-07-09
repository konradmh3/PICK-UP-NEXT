import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Navlinks from "./navlinks";
import Image from "next/image";


export default function Nav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <Link
        className={`${lusitana.className} mb-2 flex h-20 leading-none text-white items-end justify-between rounded-md bg-orange-600 p-4 md:h-40`}
        href="/"
      >

          <p className="text-[44px]">Pick Up</p>
          <Image
            className="block ml-3 md:hidden"
            src="/burritoEmoji.svg"
            alt="burrito emoji Logo"
            width={45}
            height={12}
            priority
          />

      </Link>
      <div className="flex flex-row justif-between space-x-2 md:h-full md:flex-col md:space-x-0 md:space-y-2">
        <Navlinks/>      
        <div className='hidden grow gap-2 rounded-md bg-gray-50 p-2 px-3 md:block'></div>
      </div>

    </div>
  );
}
