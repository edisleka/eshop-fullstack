import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className }: Props) => {
  return (
    <div className={cn('text-2xl font-semibold', className)}>{children}</div>
  )
}
export default Title
