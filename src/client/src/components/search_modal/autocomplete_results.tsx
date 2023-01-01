import { useEdamamAutocomplete } from 'src/api/edamam'
import { LoadingSpinner, Alert } from '../ui'

interface SearchResultsProps {
  searchValue: string
  setSelectedFood: (food: string) => void
}

export function AutoCompleteResults({
  searchValue,
  setSelectedFood,
}: SearchResultsProps) {
  const {
    data: autocompleteResults,
    isInitialLoading: autocompleteIsInitialLoading,
    isError: autocompleteIsError,
  } = useEdamamAutocomplete({ searchValue })

  if (autocompleteIsInitialLoading) {
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
      {autocompleteResults?.map((food) => (
        <button
          onClick={() => setSelectedFood(food)}
          className="block w-full py-1 text-left hover:bg-slate-50"
          key={food}
        >
          {food}
        </button>
      ))}
    </div>
  )
}
