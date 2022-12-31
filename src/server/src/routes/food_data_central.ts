import { stringify } from 'querystring'
import { Router, Request } from 'express'
import { api } from 'src/api'
import { FOOD_DATA_CENTRAL_API_ROOT } from 'src/constants'
import {
  FdcContentType,
  FdcSortBy,
  FdcSearchQuery,
  FoodDataCentralResponse,
} from 'src/types/food_data_central'

const router = Router()

router.get(
  '/search',
  async (req: Request<object, unknown, never, FdcSearchQuery>, res) => {
    const {
      type = 'generic',
      sortBy = 'name',
      sortOrder = 'asc',
      query = '',
      pageSize = '25',
      pageNumber = '1',
    } = req.query

    const contentTypeOptions: Record<FdcContentType, string> = {
      branded: 'Branded',
      generic: 'Foundation',
    }

    const sortByOptions: Record<FdcSortBy, string> = {
      date: 'publishedDate',
      name: 'lowercaseDescription.keyword',
    }

    const qs = stringify({
      sortOrder,
      query,
      pageSize,
      pageNumber,
      sortBy: sortByOptions[sortBy],
      dataType: ['Branded', 'Foundation'],
      /* eslint-disable camelcase */
      api_key: process.env.FOOD_DATA_CENTRAL_API_KEY,
    })

    try {
      const response = await api.get<FoodDataCentralResponse>(
        `${FOOD_DATA_CENTRAL_API_ROOT}/foods/search?${qs}`
      )
      res.send(response)
    } catch (err) {
      console.error(err)
      res.status(500).send((err as Error).message)
    }
  }
)

export { router as foodDataCentralRouter }
