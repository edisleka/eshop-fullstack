import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import localFont from 'next/font/local'

const raleway = localFont({
  src: './fonts/Raleway.woff2',
  variable: '--font-raleway',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Shopz Ecommerce App for Shoppers',
  description: 'An Ecommerce app for education purposes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${raleway.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
