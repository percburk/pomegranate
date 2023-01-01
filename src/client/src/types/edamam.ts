export type EdamamNutritionType = 'cooking' | 'logging'
export type EdamamCategory =
  | 'generic-foods'
  | 'generic-meals'
  | 'packaged-foods'
  | 'fast-foods'

export interface EdamamSearchArg {
  ingredient: string
  nutritionType: EdamamNutritionType
  category: EdamamCategory | EdamamCategory[]
}

type EdamamNutrientsReadable =
  | 'calories'
  | 'protein'
  | 'fat'
  | 'carbohydrates'
  | 'fiber'

export interface EdamamSearchFood {
  foodId: string
  label: string
  knownAs: string
  nutrientsPer100Grams: Record<EdamamNutrientsReadable, number>
  category: string
  categoryLabel: string
  image: string
  servingSizeInGrams: number
}

export interface EdamamSearchResponse {
  searchValue: string
  foods: EdamamSearchFood[]
  totalHits: number
}
