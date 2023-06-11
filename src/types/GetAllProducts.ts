export type getAllProductsProps = {
  _id: string,
  name: string,
  price: number,
  mainImage: {
    alt: string
  },
  categories: {
    ref: string,
    title: string
  }
}