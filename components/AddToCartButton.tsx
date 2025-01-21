import { AddToCartButtonProps } from '@/PropTypes/AddToCartButtonProps'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import QuantityButtons from './QuantityButtons'
import PriceFormatter from './PriceFormatter'

const AddToCartButton = ({ product, className }: AddToCartButtonProps) => {
  const isOutOfStock = product?.stock === 0
  const itemCount = 0

  return (
    <div>
      {itemCount ? (
        <div className='w-full text-sm'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground'>Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className='flex justify-between items-center border-t pt-1'>
            <span className='text-xs font-semibold'>Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          className={cn(
            'w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect',
            className
          )}
        >
          Add to cart
        </Button>
      )}
    </div>
  )
}
export default AddToCartButton
