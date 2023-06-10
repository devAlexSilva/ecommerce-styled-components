import { useState } from "react"
import { styled } from "styled-components"

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`

type itemListProps = {
  isSelected: boolean
}

const ItemList = styled.li<itemListProps>`
    text-transform: uppercase;
    list-style: none;
    color: ${props => props.isSelected ? 'var(--text-dark)' : 'var(--text-dark)'};
    font-weight: ${props => props.isSelected ? '600' : '400'};
    border-bottom: ${props => props.isSelected ? '4px solid var(--orange-low)' : 'none'};
    cursor: pointer;
`

const list = [
  'roupas',
  'acessorios',
  'maquiagem',
]

export function FilterByCategory() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <FilterList>
      {
        list.map(category =>
          <ItemList
            key={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            >
            {category}
          </ItemList>
        )
      }
    </FilterList>
  )
}
