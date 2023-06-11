import { Api } from "@/api/sanity"
import { getAllProductsProps } from "@/types/GetAllProducts"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { styled } from "styled-components"

  const ProductsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 16rem);
    list-style: none;
    max-width: 100%;
    gap: 2rem;
    margin-top: 1rem;
  `

export function HomeProducts() {
  const [productList, setProductList] = useState([] as getAllProductsProps[])

  const fetchDataProduct = async () => {
    //  const data = await Api.getAllProducts()
    //  setProductList(data)
  }

  useEffect(() => { fetchDataProduct() }, [])

  return (
      <ProductsContainer>
        {
          productList[0]?._id &&
          productList.map(product => <ProductCard key={product._id} {...product} />)
        }
        {
          productList[0]?._id &&
          productList.map(product => <ProductCard key={product._id} {...product} />)
        }
      </ProductsContainer>
  )
}
