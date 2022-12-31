import { useEffect, useState } from 'react'
import { useDebounce } from 'src/hooks/use_debounce'

let isMounted = false

interface SearchInputsProps {
  searchValue: string
  setSearchValue: (newSearch: string) => void
}

export function SearchInputs({ searchValue, setSearchValue }: SearchInputsProps) {
  const [input, setInput] = useState('')

  useEffect(() => {
    if (!isMounted) {
      searchValue && setInput(searchValue)
      isMounted = true
    }
  }, [searchValue])

  useDebounce(
    () => {
      setSearchValue(input)
    },
    300,
    [input]
  )

  return (
    <div className="flex h-[5rem] w-full border-b bg-white p-4 shadow-sm">
      <label htmlFor="food-search-query" className="pb-1 text-sm font-light">
        Food Name
      </label>
      <input
        id="food-search-query"
        type="search"
        className="w-full rounded-md border border-slate-300 p-3 transition ease-in-out hover:border-slate-400"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  )
}
