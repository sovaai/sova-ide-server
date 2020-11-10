import LocalStrategy = require('passport-local')
import axios from 'axios'
import { jwtTOKEN, localAuthUser, userData } from '../mocks/user'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const localStrategy = new LocalStrategy('local', async (username, password, done) => {
  try {
    if (localAuthUser.username === username && localAuthUser.password === password) {
      return done(null, { user: userData, jwt: jwtTOKEN })
    }

    return done(null, false)
  } catch (error) {
    console.log(error.response.headers)
    return done(null, false)
  }
})
