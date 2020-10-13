import { gql } from 'apollo-server-express'
import { templateDefs } from './templates/templatesTypes'
import { suitesDefs } from './suites/suitesTypes'
import { profilesDefs } from './profiles/profilesTypes'
import { dictionariesDefs } from './dictionaries/dictionariesTypes'
import { accountsDefs } from './accounts/accountTypes'
import { userProfilesDefs } from './userProfiles/userProfilesTypes'
import { accountProfilesDefs } from './accountProfiles/accountProfiles'
import { compilationDefs } from './compilation/compilationTypes'
import { searchDefs } from './search/searchTypes'
import { settingsDefs } from './settings/clientSettings'

const basicDefs = gql`
  type InfDebug {
    id: Int
    uuid: String
    name: String
    base_profile: String
  }

  type ResultType {
    id: Int
    status: Boolean
  }
`

const fileDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`

const queryDefs = gql`
  type Query {
    debug_infs(name: [String!]): [InfDebug]!
    templatesQueries(config: TemplateQueriesMethod!): TemplatesFiles
    suitesQueries(config: SuiteMethod!): SuitesFiles
    profilesQueries(config: ProfileMethod!): ProfilesFiles
    dictionariesQueries(config: DictionaryMethod!): DictionariesFiles
    accountUsersQuery(accountId: String!): AccountUsers
    accountProfilesQuery(config: AccountProfilesMethod!): AccountProfilesResult
    userCurrentQuery: UserResult
    compilationListQuery(config: CompilationMethod!): CompilationResult
    compilationTaskQuery(config: CompilationMethod!): CompilationResult
    compilationDeployListQuery(config: CompilationMethod!): CompilationResult
    compilationComplectQuery(config: CompilationComplectMethod!): CompilationComplectResult
    searchQuery(config: SearchMethod): SearchResult
    settingsQueries(uuid: String!): UserSettings
  }

  type Mutation {
    templatesMutations(config: TemplateMutationsMethod!): TemplatesMutationsResult
    templatesMultipleMutations(config: TemplateMultipleMethod!): TemplatesMutationsResult
    suitesMutations(config: SuiteMethod!): SuitesMutationsResult
    suitesMultipleMutations(config: SuiteMultipleMethod!): SuitesMutationsResult
    suitesRemoveMutations(config: SuitesRemoveMethod!): SuitesMutationsResult
    profilesMutations(config: ProfileMethod!): ProfilesMutationsResult
    dictionariesMutations(config: DictionaryMethod!): DictionariesMutationsResult
    dictionariesMultipleMutations(config: DictionaryMultipleMethod!): DictionariesMutationsResult
    dictionariesRemoveMutations(config: DictionariesRemoveMethod!): DictionariesMutationsResult
    accountUserCreateMutation(userProps: UserCreateProps!): UserResult
    accountUserUpdateMutation(userProps: UserUpdateProps!): UserResult
    accountUserAvatarMutation(userProps: UserAvatarMutationProps!): UserAvatarResult
    accountUserDestroyMutation(userId: String!): UserDestroyResult
    userProfilesCreateMutation(config: UserProfilesCreateMethod!): UserProfilesMutationsResult
    userProfilesRemoveMutation(config: UserProfilesRemoveMethod!): UserProfilesMutationsResult
    accountProfilesMutation(config: AccountProfilesMethod!): AccountProfilesResult
    compilationCreateMutation(config: CompilationMethod!): CompilationResult
    compilationDeployMutation(config: CompilationMethod!): CompilationDeployResult
    settingsMutations(config: UserSettingsProps): UserSettings
  }
`

const typeDefs = [
  basicDefs,
  templateDefs,
  suitesDefs,
  profilesDefs,
  dictionariesDefs,
  accountsDefs,
  userProfilesDefs,
  accountProfilesDefs,
  queryDefs,
  fileDefs,
  compilationDefs,
  searchDefs,
  settingsDefs,
]

export default typeDefs
