import express = require('express')
import passport from '../middleware/passport'
import axios from 'axios'

const API_URL = process.env.CHAT_API_URL

const router = express.Router()
router.get('/', (req, res, next) => {
  res.status(200)
  res.send('Status 200')
})
router.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => res.json(req.user))
router.post('/chat/:method', async (req, res) => {
  const data = await req.body
  try {
    const response = await axios.post(`${API_URL}/${req.params.method}`, data)
    res.send(response.data)
  } catch (error) {
    console.log(error)
    res.send('Error')
  }
})
router.use('*', passport.authenticate('bearer', { session: false }))

export default router
