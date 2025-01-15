import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopz Ecommerce Backend for Admins', // Update the title
  description: 'An Ecommerce app for education purposes backend for admins', // Update the description
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
