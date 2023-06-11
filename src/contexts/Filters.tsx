import { ReactNode, createContext, useState } from "react";

export const FiltersContext = createContext({
  search: '',
  categoryName: {
    _id: '',
    _rev: '',
    title: ''
  },
  sort: '',
  page: 0,
  setSearch: (value: string) => { },
  setCategoryName: (value: {_id: string, _rev: string, title: string}) => { },
  setSort: (value: string) => { },
  setPage: (value: number) => { }
})

type providerProps = {
  children: ReactNode
}

export function FiltersContextProvider({ children }: providerProps) {
  const [search, setSearch] = useState('')
  const [categoryName, setCategoryName] = useState({_id: '', _rev: '', title: ''})
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(0)

  return (
    <FiltersContext.Provider value={{ search, setSearch, categoryName, setCategoryName, sort, setSort, page, setPage }}>
      {children}
    </FiltersContext.Provider>
  )
}