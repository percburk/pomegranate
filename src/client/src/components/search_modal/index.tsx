import { useState } from 'react'
import { Modal } from '../ui'
import { SearchInputs } from './search_inputs'
import { SearchResults } from './search_results'

interface SearchModalProps {
  searchModalIsOpen: boolean
  setSearchModalIsOpen: (isOpen: boolean) => void
}

export const SearchModal = ({
  searchModalIsOpen,
  setSearchModalIsOpen,
}: SearchModalProps) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Modal
      isOpen={searchModalIsOpen}
      onClose={() => setSearchModalIsOpen(false)}
      size="xl"
    >
      <SearchInputs searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults searchValue={searchValue} />
    </Modal>
  )
}
