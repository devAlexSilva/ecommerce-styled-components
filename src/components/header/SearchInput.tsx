import { styled } from "styled-components"
import { SearchIcon } from "../../icons/SearchIcon"


const InputContainer = styled.div`
  width: 22rem;
  position: relative;

  svg {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
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
  return (
    <InputContainer>
      <Input placeholder="buscar" />
      <SearchIcon />
    </InputContainer>
  )
}
