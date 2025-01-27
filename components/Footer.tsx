import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div>Footer</div>
      </Container>
    </footer>
  )
}

export default Footer
