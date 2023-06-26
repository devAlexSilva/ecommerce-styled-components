'use client'

import { Home } from "@/icons/Home"
import { styled } from "styled-components"


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6.4375rem); // total without header heigth
  padding: 2rem 1rem;
  background-color: var(--bg-primary);

  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`

const ReturnContainer = styled.div`
  a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  svg {
    margin-right: .5rem;
  }

  margin-bottom: 3rem;
`
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

type props = {
  searchParams: {
    id: string
  }
}

export default function ProductDetailsPage({ searchParams: { id } }: props) {

  console.log(id)
  return (
    <MainContainer>
      <ReturnContainer>
        <a href="/">
          <Home />
          <span>voltar</span>
        </a>
      </ReturnContainer>
      <Wrapper>
        <div>imagem</div>
        <div>
          <div>
            <p>caneca</p>
            <h3>Caneca de Cerâmica rústica</h3>
            <p>R$ 40.00</p>
            <p>texto pequeno falando sobre algo como condições de venda por exemplo</p>
            <h4>Descrição</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate labore quaerat quo similique accusantium
              ab obcaecati eos saepe praesentium magni necessitatibus,
              harum dolor voluptatibus natus optio animi consectetur delectus quis.
            </p>
          </div>
          <div>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </Wrapper>
    </MainContainer>
  )
}
