'use client'

import { styled } from 'styled-components'
import { FiltersContextProvider } from '@/contexts/Filters'
import { HeaderFiltersContainer } from '../components/header-filters/HeaderFiltersContainer'
import { HomeProducts } from '@/components/products/HomeProducts'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 6.4375rem); // total without header heigth
  padding: 4rem;
  background-color: var(--bg-primary);
`

export default function Home() {
  return (
    <MainContainer>
      <FiltersContextProvider>
        <HeaderFiltersContainer />
        <HomeProducts />
      </FiltersContextProvider>
    </MainContainer>
  )
}
