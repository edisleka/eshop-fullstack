import { AddToCartButtonProps } from '@/PropTypes/AddToCartButtonProps'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const AddToCartButton = ({ product, className }: AddToCartButtonProps) => {
  const isOutOfStock = product?.stock === 0

  return (
    <div>
      <Button
        disabled={isOutOfStock}
        className={cn(
          'w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect',
          className
        )}
      >
        Add to cart
      </Button>
    </div>
  )
}
export default AddToCartButton
