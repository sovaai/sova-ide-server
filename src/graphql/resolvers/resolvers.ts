import toArray = require('stream-to-array')
import INFS from '../../mocks/infs'
/* import TEMPLATES from '../../mocks/templates' */
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
import { accountUsersQuery } from './accountsResolvers/accountUsersList'
import { accountUserCreateMutation } from './accountsResolvers/accountUserCreate'
import { accountUserDestroyMutation } from './accountsResolvers/accountUserDestroy'
import { accountUserUpdateMutation } from './accountsResolvers/accountUserUpdate'
import { accountUserAvatarMutation } from './accountsResolvers/accountUserAvatar'
import {
  userCurrentQuery,
  userProfilesCreateMutation,
  userProfilesRemoveMutation,
} from './userProfilesResolvers/userProfiles'
import { accountProfilesMutation, accountProfilesQuery } from './accountProfilesResolvers/accountProfiles'
import { compilationMutation, compilationQuery } from './compilationResolvers/compilation'
import { searchQuery } from './searchResolvers/search'
import { settingsMutation, settingsQuery } from './settingsResolvers/settings'

const resolvers = {
  Query: {
    debug_infs: (_, { name }, context) => {
      /* if (context.user.role !== 'admin') return [] */
      if (name != null) return INFS.filter(x => name.includes(x.name))
      return INFS
    },
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
    accountUsersQuery: async (_, { accountId }, { token }) => {
      try {
        const res = await accountUsersQuery(accountId, token)
        return res.data
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    accountProfilesQuery: async (_, { config }) => {
      try {
        const res = await accountProfilesQuery(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    userCurrentQuery: async (_, {}, { token }) => {
      try {
        const res = await userCurrentQuery(token)
        return res
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
    searchQuery: async (_, { config }) => {
      try {
        const res = await searchQuery(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    settingsQueries: async (_, { uuid }, { token }) => {
      const config = { uuid }
      try {
        const res = await settingsQuery(config, token)
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
    accountUserCreateMutation: async (_, { userProps }, { token }) => {
      try {
        const res = await accountUserCreateMutation(userProps, token)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    accountUserUpdateMutation: async (_, { userProps }, { token }) => {
      try {
        const { uuid, ...userPropsToSend } = userProps
        const res = await accountUserUpdateMutation(uuid, userPropsToSend, token)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    accountUserAvatarMutation: async (_, { userProps }, { token }) => {
      const { uuid, file, buffer } = await userProps
      const fileReady = await file
      const bufferReady = await buffer
      try {
        const res = await accountUserAvatarMutation(uuid, { file: fileReady, buffer: bufferReady }, token)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    accountUserDestroyMutation: async (_, { userId }, { token }) => {
      try {
        const res = await accountUserDestroyMutation(userId, token)
        return { response: res }
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    userProfilesCreateMutation: async (_, { config }) => {
      try {
        const res = await userProfilesCreateMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    userProfilesRemoveMutation: async (_, { config }) => {
      try {
        const res = await userProfilesRemoveMutation(config)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
    accountProfilesMutation: async (_, { config }) => {
      try {
        const res = await accountProfilesMutation(config)
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
    settingsMutations: async (_, { config }, { token }) => {
      try {
        const res = await settingsMutation(config, token)
        return res
      } catch (error) {
        return consoleError('REQUEST ERROR', error)
      }
    },
  },
}

export default resolvers
