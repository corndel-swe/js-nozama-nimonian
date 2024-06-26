// https://tech-docs.corndel.com/express/routing.html
import express, { Router } from 'express'

const app = express()
app.use(express.json())
const router = Router()
let state = {
  count: 0
}

router.get('/', (req, res) => {
  res.json(state)
})

router.put('/increment', (req, res) => {
  state.count++
  res.json(state)
})

app.use('/counter', router)

export default app
