import Provider from '@/components/Provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpeninApp',
  description: 'OpeninApp assignment for React/Next js internship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider >
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
