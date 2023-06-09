'use client'

import { HeaderContainer } from '@/components/header/HeaderContainer'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Geass Store',
  description: 'Lojinha Virtual de variedades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={saira.className}>
        <HeaderContainer />
        {children}
        </body>
    </html>
  )
}
