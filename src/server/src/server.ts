import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { edamamRouter } from './routes/edamam.js'
import { foodDataCentralRouter } from './routes/food_data_central.js'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.UI_BASE_URL,
    credentials: true,
  })
)
app.use(express.json())
app.use('/api/v1/food-data-central', foodDataCentralRouter)
app.use('/api/v1/edamam', edamamRouter)

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Application running on http://localhost:${PORT}`)
})
