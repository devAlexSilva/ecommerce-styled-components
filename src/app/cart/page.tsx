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

  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`

const Container = styled.div`
  display: flex;
  //justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
  `

const CartList = styled.ul`
  list-style: none;
`

const CartResume = styled.section`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: flex-start;
 background-color: #FFF;
 min-height: 50vh;
 min-width: 22rem;
 padding: 1rem 1.5rem;

 h3 {
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
  color: var(--text-dark-2);
 }

 div {
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: 400;
  }

 }

 div:last-child {
  margin-top: 2rem;
  border-top: 2px solid var(--orange-low);
  width: 100%;
}
`

export default function CartPage() {
  const { value, updateLocalStorage } = UseLocalStorage<getProductPropsToCart[]>('cart-item', [])
  
  let freightValue = 40
  const totalPriceArray = value.map(item => (item.price * item.quantity))
  const sumValue = () => totalPriceArray.reduce((a, b) => a + b, 0)
  const totalPriceFormated = formatPrice(sumValue())

  const handleUpdateQuantity = (newQuantity: number, id: string) => {
    const newValue = value.map(item => {
      if (item._id !== id) return item
      return { ...item, quantity: newQuantity }
    })

    updateLocalStorage(newValue)
  }
  const handleRemoveItem = (id: string) => {
    const newValue = value.filter((item) => item._id !== id)
    updateLocalStorage(newValue)
  }

  return (
    <MainContainer>
      <ReturnBtn />
      <h3>Seu Carrinho</h3>
      <p>
        Total ({value.length} {value.length > 1 ? 'Produtos' : 'Produto'})
        <span> {totalPriceFormated}</span>
      </p>
      <Container>
        <CartList>
          {
            value.map(item =>
              <CartItem
                key={item._id}
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleRemoveItem={handleRemoveItem}
              />)
          }
          {
            value.map(item =>
              <CartItem
                key={item._id}
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleRemoveItem={handleRemoveItem}
              />)
          }
        </CartList>
        <CartResume>
          <h3>RESUMO DO PEDIDO</h3>
          <div>
            <p>Sub total de produtos</p>
            <p>{totalPriceFormated}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>{formatPrice(freightValue)}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{formatPrice(sumValue()+freightValue)}</p>
          </div>
        </CartResume>
      </Container>
    </MainContainer>
  )
}
