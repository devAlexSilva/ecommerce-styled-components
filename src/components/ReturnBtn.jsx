import { styled } from 'styled-components'
import { Home } from "@/icons/Home"


const ReturnContainer = styled.div`
  a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  svg {
    margin-right: .5rem;
  }

  margin-bottom: 2rem;
`

export function ReturnBtn() {
  return (
    <ReturnContainer>
        <a href="/">
          <Home />
          <span>voltar</span>
        </a>
      </ReturnContainer>
  )
}
