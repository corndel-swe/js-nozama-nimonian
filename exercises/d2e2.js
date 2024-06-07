import express from 'express'
const app = express()

/**
 * Hint: res.send() will not accept numbers - you will need to
 * convert your result to a string before using res.send()
 */

// https://tech-docs.corndel.com/express/query-params.html
app.get('/sumup', (req, res) => {
  let result = 0

  for (let i = 1; i <= req.query.n; i++) {
    result += i
  }

  return res.send(String(result))
})

// https://tech-docs.corndel.com/express/url-params.html
app.get('/multiply/:x/:y', (req, res) => {
  const { x, y } = req.params
  return res.send(String(x * y))
})

export default app
