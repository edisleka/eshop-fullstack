import { PriceViewProps } from '@/PropTypes/PriceViewProps'
import PriceFormatter from './PriceFormatter'
import { cn } from '@/lib/utils'

const PriceView = ({ price, discount, className }: PriceViewProps) => {
  return (
    <div className='flex items-center gap-2'>
      <PriceFormatter amount={price} className={className} />
      {price && discount && (
        <PriceFormatter
          className={cn('line-through font-medium text-zinc-500', className)}
          amount={price + (discount * price) / 100}
        />
      )}
    </div>
  )
}
export default PriceView
