import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const CallToAction = () => {
    return (
        <section
            id="create-a-store-banner"
            aria-labelledby="create-a-store-banner-heading"
            className="grid place-items-center gap-6 rounded-lg border bg-slate-950 px-6 py-8 lg:py-16 text-center shadow-sm my-10 lg:my-20 mx-4"
        >
            <h2 className="text-4xl text-white font-extrabold">
                Check out the inventory
            </h2>
            <h2 className="text-xl text-gray-300 font-medium sm:text-3xl">
                Do you want to sell your products on our website?
            </h2>
            <Link href="https://next-admin-gray.vercel.app/">
                <Button
                    variant={'outline'}
                >
                    <span className="font-semibold">Create a store</span>
                </Button>
            </Link>
        </section>
    )
}

export default CallToAction