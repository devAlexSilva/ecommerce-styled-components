import { Saira_Stencil_One } from 'next/font/google'
import { styled } from "styled-components"

const saira_Stencil_One = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400']
})

const LogoHeader = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: none;

  @media screen and (min-width: 769px) {
  font-size: 2.5rem;
  }
`

export function Logo() {
  return (
    <LogoHeader href='/' className={saira_Stencil_One.className}>Logo</LogoHeader>
  )
}
