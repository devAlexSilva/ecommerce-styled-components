'use client'
import './globals.css'
import { HeaderContainer } from '@/components/header/HeaderContainer'
import { Saira } from 'next/font/google'
import { FiltersContextProvider } from '@/contexts/Filters'

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

// export const metadata = {
//   title: 'Geass Store',
//   description: 'Lojinha Virtual de variedades'
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <title>Pisces Store</title>
      <body className={saira.className}>
        <FiltersContextProvider>
          <HeaderContainer />
          {children}
        </FiltersContextProvider>
      </body>
    </html>
  )
}
