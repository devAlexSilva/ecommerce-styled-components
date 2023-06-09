export type getSingleProductProps = {
  _id: string,
  name: string,
  price: number,
  image:[{}]
  categories: {},
  description: string,
  slug: string
}

export interface getProductPropsToCart extends getSingleProductProps {
  quantity: number
}