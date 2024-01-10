import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/redux-toolkit/provider'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'The Golden Tent',
  description: 'Make your memories',
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
        </>
        </Providers>
        </body>
    </html>
  )
}
