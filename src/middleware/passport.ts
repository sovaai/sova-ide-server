import passport = require('passport')
import { localStrategy } from './strategies/localStrategy'
import { bearerStrategy } from './strategies/bearerStrategy'

passport.use(localStrategy)
passport.use(bearerStrategy)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

export default passport
