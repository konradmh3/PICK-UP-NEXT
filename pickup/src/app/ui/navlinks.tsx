'use client';

import clsx from 'clsx';
import Link from "next/link";
import { usePathname } from 'next/navigation';



    const links = [
        { name: 'Home', href: '/dashboard'},
        {
          name: 'Restaurants',
          href: '/dashboard/restaurants'
        },
        {
            name: 'Manager',
            href: '/dashboard/manage'
        }
      ];
export default function Navlinks() {
    const pathname = usePathname();
  return (
<>
{links.map((link) => (
    <Link key={link.name} href={link
    .href} className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-100 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-orange-100 text-orange-600': pathname === link.href,
        },
        {
            'text-gray-900': pathname !== link.href,
        },
      )}>
        <p>{link.name}</p>
    </Link>
))}

</>
  
);
}