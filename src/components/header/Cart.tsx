import { UseLocalStorage } from "@/hooks/UseLocalStorage"
import { CartIcon } from "@/icons/CartIcon"
import { styled } from "styled-components"

const CartContainer = styled.div``

export function Cart() {
  const { value, updateLocalStorage } = UseLocalStorage('cart-products')
  
  const handleCart = () => updateLocalStorage("3")
  
  console.log(value)
  return (
    <CartContainer>
      <CartIcon />
      <button onClick={handleCart}>test</button>
      <span>{value ?? 3}</span>
    </CartContainer>
  )
}
