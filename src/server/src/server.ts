import cors from 'cors'
import express from 'express'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
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
  console.log('Application running on port:', PORT)
})
