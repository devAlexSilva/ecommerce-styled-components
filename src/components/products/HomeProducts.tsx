import { Api } from "@/api/sanity"
import { getAllProductsProps } from "@/types/GetAllProducts"
import { useEffect, useState } from "react"

export function HomeProducts() {
  const [productList, setProductList] = useState([] as getAllProductsProps[])

  const fetchDataProduct = async () => {
    const data = await Api.getAllProducts()

    setProductList(data)
    console.log('get all products', data)
  }

  useEffect(() => { fetchDataProduct() }, [])

  return (
    <div>
      <h2>Ofertas Imbatíveis</h2>
      <ul>
        {
          productList[0]?._id &&
          productList.map(product =>
            <li key={product._id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </li>
          )
        }
      </ul>
    </div>
  )
}
