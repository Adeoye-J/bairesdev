import Link from "next/link"
import Links from "./Links"

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between">
      <Link href={"/"} className="text-[30px] font-bold">Bairesdev</Link>
      <div className="">
        <Links />
      </div>
    </div>
  )
}

export default Navbar