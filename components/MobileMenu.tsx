'use client'

import { AlignLeft } from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <>
      <button onClick={toggleSidebar}>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden' />
      </button>
      <div className='md:hidden'>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  )
}
export default MobileMenu
