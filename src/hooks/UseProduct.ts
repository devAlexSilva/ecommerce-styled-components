import { useContext } from "react"
import { FiltersContext } from "@/contexts/Filters"
import { Api } from "@/api/sanity"
import { sortList } from "@/utils/sortList"

export const UseProduct = async () => {
  const { categoryName, sort, search } = useContext(FiltersContext)

  const data = categoryName?._rev.length > 0
    ? await Api.getProductsByCategory(categoryName._id)
    : await Api.getAllProducts()

  switch(sort) {
    case sortList[1]:
      data.sort((a, b) => a.price - b.price)
    break;

    case sortList[2]:
      data.sort((a, b) => b.price - a.price)
    break;
    
    default:
    break;
  }

   const searchProduct = search.length > 0
   ? data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
   : data

  console.log(searchProduct)
   return searchProduct
}