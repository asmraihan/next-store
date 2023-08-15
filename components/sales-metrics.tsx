import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import getOrders from '@/actions/get-orders'
import OrderRows from './rows/order-rows'
import getSold from '@/actions/get-sold'
import { Order } from '@/types' 
import getStock from '@/actions/get-stock'
import getRevenue from '@/actions/get-revenue'

const SalesMetrics = async () => {
    const orders = await getOrders()
    // console.log(orders)
    const salesNumber = await getSold()
    const stockNumber = await getStock()
    const revenue = await getRevenue()
    const values = Object.values(revenue)
    const value = values[0];
    console.log(value)
    return (
        <div className='mx-4 lg:mx-0'>
            <h2 className="text-2xl font-extrabold sm:text-3xl mb-2">
                Recent Sales
            </h2>
            <h2 className="text-xl font-medium sm:text-3xl text-gray-700 mb-4">
                Next Store made 365 sales this month.
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 ">
                <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:w-1/2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${value as string}</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Stock
                            </CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+{stockNumber}</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <path d="M2 10h20" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+{salesNumber}</div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Active Now
                            </CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className='lg:w-1/2 space-y-2'>
                    {
                        orders
                            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort 
                            .slice(0, 4) 
                            .map((order) => (
                                <OrderRows key={order.id} data={order}/>
                            ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SalesMetrics