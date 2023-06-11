import { UseProduct } from "@/hooks/UseProduct"
import ProductCard from "./ProductCard"
import { styled } from "styled-components"
import { useState } from "react"
import { getAllProductsProps } from "@/types/GetAllProducts"

const ProductsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 16rem);
    list-style: none;
    max-width: 100%;
    gap: 2rem;
    margin-top: 1rem;
  `

export function HomeProducts() {
  const [productList, setProductList] = useState([{}] as getAllProductsProps[])
  const data = UseProduct()

  data.then(product => setProductList(product))

  return (
    <ProductsContainer>
      { productList[0]?._id &&
        productList.map(product => <ProductCard key={product._id} {...product} />)
      }
    </ProductsContainer>
  )
}
