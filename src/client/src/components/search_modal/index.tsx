import { useState } from 'react'
import { Modal } from '../ui'
import { AutoCompleteResults } from './autocomplete_results'
import { SearchFoodList } from './search_food_list'
import { SearchInputs } from './search_inputs'

interface SearchModalProps {
  searchModalIsOpen: boolean
  setSearchModalIsOpen: (isOpen: boolean) => void
}

export function SearchModal({
  searchModalIsOpen,
  setSearchModalIsOpen,
}: SearchModalProps) {
  const [searchValue, setSearchValue] = useState('')
  const [selectedFood, setSelectedFood] = useState('')

  return (
    <Modal
      isOpen={searchModalIsOpen}
      onClose={() => setSearchModalIsOpen(false)}
      size="xl"
    >
      {selectedFood ? (
        <SearchFoodList
          selectedFood={selectedFood}
          resetSelectedFood={() => setSelectedFood('')}
        />
      ) : (
        <>
          <SearchInputs searchValue={searchValue} setSearchValue={setSearchValue} />
          <AutoCompleteResults
            searchValue={searchValue}
            setSelectedFood={setSelectedFood}
          />
        </>
      )}
    </Modal>
  )
}
