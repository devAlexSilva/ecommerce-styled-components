import { UseLocalStorage } from "@/hooks/UseLocalStorage"
import { Bag } from "@/icons/Bag"
import Link from "next/link"
import { styled } from "styled-components"

const CartContainer = styled.div`
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
  const { value } = UseLocalStorage('cart-item',[{_id: null}])

  return (
    <CartContainer>
      <Link href='/cart'>
        <Bag />
        {<CartCount>{value[0]._id !== null ? value.length : '0'}</CartCount>}
      </Link>
    </CartContainer>
  )
}
