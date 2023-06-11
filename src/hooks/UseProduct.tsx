import { useContext } from "react"
import { FiltersContext } from "@/contexts/Filters"
import { Api } from "@/api/sanity"

export const UseProduct = async () => {
  const { categoryName } = useContext(FiltersContext)

  const data = categoryName?._rev.length > 0
    ? await Api.getProductsByCategory(categoryName._id)
    : await Api.getAllProducts()

  return data
}