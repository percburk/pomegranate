import {
  EdamamParserResponse,
  EdamamSearchFood,
  EdamamSearchResponse,
} from 'src/types/edamam'

export const prepareEdamamSearchResponse = (
  parserResponse: EdamamParserResponse
): EdamamSearchResponse => {
  const { text, hints } = parserResponse

  const foods: EdamamSearchFood[] = hints.map(({ food, measures }) => {
    const {
      nutrients: { ENERC_KCAL, PROCNT, FAT, CHOCDF, FIBTG },
      servingSizes,
      foodId,
      label,
      category,
      image,
      brand,
    } = food

    const nutrientsPer100Grams = {
      calories: ENERC_KCAL,
      protein: PROCNT,
      fat: FAT,
      carbohydrates: CHOCDF,
      fiber: FIBTG,
    }

    let servingSizeInGrams = null

    const servingFromMeasures = measures.find(
      ({ label }) => label === 'Serving'
    )?.weight

    if (servingFromMeasures) {
      servingSizeInGrams = servingFromMeasures
    } else if (servingSizes?.length) {
      const servingFromServingSizes = servingSizes.find(
        ({ label }) => label === 'Gram'
      )?.quantity

      if (servingFromServingSizes) {
        servingSizeInGrams = servingFromServingSizes
      }
    }

    return {
      foodId,
      label,
      category,
      image,
      brand,
      nutrientsPer100Grams,
      servingSizeInGrams,
    }
  })

  return { searchValue: text, foods, totalHits: hints.length }
}
