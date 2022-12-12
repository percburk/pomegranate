import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.UI_BASE_URL,
    credentials: true,
  })
)
app.use(express.json())

app.get('/api', (req, res) => {
  res.send({ response: 'Application works!' })
})

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Application running on http://localhost:${PORT}`)
})
