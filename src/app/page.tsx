'use client'

import { FiltersContextProvider } from '@/contexts/Filters'
import { HeaderFiltersContainer } from '../components/header-filters/HeaderFiltersContainer'
import { styled } from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 10rem;
`

export default function Home() {
  return (
    <MainContainer>
      <FiltersContextProvider>
        <HeaderFiltersContainer />
      </FiltersContextProvider>
    </MainContainer>
  )
}
