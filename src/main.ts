///<reference types="webpack-env" />
require('dotenv').config()
import app from './app/app'
import server from './server/server'
import { environment } from './config/environment'
/* import https = require('https') */
/* import fs = require('fs') */
/* const privateKey = fs.readFileSync('certs/localhost+2-key.pem', 'utf8')
const certificate = fs.readFileSync('certs/localhost+2.pem', 'utf8')

const credentials = { key: privateKey, cert: certificate } */

app.listen(environment.port, () => {
  console.log(`Ready at http://localhost:${environment.port}${server.graphqlPath}`)
})

/* const httpsServer = https.createServer(credentials, app)

httpsServer.listen(environment.port, () => {
  console.log(`Playground ready at https://localhost:${environment.port}${server.graphqlPath}`)
}) */

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
