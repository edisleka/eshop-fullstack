'use client'

import { productType } from '@/constants'
import HomeTabbar from './HomeTabbar'
import { useState } from 'react'

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '')

  return (
    <div className='mt-10 flex flex-col items-center'>
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  )
}
export default ProductGrid
