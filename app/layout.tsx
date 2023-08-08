import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs13 Blog',
  description: 'A beautiful blog built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-2xl mx-auto p-8`}>
        <Navbar></Navbar>
        <div className="mt-8">
          {children}
        </div>
      </body>
    </html>
  )
}
