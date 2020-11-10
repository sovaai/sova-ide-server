import BearerStrategy = require('passport-http-bearer')
import { jwtTOKEN, userData } from '../mocks/user'

export const bearerStrategy = new BearerStrategy(async (token, done) => {
  try {
    if (token === jwtTOKEN) {
      return done(null, userData)
    }
    return done(null, false)
  } catch (error) {
    return done(null, false)
  }
})
