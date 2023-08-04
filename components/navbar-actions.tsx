'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import useCart from '@/hooks/use-cart'
import CartSheet from './cart/cart-sheet'

const NavbarActions = () => {
  //local storage safety
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])



  if (!isMounted) return null


  return (
    <div className="ml-auto flex items-center gap-x-4">
  
      <CartSheet />
      
    </div>
  )
}

export default NavbarActions