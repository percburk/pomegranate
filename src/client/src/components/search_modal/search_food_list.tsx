import { useEdamamFoodSearch } from 'src/api/edamam'
import { LoadingSpinner, Alert } from '../ui'

interface SearchFoodListProps {
  selectedFood: string
  resetSelectedFood: () => void
}

export function SearchFoodList({
  selectedFood,
  resetSelectedFood,
}: SearchFoodListProps) {
  const {
    data: foodSearchResponse,
    isInitialLoading: foodSearchIsInitialLoading,
    isError: foodSearchIsError,
  } = useEdamamFoodSearch(selectedFood)

  if (foodSearchIsInitialLoading) {
    return (
      <div className="flex w-full justify-center p-8 align-middle">
        <LoadingSpinner size="lg" fadeIn />
      </div>
    )
  }

  if (foodSearchIsError) {
    return (
      <Alert colorScheme="red" fadeIn className="m-3">
        Error loading foods.
      </Alert>
    )
  }

  const resultCountToDisplay = foodSearchResponse?.totalHits ?? 'no'
  const shouldPluralizeResults = resultCountToDisplay !== 1

  return (
    <div className="h-full overflow-auto">
      <button className="bg-slate-400 p-1" onClick={resetSelectedFood}>
        Reset
      </button>
      <div>
        Showing {resultCountToDisplay} result{shouldPluralizeResults ? 's' : ''}
      </div>
      {foodSearchResponse?.foods.map(
        ({
          foodId,
          label,
          image,
          nutrientsPer100Grams: { protein, carbohydrates, fat, calories },
        }) => (
          <div key={foodId} className="p-2">
            <span className="block text-lg">{label}</span>
            <img alt={label} src={image} />
            <span>Calories: {calories}</span>
            <span className="text-md block py-2 uppercase">Macros</span>
            <div>
              Protein: {protein} Carbohydrates: {carbohydrates} Fat: {fat}
            </div>
          </div>
        )
      )}
    </div>
  )
}
