'use client'

import { TrashIcon } from '@/icons/trash'
import styled from 'styled-components'


const Btn = styled.button`
  cursor: pointer;

  & :hover {
    fill: var(--red-color);
  }
`



type item = {
  id: string
  handleRemoveItem: (id: string) => void
}

export function RemoveCartItem({ id, handleRemoveItem }: item) {
  return (
    <Btn onClick={() => handleRemoveItem(id)}>
      <TrashIcon />
    </Btn>
  )
}
