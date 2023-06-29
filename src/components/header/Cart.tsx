import { UseLocalStorage } from "@/hooks/UseLocalStorage"
import { Bag } from "@/icons/Bag"
import { styled } from "styled-components"

const CartContainer = styled.div``

const CountContainer = styled.div`
    position: relative;
  `

const CartCount = styled.span`
    position: absolute;
    top: 40%;
    right: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--red-color);
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;    
    font-size: .8rem;
  `

export function Cart() {
  const { value } = UseLocalStorage('cart-products', [{}])
  
  console.log(value)
  return (
    <CartContainer>
      <CountContainer>
        <Bag />
        {<CartCount>{value.length > 1 ? value.length : '0'}</CartCount>}
      </CountContainer>
    </CartContainer>
  )
}
