import LocalStrategy = require('passport-local')
import axios from 'axios'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const localStrategy = new LocalStrategy('local', async (username, password, done) => {
  try {
    const user = await axios.post(`${API_URL}auth/local`, {
      identifier: username,
      password: password,
    })
    return done(null, { user: user.data.user, jwt: user.data.jwt })
  } catch (error) {
    console.log(error.response.headers)
    return done(null, false)
  }
})
