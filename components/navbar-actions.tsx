'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Combobox } from './combobox'

const NavbarActions = () => {
  //local storage safety
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Combobox />
      <Button className='flex items-center rounded-md bg-black px-4 py-2'>
        <ShoppingBag
          size={20}
          color='white'
        />
        <span className='ml-2 font-medium text-white'>0</span>
      </Button>
    </div>
  )
}

export default NavbarActions