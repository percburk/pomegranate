import { Request } from 'express'

export interface EdamamAutocompleteParams {
  searchValue: string
  limit: string
}

export type EdamamAutocompleteRequest = Request<
  never,
  unknown,
  never,
  EdamamAutocompleteParams
>

export type EdamamNutritionType = 'cooking' | 'logging'
export type EdamamCategory =
  | 'generic-foods'
  | 'generic-meals'
  | 'packaged-foods'
  | 'fast-foods'

export interface EdamamSearchParams {
  ingredient: string
  nutritionType: EdamamNutritionType
  category: EdamamCategory | EdamamCategory[]
}

export type EdamamSearchRequest = Request<never, unknown, never, EdamamSearchParams>

type EdamamNutrients = 'ENERC_KCAL' | 'PROCNT' | 'FAT' | 'CHOCDF' | 'FIBTG'
type EdamamNutrientsReadable =
  | 'calories'
  | 'protein'
  | 'fat'
  | 'carbohydrates'
  | 'fiber'

export interface EdamamFood {
  foodId: string
  label: string
  knownAs: string
  nutrients: Record<EdamamNutrients, number>
  category: string
  categoryLabel: string
  image: string
  foodContentsLabel?: string
  brand?: string
  servingSizes?: EdamamServingSizeMeasure[]
}

export interface BaseMeasure {
  uri: string
  label: string
}

export interface EdamamFoodMeasure extends BaseMeasure {
  weight: number
}

export interface EdamamServingSizeMeasure extends BaseMeasure {
  quantity: number
}

export interface EdamamParserResponse {
  text: string
  parsed: { food: EdamamFood }[]
  hints: { food: EdamamFood; measures: EdamamFoodMeasure[] }[]
  _links: {
    title: string
    href: string
  }
}

export interface EdamamSearchFood {
  foodId: string
  label: string
  nutrientsPer100Grams: Record<EdamamNutrientsReadable, number>
  category: string
  image: string
  servingSizeInGrams: number | null
}

export interface EdamamSearchResponse {
  searchValue: string
  foods: EdamamSearchFood[]
  totalHits: number
}
