import { templatesQuery, templatesMutation, templatesMultipleMutation } from './templatesResolvers/templates'
import { consoleError } from '../../utils/console'
import { suitesQuery, suitesMutation, suitesRemoveMutation, suitesMultipleMutation } from './suitesResolvers/suites'
import { profilesQuery, profilesMutation } from './profilesResolvers/profiles'
import {
  dictionariesQuery,
  dictionariesMutation,
  dictionariesMultipleMutation,
  dictionariesRemoveMutation
} from './dictionariesResolvers/dictionaries'
import { compilationMutation, compilationQuery } from './compilationResolvers/compilation'

const resolvers = {
  Query: {
    templatesQueries: async (_, { config }) => {
      try {
        const res = await templatesQuery(config)
        if (!res.status) return res
        if (res.response.items != null) {
          return res.response
        }
        return { item: res.response }
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    suitesQueries: async (_, { config }) => {
      try {
        const res = await suitesQuery(config)
        if (!res.status) return res
        if (res.response.items != null) {
          return res.response
        }
        return { item: res.response }
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    profilesQueries: async (_, { config }) => {
      try {
        const res = await profilesQuery(config)
        if (!res.status) return res
        if (res.response.items != null) {
          return res.response
        }
        return { item: res.response }
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    dictionariesQueries: async (_, { config }) => {
      try {
        const res = await dictionariesQuery(config)
        if (!res.status) return res
        if (res.response.items != null) {
          return res.response
        }
        return { item: res.response }
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    compilationListQuery: async (_, { config }) => {
      try {
        const res = await compilationQuery(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    compilationTaskQuery: async (_, { config }) => {
      try {
        const res = await compilationQuery(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    compilationDeployListQuery: async (_, { config }) => {
      try {
        const res = await compilationQuery(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    compilationComplectQuery: async (_, { config }) => {
      try {
        const res = await compilationQuery(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
  },
  Mutation: {
    templatesMutations: async (_, { config }) => {
      try {
        const res = await templatesMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    templatesMultipleMutations: async (_, { config }) => {
      try {
        const res = await templatesMultipleMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    suitesMutations: async (_, { config }) => {
      try {
        const res = await suitesMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    suitesMultipleMutations: async (_, { config }) => {
      try {
        const res = await suitesMultipleMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    suitesRemoveMutations: async (_, { config }) => {
      try {
        const res = await suitesRemoveMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    profilesMutations: async (_, { config }) => {
      try {
        const res = await profilesMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    dictionariesMutations: async (_, { config }) => {
      try {
        const res = await dictionariesMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    dictionariesMultipleMutations: async (_, { config }) => {
      try {
        const res = await dictionariesMultipleMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    dictionariesRemoveMutations: async (_, { config }) => {
      try {
        const res = await dictionariesRemoveMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    compilationCreateMutation: async (_, { config }) => {
      try {
        const res = await compilationMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    compilationDeployMutation: async (_, { config }) => {
      try {
        const res = await compilationMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
  },
}

export default resolvers
