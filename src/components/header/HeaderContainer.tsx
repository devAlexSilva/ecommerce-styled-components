import { styled } from 'styled-components'
import { SearchInput } from './SearchInput'
import { Cart } from './Cart'
import { Logo } from './Logo'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
  flex-wrap: wrap;
  
  :nth-child(2) {
    order: 2;
  }
  
  @media screen and (min-width: 425px) { 
    :nth-child(2) {
      order: initial;
      flex-wrap: nowrap;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 1.5rem 5rem;
  }
`

export function HeaderContainer() {
  return (
    <Header>
      <Logo />
      <SearchInput />
      <Cart />
    </Header>
  )
}
