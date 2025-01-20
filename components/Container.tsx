import { cn } from '@/lib/utils'
import { BasicProps } from '@/PropTypes/BasicProps'

const Container = ({ children, className }: BasicProps) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4 ', className)}>
      {children}
    </div>
  )
}
export default Container
