import { styled } from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import { SearchInput } from './SearchInput'
import { Cart } from './Cart'

const saira_Stencil_One = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400']
})


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 10rem;
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 2.5rem;
`

export function Header() {
  return (
    <HeaderContainer>
      <Logo className={saira_Stencil_One.className}>LOGO</Logo>
      <SearchInput />
      <Cart />
    </HeaderContainer>
  )
}
