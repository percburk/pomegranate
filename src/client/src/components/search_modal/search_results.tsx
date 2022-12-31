import { useEdamamAutocomplete } from 'src/api/edamam'
import { LoadingSpinner, Alert } from '../ui'

interface SearchResultsProps {
  searchValue: string
}

export function SearchResults({ searchValue }: SearchResultsProps) {
  const {
    data: autocompleteResults,
    isLoading: autocompleteIsLoading,
    isError: autocompleteIsError,
  } = useEdamamAutocomplete({ searchValue })

  if (autocompleteIsLoading) {
    return (
      <div className="flex w-full justify-center p-8 align-middle">
        <LoadingSpinner size="lg" fadeIn />
      </div>
    )
  }

  if (autocompleteIsError) {
    return (
      <Alert colorScheme="red" fadeIn className="m-3">
        Error loading foods.
      </Alert>
    )
  }

  return (
    <div className="h-[calc(100%-5rem)] overflow-auto">
      {autocompleteResults.map((food) => (
        <div key={food}>{food}</div>
      ))}
    </div>
  )
}
