// https://tech-docs.corndel.com/express/sending-errors.html
import express, { Router } from 'express'
import { Account } from './d3e2.js' // <-- uses Account from Exercise 2

const app = express()
app.use(express.json())

const router = Router()

const account = new Account('legolas', 'legolas@thefellowship.com', 'elf4life')

router.put('/username', (req, res) => {
  /**
   * Attempt to call Account.updateUsername with the newUsername and
   * password found in the req.body.
   *
   * On success, respond with the newUsername in the response.
   * E.g. { username: 'NewUsername'}
   *
   * In case this fails, use try/catch to respond with the error
   * code and message found in the error
   */
  const { newUsername, password } = req.body

  try {
    account.updateUsername(newUsername, password)
    res.json({ username: account.username })
  } catch (err) {
    res.status(err.code).json(err)
  }
})

app.use('/account', router)

export default app
