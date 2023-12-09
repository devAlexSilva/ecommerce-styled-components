'use client'

import { styled } from 'styled-components'
import { HeaderFiltersContainer } from '../components/header-filters/HeaderFiltersContainer'
import { HomeProducts } from '@/components/products/HomeProducts'
import { Metadata } from 'next'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 6.4375rem); // total without header heigth
  padding: 2rem 1rem;
  background-color: var(--bg-primary);

  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`

export const metadata: Metadata = {
  title: 'Geass Store - home'
}

export default function Home() {
  return (
    <MainContainer>
      <HeaderFiltersContainer />
      <HomeProducts />
    </MainContainer>
  )
}
