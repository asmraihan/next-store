"use client"

import * as React from "react"
import { Product } from '@/types'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { toast } from 'react-hot-toast'
import { Icons } from "./icons"
interface InfoProps {
    data: Product
}
const Info: React.FC<InfoProps> = ({
    data
}) => {
    const [isPending, startTransition] = React.useTransition()
    const cart = useCart()
    const onAddToCart = () => {

        startTransition(async () => {
            try {
                await cart.addItem(data)
                // toast.success("Added to cart.")
            } catch (error) {
                error instanceof Error
                    ? toast.error(error.message)
                    : toast.error("Something went wrong, please try again.")
            }
        })
    }
    return (
        <div className="lg:ml-12 lg:mt-10">
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
                        style={{ backgroundColor: data?.color?.value }}
                    >
                    </div>
                </div>
            </div>
            <div className='mt-10 flex items-center gap-x-3'>
                <Button
                    aria-label="Add to cart"
                    size="lg"
                    className="w-full rounded-sm"
                    disabled={isPending}
                    onClick={onAddToCart}
                >
                    {isPending && (
                        <Icons.spinner
                            className="mr-2 h-4 w-4 animate-spin"
                            aria-hidden="true"
                        />
                    )}
                    {!isPending && (
                        <ShoppingCart className="w-4 h-4 mr-2" />
                    )} Add to cart
                </Button>
            </div>
        </div>
    )
}

export default Info