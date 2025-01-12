import React from 'react'
import HeaderMenu from '@/components/HeaderMenu'
import Logo from '@/components/Logo'
import Container from '@/components/Container'
import MobileMenu from '@/components/MobileMenu'
import SearchBar from '@/components/SearchBar'
import CartIcon from '@/components/ui/CartIcon'

const Header = () => {
  return (
    <header className=' border-b border-b-gray-400 py-5'>
      <Container className='flex justify-between items-center gap-7 text-lightColor'>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex justify-center items-center gap-2.5'>
          <MobileMenu />
          <Logo>shopz</Logo>
        </div>
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <div>
            <button className='text-sm font-semibold hover:text-darkColor hoverEffect'>
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
