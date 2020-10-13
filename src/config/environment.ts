const defaultPort = 8443
const production = process.env.NODE_ENV === 'production'

interface Environment {
  apollo: {
    introspection: boolean
    playground: any
  }
  port: number | string
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  port: production ? process.env.PORT : process.env.PORT_DEV || defaultPort,
}

const allowedOrigins = [
  `http://localhost:${production ? process.env.PORT : process.env.PORT_DEV || defaultPort}`,
  'http://localhost:3000',
  'http://localhost:5000',
  'http://localhost',
  'http://localhost:443',
]
const checkOrigin = (origin, callback) => {
  if (!origin) return callback(null, true)
  if (allowedOrigins.indexOf(origin) === -1) {
    var msg = 'The CORS policy for this site does not allow access from the specified Origin.'
    return callback(new Error(msg), false)
  }
  return callback(null, true)
}
export const configCORS = {
  origin: /* checkOrigin */ '*',
  credentials: true,
}

export const configSession = {
  secret: 'keyboard cat',
  cookie: { secure: process.env.production ? true : false },
  resave: false,
  saveUninitialized: false,
}

/* if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
 */
