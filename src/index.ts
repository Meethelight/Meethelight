import express from 'express'
import router from './routes/diaries'

const app = express()

app.use(express.json()) // Middleware que transforma la petición (req.body) en un JSON.

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Hello world with Express & Typescript!' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', router)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
