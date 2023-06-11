import { getAllProductsProps } from '@/types/GetAllProducts'
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
    const query = '*[_type == "product"] {_id, name, price, categories}'
    return await client.fetch(query)
  },

  getSingleProduct: async (id: string): Promise<getSingleProductProps> => {
    const query = '*[_type == "product" && _id == $id] {_id, name, price, categories, description, slug.current}'
    const params = {id}
    return await client.fetch(query, params)
  }
}
