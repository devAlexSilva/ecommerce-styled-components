import { styled } from "styled-components"
import { SearchIcon } from "../../icons/SearchIcon"
import { useContext, useState } from "react"
import { FiltersContext } from "@/contexts/Filters"


const InputContainer = styled.div`
  width: 22rem;
  position: relative;

  button {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
`

const Input = styled.input`
  width: inherit;
  padding: .625rem 1rem;
  background-color: var(--bg-secondary);
  border-radius: .5rem;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 400;
  color: var(--text-dark);
`

export function SearchInput() {
  const [value, setValue] = useState('')
  const { setSearch } = useContext(FiltersContext)

  const handleClickSearch = () => {
    console.log(value)
    setSearch(value)
    setValue('')
  }

  return (
    <InputContainer>
      <Input placeholder="buscar" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={handleClickSearch}><SearchIcon /></button>
    </InputContainer>
  )
}
