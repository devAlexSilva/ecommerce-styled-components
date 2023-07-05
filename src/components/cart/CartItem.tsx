'use client'

import { getProductPropsToCart } from "@/types/GetSingleProductProps"
import { urlForImage } from "@/utils/imageBuilder"
import { styled } from "styled-components"

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 13.25rem;

  border-radius: 8px;
  background-color: #FFF;
  margin: 1rem 0;

  img {
    height: 100%;
    min-width: 16rem;
    border-radius: 8px 0 0 8px;
  }

  `
const Description = styled.div`
    color: var(--text-dark-2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    width: 100%;
    padding: 0 1.25rem 1.25rem;

    h4 {
      font-weight: 300;
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
    > div p {
      font-weight: 400;
      font-size: .75rem;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }

    > div + div {
      display: flex;
      justify-content: space-between;

      select {

      }
      
      span {
        font-weight: 600;
        font-size: .75rem;
        color: var(--color-dark);
      }
    }
  `

export function CartItem(product: getProductPropsToCart) {
  return (
    <Item>
      <img src={`${urlForImage(product.image[0])}`} alt={product.name} />
      <Description>
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <div>
          <select>{product.quantity}</select>
          <span>{product.price}</span>
        </div>
      </Description>
    </Item>
  )
}
