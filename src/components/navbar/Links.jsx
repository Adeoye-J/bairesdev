"use client"

import Link from "next/link"
import NavLink from "./navLink"
import { useState } from "react"

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
]

const Links = () => {
    const [open, setOpen] = useState(false)

    const session = true
    const isAdmin = false

    const login = {
        title: "Login",
        path: "/login"
    }

    const admin = {
        title: "Admin",
        path: "/admin"
    }

    return (
        <div className="">
            <div className="hidden md:flex items-center gap-[10px]">
                {
                    links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))
                }
                {
                    session
                    ? (<>{isAdmin && <NavLink item={admin} />} <button className="rounded-sm p-[10px] cursor-pointer font-bold">Logout</button></>)
                    : <NavLink item={login} />
                }
            </div>
            {/* Mobile Links */}
            <button className="cursor-pointer md:hidden" onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && 
                <div className="md:hidden absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-bg flex flex-col items-center justify-center gap-3 transition delay-500 ease-in-out">
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Links