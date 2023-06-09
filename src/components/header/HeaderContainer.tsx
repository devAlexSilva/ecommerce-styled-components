import { styled } from 'styled-components'
import { SearchInput } from './SearchInput'
import { Cart } from './Cart'
import { Logo } from './Logo'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 10rem;
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
