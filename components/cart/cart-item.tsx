"use client"

import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import Currency from '../ui/currency'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
import { Button } from '../ui/button'

interface CartItemProps {
    data: Product
}

const CartItem: React.FC<CartItemProps> = ({
    data,
}) => {
    const cart = useCart()

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <li className='flex py-6 border-b'>
            <div className='relative h-12 w-12 rounded-md overflow-hidden sm:h-12 sm:w-12'>
                <Image
                    fill
                    src={data.images[0].url}
                    alt=''
                    className='object-cover object-center'
                />
            </div>
            <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                <div className='absolute z-10 right-0 top-0'>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={onRemove}
                    > <X size={18} />
                    </Button>
                </div>
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                    <div className='flex justify-between '>
                        <p className=' font-semibold text-black'>
                            {data.name}
                        </p>
                    </div>
                    <div className='mt-1 text-sm flex'>
                        <p className='text-gray-500'>{data.color.name}</p>
                        <p className='text-gray-500 ml-2 border-l border-gray-200 pl-2'>{data.size.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    )
}

export default CartItem