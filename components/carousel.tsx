import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import getProducts from '@/actions/get-products';
import { Product } from '@/types';
import Container from './ui/container';

interface CarouselProps {
    items: Product[]
}


export const Carousel:React.FC<CarouselProps> = async({
    items
})=> {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getProducts({ isFeatured: true })
  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <Container >
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.id}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price,
                }}
                src={product.images[0]?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}