import { stringify } from 'querystring'
import { Router } from 'express'
import { api } from 'src/api'
import {
  EDAMAM_FOOD_DATABASE_API_URL,
  EDAMAM_APP_ID,
  EDAMAM_APP_KEY,
  EDAMAM_API_BASE_URL,
} from 'src/constants'
import {
  EdamamAutocompleteRequest,
  EdamamParserResponse,
  EdamamSearchRequest,
} from 'src/types/edamam'
import { prepareEdamamSearchResponse } from 'src/utils/prepareEdamamSearchResponse'

const router = Router()

/* eslint-disable camelcase */
const apiAuthValues = {
  app_id: EDAMAM_APP_ID,
  app_key: EDAMAM_APP_KEY,
}
/* eslint-enable camelcase */

router.get('/search', async (req: EdamamSearchRequest, res) => {
  const {
    ingredient,
    category = 'generic-foods',
    nutritionType = 'cooking',
  } = req.query

  const qs = stringify({
    ...apiAuthValues,
    category,
    ingr: ingredient,
    'nutrition-type': nutritionType,
  })

  try {
    const response = await api.get<EdamamParserResponse>(
      `${EDAMAM_FOOD_DATABASE_API_URL}/parser?${qs}`
    )
    const searchResponse = prepareEdamamSearchResponse(response)
    res.send(searchResponse)
  } catch (err) {
    res.status(500).send((err as Error).message)
  }
})

router.get('/auto-complete', async (req: EdamamAutocompleteRequest, res) => {
  const { searchValue, limit = '25' } = req.query
  const qs = stringify({ ...apiAuthValues, q: searchValue, limit })

  try {
    const response = await api.get<string[]>(
      `${EDAMAM_API_BASE_URL}/auto-complete?${qs}`
    )

    res.send(response)
  } catch (err) {
    res.status(500).send((err as Error).message)
  }
})

export { router as edamamRouter }
