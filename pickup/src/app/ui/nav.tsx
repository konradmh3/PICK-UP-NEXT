import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Navlinks from "./navlinks";

export default function Nav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-orange-600 p-4 md:h-40"
        href="/"
      >
        <div
          className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
        >
          <p className="text-[44px]">Pick Up</p>
        </div>
      </Link>
      <div className="flex grow flex-row justif-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Navlinks/>
      </div>

    </div>
  );
}
