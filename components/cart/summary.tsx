'use client'
import React from 'react'

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from '../ui/button';


const Summary = () => {
    const SearchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)
    return (
        <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 '>
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
                variant="default"
                size="lg"
                className='w-full mt-6 bg-black'
            >
                Checkout
            </Button>
        </div>
    )
}

export default Summary