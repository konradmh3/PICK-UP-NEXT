import { lusitana } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";


export default function dashboard() {
  return (
    <>
      <div
        className={`${lusitana.className} border-b-2 text-white flex flex-col justify-end p-4 pt-0 md:border-b-0 md:rounded-md md:pt-4 md:h-80 md:bg-orange-600`}
      >
        <div className="flex items-center">
        <p className="text-[44px]">Welcome to Pick Up
        </p>
        <Image
              className="hidden ml-4 md:block"
              src="/burritoEmoji.svg"
              alt="Vercel Logo"
              width={80}
              height={24}
              priority
            />
            </div>
        <p className="text-[24px]">The best way to order food online!</p>
      </div>
      <div className={`${lusitana.className} text-white text-[18px] py-4 px-8`}>
        This is a concept web app where users can explore a curated list of
        restaurants, view their menus, and place orders for pickup with ease. If
        you&apos;re a restaurant owner, you can add your restaurant and manage your
        menus seamlessly.
      </div>

      <div
        className={`${lusitana.className} border-t-2 text-white text-[18px] py-4 px-8`}
      >
        Use the following options to get started:
      </div>
      <div className="flex text-white flex-col">
      <Link href="/dashboard/restaurants">
          <p className="flex justify-center border-gray-300 py-4 border-white border-b hover:bg-zinc-800/30">
            Go to restaurants and order!
          </p>
        </Link>
        <Link href="/dashboard/manage/restaurant">
          <p className="flex justify-center border-gray-300 py-4 border-white border-b hover:bg-zinc-800/30 ">
            Add your restaurant!
          </p>
        </Link>
        <Link href="/dashboard/manage/menu">
          <p className="flex justify-center border-gray-300 py-4 border-white border-b hover:bg-zinc-800/30">
            Add a menu or menu item!
          </p>
        </Link>
      </div>
    </>
  );
}
