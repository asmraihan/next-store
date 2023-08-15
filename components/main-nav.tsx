'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className='mx-2 lg:mx-6 flex items-center space-x-2 lg:space-x-6 overflow-x-auto'>
      {
        routes.map((route) => (
          <Link key={route.href}
            href={route.href}
            className={cn(
              " font-semibold transition-colors hover:text-black",
              route.active ? "text-black border-b border-gray-500" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default MainNav