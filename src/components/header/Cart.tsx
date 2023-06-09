import { UseLocalStorage } from "@/hooks/UseLocalStorage"
import { CartIcon } from "@/icons/CartIcon"
import { styled } from "styled-components"

const CartContainer = styled.div``

export function Cart() {
  const { value, updateLocalStorage } = UseLocalStorage('cart-products')

  const handleCart = () => updateLocalStorage('3')

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

  console.log(value)
  return (
    <CartContainer>
      <CountContainer>
        <CartIcon />
        {value.length && <CartCount>{value.length}</CartCount>}
      </CountContainer>
    </CartContainer>
  )
}
