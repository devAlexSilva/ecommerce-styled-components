'use client'

import { RemoveCartItem } from './RemoveCartItem'
import { getProductPropsToCart } from "@/types/GetSingleProductProps"
import { urlForImage } from "@/utils/imageBuilder"
import Image from "next/image"
import { ChangeEvent } from "react"
import { styled } from "styled-components"

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 13.25rem;
  position: relative;
  border-radius: 8px;
  background-color: #FFF;
  margin: 1rem 0;

  img {
    height: 100%;
    min-width: 16rem;
    border-radius: 8px 0 0 8px;
  }

  svg {
    position: absolute;
    right: .5rem;
    top: .5rem;
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

      select {}
      
      span {
        font-weight: 600;
        font-size: .75rem;
        color: var(--color-dark);
      }
    }
  `
interface ICartItem {
  product: getProductPropsToCart
  handleUpdateQuantity: (newQuantity: number, id: string) => void
  handleRemoveItem: (id: string) => void
}

export function CartItem({ product, handleUpdateQuantity, handleRemoveItem }: ICartItem) {

  const handleSelectedQuantity = (event: ChangeEvent<HTMLSelectElement>, id: string) => {
    const newQuantity = Number(event.target.value)
    handleUpdateQuantity(newQuantity, id)
  }

  return (
    <Item>
      <Image src={`${urlForImage(product.image[0])}`} width={250} height={250} alt={product.name} />
      <RemoveCartItem id={product._id} handleRemoveItem={handleRemoveItem} />
      <Description>
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <div>
          <select value={product.quantity} onChange={(event) => handleSelectedQuantity(event, product._id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span>{product.price}</span>
        </div>
      </Description>
    </Item>
  )
}
