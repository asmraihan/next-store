import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from '@/components/navbar-actions'
import Image from 'next/image'
import getProducts from '@/actions/get-products'
import { Combobox } from './combobox'

export const revalidate = 0 /* no caching */

const Navbar = async() => {

    const categories = await getCategories()
    const products = await getProducts({ })
    // console.log(products)
    return (
        <div className='border-b'>
            <Container>
                <div className='relative px-6 flex h-16 items-center'>
                    <Link href='/' className='lg:flex lg:ml-0 gap-x-2 hidden'>
                        <p className='font-black text-base lg:text-xl tracking-widest'>NEXT STORE</p>
                        {/* <Image alt='next-store' width={180} height={20} src={`https://i.ibb.co/GPF6jfG/2023-07-31-22-58-07-Brandmark-make-your-logo-in-minutes-Opera-removebg-preview.png`}></Image> */}
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