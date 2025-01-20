import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import PriceView from '@/components/PriceView'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='group text-sm rounded-lg overflow-hidden'>
      <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden'>
        {product?.images && (
          <Link href={`/product`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt='productImage'
              priority
              className={`w-full h-72 object-contain overflow-hidden group-hover:scale-105 hoverEffect`}
            />
          </Link>
        )}
      </div>
      <div className='py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none'>
        <h2 className='font-semibold line-clamp-1'>{product?.name}</h2>
        <p>{product.intro}</p>
        <PriceView />
      </div>
    </div>
  )
}
export default ProductCard
