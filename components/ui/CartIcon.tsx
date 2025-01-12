import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const CartIcon = () => {
  return (
    <Link href='/cart' className='group relative'>
      <ShoppingBag className='w-5 h-5 hover:text-darkColor hoverEffect' />
      <span className='absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-sm font-semibold flex items-center justify-center'>
        0
      </span>
    </Link>
  )
}
export default CartIcon
