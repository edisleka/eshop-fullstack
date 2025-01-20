import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useOutsideClick } from '@/hooks/useOutside'
import { headerData } from '@/constants'
import { motion } from 'motion/react'
import { X } from 'lucide-react'
import Logo from '@/components/Logo'
import SocialMedia from '@/components/SocialMedia'
import { SidebarProps } from '@/PropTypes/SidebarProps'

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl cursor-auto w-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className='min-w-72 max-w-96 bg-darkColor text-white/70 h-full p-10 border-r border-r-white flex flex-col gap-6'
      >
        <div className='flex justify-between items-center'>
          <button onClick={onClose}>
            <Logo className='text-white'>shopz</Logo>
          </button>

          <button className='hover:text-red-500 hoverEffect' onClick={onClose}>
            <X />
          </button>
        </div>
        <div className='flex flex-col gap-3.5 text-base font-semibold tracking-wide'>
          {headerData?.map((item) => (
            <Link
              onClick={onClose}
              key={item?.title}
              href={item?.href}
              className={`hover:text-white hoverEffect ${
                pathname === item?.href && 'text-white'
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  )
}
export default Sidebar
