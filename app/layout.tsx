import type { Metadata } from 'next'
import { Signika_Negative as Me } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const font = Me({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-me'
})

export const metadata: Metadata = {
  title: 'jatiwal.dev',
  description: 'Portfolio website for Manish Kumar Jatiwal'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${font.variable} font-sans`}>
        <Header />
        <div className='absolute left-4 top-4 z-0 h-[calc(100vh-32px)] w-[calc(100vw-32px)] bg-gray-100' />
        {children}
      </body>
    </html>
  )
}
