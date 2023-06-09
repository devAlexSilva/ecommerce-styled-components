'use client'
import { FilterByCategory } from "./FilterByCategory";
import { styled } from "styled-components";

const FiltersContainer = styled.nav`
  display: flex;
  width: 100%;
`

export function HeaderFiltersContainer() {
  return (
    <FiltersContainer>
      <FilterByCategory />
    </FiltersContainer>
  )
}
