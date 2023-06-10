import { FiltersContext } from "@/contexts/Filters"
import { useContext } from "react"
import { styled } from "styled-components"

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`

type itemListProps = {
  selected: boolean
}

const ItemList = styled.li<itemListProps>`
    text-transform: uppercase;
    list-style: none;
    color: ${props => props.selected ? 'var(--text-dark)' : 'var(--text-dark)'};
    font-weight: ${props => props.selected ? '600' : '400'};
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : 'none'};
    cursor: pointer;
`

const list = [
  'roupas',
  'acessorios',
  'maquiagem',
]

export function FilterByCategory() {
  const { categoryName, setCategoryName } = useContext(FiltersContext)
  
  return (
    <FilterList>
      {
        list.map(category =>
          <ItemList
            key={category}
            selected={categoryName === category}
            onClick={() => setCategoryName(category)}
            >
            {category}
          </ItemList>
        )
      }
    </FilterList>
  )
}
