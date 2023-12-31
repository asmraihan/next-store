import React from 'react'
import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import CallToAction from '@/components/call-to-action'
import ProductList from '@/components/product-list'
import SalesMetrics from '@/components/sales-metrics'
import Sponsor from '@/components/sponsors'
import { ThreeItemGrid } from '@/components/grid/three-item'
import { Carousel } from '@/components/carousel'
import { Suspense } from 'react';
export const revalidate = 0 /* no caching */

const HomePage = async () => {

  const billboard = await getBillboard("b7ebdaac-8a3a-4df6-859c-2cc1733e224f")
  const products = await getProducts({ isFeatured: true })
  return (
    <div>

      <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
        </div>
        <div className='mb-10'>
          <ThreeItemGrid items={products} />
        </div>
     
          <Suspense>
            <Carousel items={products} />
          </Suspense>
    
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-10 lg:mt-20'>
          <ProductList title="Featured Products" items={products} />
        </div>
        <div className='space-y-10 pb-10'>
          <CallToAction />
        </div>
        <div className='space-y-4 pb-10'>
          <SalesMetrics />
        </div>
        <div className='pb-10'>
          <Sponsor />
        </div>
      </Container>
    </div>
  )
}

export default HomePage