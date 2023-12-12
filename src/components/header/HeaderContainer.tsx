import { styled } from 'styled-components'
import { SearchInput } from './SearchInput'
import { Cart } from './Cart'
import { Logo } from './Logo'
import ProgressBar from '../progressBar'
import { UseLocalStorage } from '@/hooks/UseLocalStorage'
import { getProductPropsToCart } from '@/types/GetSingleProductProps'
import { useState } from 'react'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
  flex-wrap: wrap;
  
  :nth-child(2) {
    order: 2;
  }
  
  @media screen and (min-width: 425px) { 
    :nth-child(2) {
      order: initial;
      flex-wrap: nowrap;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 1.5rem 5rem;
  }
`

export function HeaderContainer() {
  const { value } = UseLocalStorage<getProductPropsToCart[]>('cart-item', [])
  const [totalValueInCart, setTotalValueInCart] = useState(0)
  console.log(value)

  const sumValue = () => {
    if (typeof value !== 'undefined') {
      const totalPriceArray = value.map(item => (item.price * item.quantity))
      return totalPriceArray.reduce((a, b) => a + b, 0)
    }
    return 0
  }

  return (
    <>
      <ProgressBar totalPriceProductCart={sumValue()} />
      <Header>
        <Logo />
        <SearchInput />
        <Cart />
      </Header>
    </>
  )
}
