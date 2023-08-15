import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from '@/components/navbar-actions'
import getProducts from '@/actions/get-products'
import { Combobox } from './combobox'

export const revalidate = 0 /* no caching */

const Navbar = async() => {

    const categories = await getCategories()
    const products = await getProducts({ })
    // console.log(products)
    return (
        <div className='fixed w-full top-0 z-40 border-b bg-background'>
            <Container>
                <div className='relative px-6 flex h-16 items-center'>
                    <Link href='/' className='lg:flex lg:ml-0 gap-x-2 hidden'>
                        <p className='font-black text-base lg:text-xl tracking-widest'>NEXT STORE</p>         
                    </Link>
                    <Link href='/' className='flex lg:hidden'>
                        <p className='font-black text-xl tracking-widest'>NEXT</p>           
                    </Link>
                    <MainNav data={categories} />
                    <Combobox data={products} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar