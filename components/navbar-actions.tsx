'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Combobox } from './combobox'
import useCart from '@/hooks/use-cart'

const NavbarActions = () => {
  //local storage safety
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()

  if (!isMounted) return null

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Combobox />
      <Button className='flex items-center  py-5 rounded-md bg-black '
      size={'sm'}
      >
        <ShoppingBag
          size={20}
          color='white'
        />
        <span className='ml-2 font-medium text-white'>{cart.items.length}</span>
      </Button>
    </div>
  )
}

export default NavbarActions