interface FoodDataCentralSearchCriteria {
  dataType: string[]
  foodTypes: string[]
  generalSearchInput: string
  numberOfResultsPerPage: number
  pageNumber: number
  pageSize: number
  query: string
  requireAllWords: boolean
  sortBy: string
  sortOrder: string
}

interface FoodDataCentralAggregations {
  dataType: Record<string, number>
  nutrients: Record<string, number | string>
}

export interface FoodDataCentralNutrient {
  dataPoints: number
  derivationCode: string
  derivationDescription: string
  derivationId: string
  foodNutrientId: number
  foodNutrientSourceCode: string
  foodNutrientSourceDescription: string
  foodNutrientSourceId: number
  indentLevel: number
  max: number
  median: number
  min: number
  nutrientId: number
  nutrientName: string
  nutrientNumber: string
  rank: number
  unitName: UnitsOfMeasure
  value: number
}

export interface FoodDataCentralFood {
  additionalDescriptions: string
  allHighlightFields: string
  commonNames: string
  dataType: string
  description: string
  fdcId: number
  finalFoodInputFoods: unknown[]
  foodAttributeTypes: unknown[]
  foodAttributes: unknown[]
  foodCategory: string
  foodMeasures: unknown[]
  foodNutrients: FoodDataCentralNutrient[]
  foodVersionIds: unknown[]
  lowercaseDescription: string
  microbes: unknown[]
  mostRecentAcquisitionDate: string
  ndbNumber: number
  publishedDate: string
  score: number
}

export interface FoodDataCentralResponse {
  aggregations: FoodDataCentralAggregations
  foodSearchCriteria: FoodDataCentralSearchCriteria
  currentPage: number
  pageList: number[]
  totalHits: number
  totalPages: number
  foods: FoodDataCentralFood[]
}

type UnitsOfMeasure = 'G' | 'MG'

export type FoodDataCentralContentType = 'generic' | 'branded'
export type FoodDataCentralSortBy = 'date' | 'name'
export type FoodDataCentralSortOrder = 'asc' | 'desc'

export interface FoodDataCentralSearchState {
  type: FoodDataCentralContentType
  sortBy: FoodDataCentralSortBy
  query: string
  pageSize: number
  pageNumber: number
  sortOrder: FoodDataCentralSortOrder
}
