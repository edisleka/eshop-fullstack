import AddToCartButton from '@/components/AddToCartButton'
import Container from '@/components/Container'
import ImageView from '@/components/ImageView'
import PriceView from '@/components/PriceView'
import ProductCharateristics from '@/components/ProductCharateristics'
import { getProductBySlug } from '@/sanity/helpers/queries'
import { Heart } from 'lucide-react'
import { notFound } from 'next/navigation'

const SinglePruductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return notFound() // 404
  }

  return (
    <Container className='py-10 flex flex-col md:flex-row gap-10'>
      {product?.images && <ImageView images={product?.images} />}
      <div className='w-full md:w-1/2 flex flex-col gap-5'>
        <div className='text-3xl md:text-4xl font-bold mb-2'>
          <h2>{product?.name}</h2>
          <PriceView
            price={product?.price}
            discount={product.discount}
            className='font-bold text-lg'
          />
        </div>
        {product?.stock && (
          <p className='bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg'>
            In Stock
          </p>
        )}
        <p className='text-sm text-gray-600 tracking-wide'>
          {product?.description}
        </p>
        <div className='flex gap-2.5 items-center lg:gap-5'>
          <AddToCartButton
            product={product}
            className='bg-darkColor/80 text-white hover:bg-darkColor hover:border-darkColor hoverEffect'
          />
          <button className='border-2 border-darkColor/30 text-darkColor/60 px-2.5 py-1.5 hoverEffect rounded-md hover:text-darkColor'>
            <Heart className='w-5 h-5' />
          </button>
        </div>
        <ProductCharateristics product={product} />
      </div>
    </Container>
  )
}
export default SinglePruductPage
