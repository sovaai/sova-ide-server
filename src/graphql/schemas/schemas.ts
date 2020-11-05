import { gql } from 'apollo-server-express'
import { templateDefs } from './templates/templatesTypes'
import { suitesDefs } from './suites/suitesTypes'
import { profilesDefs } from './profiles/profilesTypes'
import { dictionariesDefs } from './dictionaries/dictionariesTypes'
import { compilationDefs } from './compilation/compilationTypes'

const fileDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`

const queryDefs = gql`
  type Query {
    templatesQueries(config: TemplateQueriesMethod!): TemplatesFiles
    suitesQueries(config: SuiteMethod!): SuitesFiles
    profilesQueries(config: ProfileMethod!): ProfilesFiles
    dictionariesQueries(config: DictionaryMethod!): DictionariesFiles
    compilationListQuery(config: CompilationMethod!): CompilationResult
    compilationTaskQuery(config: CompilationMethod!): CompilationResult
    compilationDeployListQuery(config: CompilationMethod!): CompilationResult
    compilationComplectQuery(config: CompilationComplectMethod!): CompilationComplectResult
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
    compilationCreateMutation(config: CompilationMethod!): CompilationResult
    compilationDeployMutation(config: CompilationMethod!): CompilationDeployResult
  }
`

const typeDefs = [
  fileDefs,
  queryDefs,
  templateDefs,
  suitesDefs,
  profilesDefs,
  dictionariesDefs,
  compilationDefs,
]

export default typeDefs
