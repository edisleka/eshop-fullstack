import { cn } from '@/lib/utils'
import { BasicProps } from '@/PropTypes/BasicProps'

const Title = ({ children, className }: BasicProps) => {
  return (
    <div className={cn('text-2xl font-semibold', className)}>{children}</div>
  )
}
export default Title
