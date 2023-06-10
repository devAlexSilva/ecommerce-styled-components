import { styled } from 'styled-components'
import { FilterOutline } from '@/icons/FilterOutline'
import { useContext, useState } from 'react'
import { FiltersContext } from '@/contexts/Filters'


const SortListContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  color: var(--text-dark);
  
  >label, button {
    cursor: pointer;
  }
`

const SortListOptions = styled.ul`
  position: absolute;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  padding: .5rem 1rem;
  top: 2rem;
  width: max-content;
  list-style: none;
`
const FilterBtn = styled.button`
  background: none;
  outline: none;
  border: none;
`
type LiProps = {
  selected: boolean
}

const SortListItens = styled.li<LiProps>`
  border-bottom: ${props => props.selected ? '1px solid var(--orange-low)' : 'none'};
  
  + li {
    margin-top: .5rem;
  }

  &:hover {
    cursor: pointer;
    color: var(--orange-low);
  }
`

export function FilterBySort() {
  const [isHidden, setIsHidden] = useState(true)
  const { sort, setSort } = useContext(FiltersContext)

  const sortList = [
    'Novidades',
    'Maior Preço',
    'Menor Preço'
  ]

  const handleClickOpenSortList = () => {
    setIsHidden(!isHidden)
  }

  const handleClickSelectSortitem = (filterType: string) => {
    setSort(filterType)
    setIsHidden(true)
  }

  return (
    <SortListContainer>
      <label htmlFor='filter'>
        Ordernar por
      </label>
      <FilterBtn id='filter' onClick={handleClickOpenSortList}>
        <FilterOutline />
      </FilterBtn>
      <SortListOptions hidden={isHidden}>
        {sortList.map(item =>
          <SortListItens
            key={item}
            onClick={() => handleClickSelectSortitem(item)}
            selected={item === sort}
          >
            {item}
          </SortListItens>
        )}
      </SortListOptions>
    </SortListContainer>
  )
}
