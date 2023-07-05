'use client'

import { styled } from 'styled-components'
import { ReturnBtn } from '@/components/ReturnBtn'
import { UseLocalStorage } from '@/hooks/UseLocalStorage'
import { getProductPropsToCart } from '@/types/GetSingleProductProps'
import { CartItem } from '@/components/cart/CartItem'


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6.4375rem); // total without header heigth
  padding: 2rem 1rem;
  background-color: var(--bg-primary);

  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const CartListContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-dark);
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    color: var(--color-text-dark-2);

    span {
      font-weight: 500;
    }
  }
`
const CartList = styled.ul`
  list-style: none;
`

export default function CartPage() {
  const { value } = UseLocalStorage<getProductPropsToCart[]>('cart-item', [])
  
    const totalPrice = value.map(item => (item.price * item.quantity))
    const sumValue = () => totalPrice.reduce((a, b) => a + b, 0)
  
  return (
    <MainContainer>
      <Container>
        <ReturnBtn />
        <CartListContainer>
          <h3>Seu Carrinho</h3>
          <p>
            Total ({value.length} Produtos)
            <span> R${sumValue()}</span>
          </p>
          <CartList>
            {
              value.map(item => <CartItem key={item._id} {...item}/>)
            }
          </CartList>
        </CartListContainer>
      </Container>
    </MainContainer>
  )
}
