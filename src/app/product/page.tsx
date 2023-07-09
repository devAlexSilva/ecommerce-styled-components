'use client'

import { Api } from "@/api/sanity"
import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { getSingleProductProps } from "@/types/GetSingleProductProps"
import { urlForImage } from "@/utils/imageBuilder"
import { CartIcon } from "@/icons/CartIcon"
import { ReturnBtn } from '@/components/ReturnBtn'
import { formatPrice } from "@/utils/formatPrice"


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

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  place-self: center;
  gap: 2rem;
  
  img {
    max-width: 100%;
  }
  
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;

    img {
      max-width: 96%;
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    p {
      margin: .5rem 0 4rem;
    }
  }
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  max-width: 60%;
  min-width: 15rem;
  background-color: var(--orange-low);
  border-radius: 50px;
  cursor: pointer;
  
  button {
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: inherit;
    background-color: inherit;
    cursor: inherit;
}

  &:hover {
    background-color: var(--orange-low-hover);
  }
`

type props = {
  searchParams: {
    id: string
  }
}

export default function ProductDetailsPage({ searchParams: { id } }: props) {
  const [product, setProduct] = useState({} as getSingleProductProps)
  const newItem = {...product, quantity: 1}
  
  const getProduct = async (id: string) => {
    const data = await Api.getSingleProduct(id)
    setProduct(data[0])
    console.log(data)
  }

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem('cart-item')

    if (cartItems) {
      const cartItemsArray = JSON.parse(cartItems)

      let existProductIndex = cartItemsArray.findIndex((item: { _id: string }) => item._id === product._id)

      if (existProductIndex != -1) {
        cartItemsArray[existProductIndex].quantity += 1
      } else {
        cartItemsArray.push(newItem)
      }

      localStorage.setItem('cart-item', JSON.stringify(cartItemsArray))
    } else {
      localStorage.setItem('cart-item', JSON.stringify([newItem]))
    }

  }

  useEffect(() => {
    getProduct(id)
  }, [])

  return (
    <MainContainer>
      <ReturnBtn />
      {product._id &&
        <Wrapper>
          <img src={`${urlForImage(product.image[0]).width(450).height(550)}`} alt={product.slug} />
          <ContentContainer>
            <div>
              <h3>{product.name}</h3>
              <p>{formatPrice(product.price)}</p>
              <h4>Descrição</h4>
              <p>{product.description}</p>
            </div>

            <BtnContainer>
              <CartIcon />
              <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </BtnContainer>
          </ContentContainer>
        </Wrapper>
      }
    </MainContainer>
  )
}
