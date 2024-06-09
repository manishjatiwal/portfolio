import type { Metadata } from 'next'
import { Signika_Negative as Me } from 'next/font/google'
import './globals.css'

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
      <body className={`${font.variable} font-sans`}>{children}</body>
    </html>
  )
}
