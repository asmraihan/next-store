import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { Footer } from '@/components/footer'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Store',
  description: 'E-Commerce Store built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
