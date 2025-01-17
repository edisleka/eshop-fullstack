'use client'

import { productType } from '@/constants'
import HomeTabbar from './HomeTabbar'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { Product } from '@/sanity.types'
import ProductCard from './ProductCard'
import NoProductsAvailable from './NoProductsAvailable'

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const query = `*[_type == 'product' && variant == $variant] | order(name asc)`
  const params = { variant: selectedTab.toLocaleLowerCase() }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await client.fetch(query, params)
        setProducts(await response)
      } catch (error) {
        console.log('Product fetching error: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [selectedTab])

  return (
    <div className='mt-10 flex flex-col items-center'>
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>
          <span>Product is loading...</span>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 bg-red-300 w-full'>
              {products?.map((product: Product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <NoProductsAvailable selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  )
}
export default ProductGrid
