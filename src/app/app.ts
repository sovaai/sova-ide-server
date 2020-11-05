import express = require('express')
import compression = require('compression')
import session = require('express-session')
import morgan = require('morgan')
import cors = require('cors')
import passport from '../middleware/passport'
import path = require('path')
import router from '../routes/router'
import { configCORS, configSession } from '../config/environment'

const publicPath = path.resolve(process.cwd(), 'public')

const app = express()

const bodyParser = require('body-parser')

app.use(compression())
app.use(cors(configCORS))
app.use(morgan('short'))
app.use(session(configSession))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.raw({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use(express.static(publicPath))
app.use(passport.initialize())
app.use(passport.session())
app.use(router)

export default app
