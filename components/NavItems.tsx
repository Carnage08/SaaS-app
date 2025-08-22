'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
const navItems=[
            {lable: 'Home', href: '/'},
            {lable: 'Companions', href: '/companions'},
            {lable: 'My Journey', href: '/my-journey'},
            {lable: 'Subscription', href: '/subscription'}]
const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className='flex items-center gap-4'>
        {navItems.map(({lable, href}) => (
            <Link key={href} href={href} className={cn(pathname===href ? 'text-blue-300 font-semibold' : 'text-gray-400')}>
                <p className='cursor-pointer'>{lable}</p>
            </Link>
        ))}
    </nav>
  )
}

export default NavItems