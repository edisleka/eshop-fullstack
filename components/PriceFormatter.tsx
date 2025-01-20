import { cn } from '@/lib/utils'
import { PriceFormatterProps } from '@/PropTypes/PriceFormatterProps'

const PriceFormatter = ({ amount, className }: PriceFormatterProps) => {
  const formattedPrice = new Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  return (
    <span className={cn('text-sm font-semibold text-darkColor', className)}>
      {formattedPrice}
    </span>
  )
}
export default PriceFormatter
