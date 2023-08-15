'use client'

import { useEffect, useState } from 'react'
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