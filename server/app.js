import express from 'express'

const app = express()
app.use(express.json())

app.get('/pong', (req, res) => {
  res.json({ msg: 'pong', time: Date.now() })
})

// TODO: add endpoints during the workshop

export default app
