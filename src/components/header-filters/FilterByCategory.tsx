import { Api } from "@/api/sanity"
import { FiltersContext } from "@/contexts/Filters"
import { getCategoriesProps } from "@/types/GetCategories"
import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  overflow-x: scroll;
  margin-right: 1rem;

  @media screen and (min-width: 425px) {
    gap: 2.5;
    margin-right: 2rem;
    overflow-x: initial;
  }
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
 
    &:hover {
      color: var(--orange-low);
    }
`

export function FilterByCategory() {
  const { categoryName, setCategoryName } = useContext(FiltersContext)
  const [list, setList] = useState([{}] as getCategoriesProps)

  useEffect(() => {
    (async () => {
      setList(await Api.getCategories())
    })()
  }, [])

  return (
    <>{console.log(list)}
      <FilterList>
        {
          list.map((category, index) =>
            <ItemList
              key={index}
              selected={categoryName?.title === category?.title}
              onClick={() => setCategoryName(category)}
            >
              {category.title}
            </ItemList>
          )
        }
      </FilterList>
    </>
  )
}
