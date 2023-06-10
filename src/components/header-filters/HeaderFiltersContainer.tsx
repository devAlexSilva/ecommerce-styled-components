'use client'
import { styled } from "styled-components";
import { FilterByCategory } from "./FilterByCategory";
import { FilterBySort } from './FilterBySort'

const FiltersContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export function HeaderFiltersContainer() {
  return (
    <FiltersContainer>
      <FilterByCategory />
      <FilterBySort />
    </FiltersContainer>
  )
}
