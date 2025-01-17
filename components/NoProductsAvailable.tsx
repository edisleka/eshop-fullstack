import { cn } from '@/lib/utils'
import { NoProductsAvailableProps } from '@/PropTypes/NoProductsAvailableProps'
import { Loader2 } from 'lucide-react'
import { motion } from 'motion/react'

const NoProductsAvailable = ({
  selectedTab,
  className,
}: NoProductsAvailableProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl font-bold text-gray-800'>
          No Products Available
        </h2>
      </motion.div>
      <motion.p
        className='text-gray-600'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        We&apos;re sorry, but there are no products available for{' '}
        <span className='text-base font-semibold text-darkColor'>
          {selectedTab}
        </span>{' '}
        at the moment.
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className='flex items-center space-x-2 text-blue-600 '
      >
        <Loader2 className='w-4 h-4 animate-spin' />{' '}
        <span>We&apos;re restocking shortly</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className='text-sm text-gray-600'
      >
        Please check back later or explore our other products.
      </motion.p>
    </div>
  )
}
export default NoProductsAvailable
