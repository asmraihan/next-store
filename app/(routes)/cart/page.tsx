import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CartPage = () => {
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