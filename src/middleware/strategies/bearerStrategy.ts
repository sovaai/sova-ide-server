import BearerStrategy = require('passport-http-bearer')
import axios from 'axios'
const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const bearerStrategy = new BearerStrategy(async (token, done) => {
  try {
    const user = await axios.get(`${API_URL}users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return done(null, user.data)
  } catch (error) {
    return done(null, false)
  }
})
/* 
export const passport_authenticate_jwt = callback => {
  const passportMiddleware = (req, res, next) => {
    passport.authenticate('bearer', (err, user, info) => {
      if (err) return next(err)
      if (!user)
        return res.status(401).send({
          error: {
            code: 'INVALID_AUTHORIZATION_CODE',
            message: 'Invalid authorization code',
          },
        })

      req.user = user
      return callback(req, res, next)
    })(req, res, next)
  }

  return passportMiddleware
}
 */
