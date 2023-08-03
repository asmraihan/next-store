import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const CallToAction = () => {
    return (
        <section
            id="create-a-store-banner"
            aria-labelledby="create-a-store-banner-heading"
            className="grid place-items-center gap-6 rounded-lg border bg-card px-6 py-16 text-center text-card-foreground shadow-sm my-20"
        >
            <h2 className="text-2xl font-medium sm:text-3xl">
                Do you want to sell your products on our website?
            </h2>
            <Link href="https://next-admin-gray.vercel.app/">
                <div className={cn(buttonVariants())}>
                    Create a store
                    <span className="sr-only">Create a store</span>
                </div>
            </Link>
        </section>
    )
}

export default CallToAction