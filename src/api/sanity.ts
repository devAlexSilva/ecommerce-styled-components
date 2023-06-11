import { getAllProductsProps } from '@/types/GetAllProducts'
import { getCategoriesProps } from '@/types/GetCategories'
import { getSingleProductProps } from '@/types/GetSingleProductProps'
import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION
}

const client = createClient(config)

export const Api = {

  ping: async () => {
    return await client.fetch<number>(`count(*)`)
  },

  getAllProducts: async (): Promise<getAllProductsProps[]> => {
    const query = '*[_type == "product"] {_id, name, price, categories, mainImage}'
    return await client.fetch(query)
  },

  getSingleProduct: async (id: string): Promise<getSingleProductProps> => {
    const params = {id}
    const query = '*[_type == "product" && _id == $id] {_id, name, price, categories, mainImage, image, description, slug}'
    return await client.fetch(query, params)
  },
  
  getCategories: async (): Promise<getCategoriesProps> => {
    const query = '*[_type == "category"] {title, _id, _rev}'
    return await client.fetch(query)
  },

  getProductsByCategory: async (categoryId: string): Promise<getAllProductsProps[]> => {
    const params = {_id: categoryId}
    const query = '*[_type == "product"][categories[0]._ref == $_id] {_id, name, price, categories, mainImage}'
    return await client.fetch(query, params)
  }
}
