"use client"

import { Button } from '@/components/ui/button'
import useCart from '@/hooks/use-cart'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from "react-hot-toast";
const CartPage = () => {
  const searchParams = useSearchParams()

  const removeAll = useCart((state) => state.removeAll)
  useEffect(() => {
    if(searchParams.get("success")){
        toast.success("Payment was successful")
        removeAll()
    }
    if(searchParams.get("canceled")){
        toast.error("Payment was canceled")
    }
}, [searchParams, removeAll])

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
            <h1 className='text-black font-black text-7xl mb-20'>Order Success!</h1>
            <Button className='mt-4'>
                <Link href='/'>
                    Go back home
                </Link>
            </Button>
    </div>
  )
}

export default CartPage