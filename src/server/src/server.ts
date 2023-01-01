import cors from 'cors'
import express from 'express'
import { PORT, UI_BASE_URL } from './constants'
import { edamamRouter } from './routes/edamam'
import { foodDataCentralRouter } from './routes/food_data_central'

const app = express()

app.use(cors({ origin: UI_BASE_URL, credentials: true }))
app.use(express.json())
app.use('/api/v1/food-data-central', foodDataCentralRouter)
app.use('/api/v1/edamam', edamamRouter)

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`\nApplication running on http://localhost:${PORT}`)
})
