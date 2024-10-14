"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({item}) => {

    const pathName = usePathname();

  return (
    <Link 
        href={item.path}
        className={` 
            min-w-[100px] p-[10px] rounded-[20px] font-[500] text-center
            ${pathName === item.path && "bg-text text-bg"}
        `}
    >
        {item.title}
    </Link>
  )
}

export default NavLink