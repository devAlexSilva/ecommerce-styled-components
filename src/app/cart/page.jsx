'use client'

import { ReturnBtn } from '@/components/ReturnBtn'
import { styled } from 'styled-components'


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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function CartPage() {
  return (
    <MainContainer>
      <Container>
        <ReturnBtn />
      </Container>
    </MainContainer>
  )
}
