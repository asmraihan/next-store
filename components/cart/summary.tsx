'use client'
import React, { useState } from 'react'
import axios from "axios";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Button } from '../ui/button';
import { Icons } from '../icons';

const Summary = () => {
    const [isPending, setIsPending] = useState(false)

    const items = useCart((state) => state.items)

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)

    const onCheckout = async () => {
        setIsPending(true)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        })
        window.location = response.data.url
        setIsPending(false)
    }
    
    return (
        <div className=' rounded-lg bg-gray-50 px-4 py-6 sm:p-6 '>
            <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                    <div className='text-base font-medium text-gray-900'>
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button
                disabled={items.length === 0 || isPending}
                variant="default"
                size="lg"
                className='w-full mt-6 bg-black'
                onClick={onCheckout}
            >
                {isPending && (
                    <Icons.spinner
                        className="mr-2 h-4 w-4 animate-spin"
                        aria-hidden="true"
                    />
                )}
                Checkout
            </Button>
        </div>
    )
}

export default Summary