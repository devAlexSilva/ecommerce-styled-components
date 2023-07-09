import { getAllProductsProps } from '@/types/GetAllProducts'
import { formatPrice } from '@/utils/formatPrice'
import { urlForImage } from '@/utils/imageBuilder'
import Link from 'next/link'
import { styled } from 'styled-components'


const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(225, 225, 225, .4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 17rem;

  image {
    width: inherit;
    height: 18.75rem;
  }

  h3, p {
    padding: 0 1rem;
    margin: .5rem 0 .25rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-dark-2);
  }

  p {
    color: initial;
    font-weight: 500;

    &::before {
      content: '';
      display: block;
      margin: 0 auto .5rem;
      width: 100%;
      height: 1px;
      background: var(--orange-low);
    }
  }
`

export default function ProductCard({ categories, mainImage, name, price, _id }: getAllProductsProps) {
  return (
    <CardItem>
      <Link href={`/product/?id=${_id}`}>
        <img src={`${urlForImage(mainImage).width(250).height(350)}`} alt={mainImage?.alt || name} />
      </Link>
        <h3>{name.toLowerCase()}</h3>
        <p>{formatPrice(price)}</p>
    </CardItem>
  )
}
