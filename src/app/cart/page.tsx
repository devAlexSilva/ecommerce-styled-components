'use client'

import { styled } from 'styled-components'
import { ReturnBtn } from '@/components/ReturnBtn'
import { UseLocalStorage } from '@/hooks/UseLocalStorage'
import { getProductPropsToCart } from '@/types/GetSingleProductProps'
import { CartItem } from '@/components/cart/CartItem'
import { formatPrice } from '@/utils/formatPrice'


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
  const { value, updateLocalStorage } = UseLocalStorage<getProductPropsToCart[]>('cart-item', [])

  const totalPriceArray = value.map(item => (item.price * item.quantity))
  const sumValue = () => totalPriceArray.reduce((a, b) => a + b, 0)
  const totalPriceFormated = formatPrice(sumValue())
  

  const handleUpdateQuantity = (newQuantity: number, id: string) => {
    const newValue = value.map(item => {
      if(item._id !== id) return item
      
      return {...item, quantity: newQuantity}
    })

    updateLocalStorage(newValue)
  }

  return (
    <MainContainer>
      <Container>
        <ReturnBtn />
        <CartListContainer>
          <h3>Seu Carrinho</h3>
          <p>
            Total ({value.length} Produtos)
            <span> {totalPriceFormated}</span>
          </p>
          <CartList>
            {
              value.map(item => <CartItem key={item._id} product={item} handleUpdateQuantity={handleUpdateQuantity} />)
            }
          </CartList>
        </CartListContainer>
      </Container>
    </MainContainer>
  )
}
