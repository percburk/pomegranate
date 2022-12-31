import { stringify } from 'querystring'
import { Router } from 'express'
import { api } from 'src/api'
import {
  EDAMAM_FOOD_DATABASE_API_URL,
  EDAMAM_APP_ID,
  EDAMAM_APP_KEY,
  EDAMAM_API_BASE_URL,
} from 'src/constants'
import { EdamamAutocompleteRequest } from 'src/types/edamam'

const router = Router()

/* eslint-disable camelcase */
const apiAuthValues = {
  app_id: EDAMAM_APP_ID,
  app_key: EDAMAM_APP_KEY,
}
/* eslint-enable camelcase */

router.get('/search', async (req, res) => {
  const qs = stringify({ ...apiAuthValues, ingr: 'spaghetti' })

  try {
    const response = await api.get(`${EDAMAM_FOOD_DATABASE_API_URL}/parser?${qs}`)
    res.send(response)
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
