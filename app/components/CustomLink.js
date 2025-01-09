"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomLink = ({path, children}) => {

    const pathname = usePathname();
    const active = pathname === path;
  return (
    <div>
      <Link className={active ? "text-blue-800 font-semibold" : ""} href={path}>{children}</Link>
    </div>
  )
}

export default CustomLink
