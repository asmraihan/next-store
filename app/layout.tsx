import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { Footer } from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from 'react-hot-toast'

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
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Toaster
        toastOptions={{
          className: 'mt-10',
          style: {
            border: '1px solid #E6E9EC',
            padding: '16px',
            color: '#000000',
          },
          success: {
            iconTheme: {
              primary: 'black',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: 'black',
              secondary: 'white',
            },
          },
        }}
        />
      </body>
    </html>
  )
}
