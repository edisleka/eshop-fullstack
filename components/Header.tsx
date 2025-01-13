import React from 'react'
import HeaderMenu from '@/components/HeaderMenu'
import Logo from '@/components/Logo'
import Container from '@/components/Container'
import MobileMenu from '@/components/MobileMenu'
import SearchBar from '@/components/SearchBar'
import CartIcon from '@/components/ui/CartIcon'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ListOrdered } from 'lucide-react'

const Header = async () => {
  const user = await currentUser()
  console.log('user: ', user)

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
          <ClerkLoaded>
            <SignedIn>
              <Link href='/orders' className='group relative'>
                <ListOrdered className='w-5 h-5 hover:text-darkColor hoverEffect' />
                <span className='absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-sm font-semibold flex items-center justify-center'>
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode='modal'>
                <button className='text-sm font-semibold hover:text-darkColor hoverEffect'>
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
