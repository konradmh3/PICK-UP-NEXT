import Link from "next/link";

export default function Manager(){
    return(
    <>
        <div className="flex text-white h-full flex-col justify-center">
        <Link href="/dashboard/manage/restaurant">
          <p className="flex justify-center border-gray-300 py-4 border-white border-y hover:bg-zinc-800/30 ">
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
