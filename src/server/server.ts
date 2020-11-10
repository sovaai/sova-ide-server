import { ApolloServer } from 'apollo-server-express'
import { environment, configCORS } from '../config/environment'
import resolvers from '../graphql/resolvers/resolvers'
import typeDefs from '../graphql/schemas/schemas'
import app from '../app/app'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      user: req.user,
      token: req.headers.authorization,
    }
  },
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  uploads: {
    maxFileSize: 5000000,
    maxFiles: 10,
  },
})

server.applyMiddleware({ app, path: '/graphql', cors: configCORS })

export default server
