import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div>
        {product?.images && (
          <Link href={`/product`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt='productImage'
            />
          </Link>
        )}
      </div>
    </div>
  )
}
export default ProductCard
