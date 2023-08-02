"use client"

import { Product } from '@/types'
import React from 'react'
import { Button } from  '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

interface InfoProps {
    data: Product
}
const Info: React.FC<InfoProps> = ({
    data
}) => {
    return (
        <div >
            <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
            <div className='mt-3 flex items-end justify-between'>
                <p className='text-2xl text-gray-900 font-semibold '>
                    ${data.price}
                </p>
            </div>
            <hr className='my-4 ' />
            <div className='flex items-center gap-x-4 mt-4'>
                <h3 className='font-semibold text-black'>Size :</h3>
                <div className='font-medium '>
            {data?.size?.name} ( {data?.size?.value} )
                </div>
            </div>
            <div className='flex items-center gap-x-4 mt-4'>
                <h3 className='font-semibold text-black'>Color :</h3>
                <div className='font-medium flex  items-center'>
                   <p className='mr-2'>{data?.color?.name}</p>
                   <div className='h-6 w-6 rounded-full border border-gray-600 '
                   style={{ backgroundColor: data?.color?.value  }}
                   >
                   </div>
                </div>
            </div>
            <div className='mt-10 flex items-center gap-x-3'>
                    <Button>
                            Add To Cart 
                            <ShoppingCart className='ml-2' size={20} />
                    </Button>
            </div>
        </div>
    )
}

export default Info