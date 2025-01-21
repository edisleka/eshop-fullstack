import { QuantityButtonsProps } from '@/PropTypes/QuantityButtonsProps'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const QuantityButtons = ({ product, className }: QuantityButtonsProps) => {
  const itemCount = 4

  return (
    <div className={cn('flex items-center gap-1 text-base pb-1', className)}>
      <Button variant='outline' size='icon' className='w-6 h-6'>
        <Minus />
      </Button>
      <span className='font-semibold w-8 text-center text-darkColor'>
        {itemCount}
      </span>
      <Button variant='outline' size='icon' className='w-6 h-6'>
        <Plus />
      </Button>
    </div>
  )
}
export default QuantityButtons
