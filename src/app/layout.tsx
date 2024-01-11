import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/redux-toolkit/provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'The Golden Tent',
  description: 'Golden Tent is a Middle eastern wedding and conference venues sourcing. We cater for all wedding venue in the middle east',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full bg-white'>
      <body className="h-full">
        <Providers>
        <>
        <Navbar />
        {children}
        <Footer/>
        </>
        </Providers>
        </body>
    </html>
  )
}
