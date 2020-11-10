import { gql } from 'apollo-server-core'

export const suitesDefs = gql`
  type SuiteStat {
    templates: Int!
  }

  type SuiteFile {
    id: String!
    title: String!
    profile_id: String
    updated: Float
    is_enabled: Boolean
    stat: SuiteStat
    hidden: Boolean
  }

  type SuitesFiles {
    items: [SuiteFile]
    item: SuiteFile
    status: Boolean
    errors: ErrorsSuites
  }

  type ResultTypeSuites {
    id: Int
    status: Boolean
  }

  type SuitesMutationsResult {
    status: Boolean
    response: SuiteFile
    errors: ErrorsSuites
  }

  type ErrorsSuites {
    message: String
    code: String
  }
  
  input SuitesOrderParams {
    field: String
    order: Int
  }

  input SuitesQueriesParams {
    profile_id: String
    profile_ids: [String!]
    id: String
    offset: Int
    limit: Int
    title: String
    is_enabled: Boolean
    ids: [String!]
    file_name: String
    data: [Int!]
    order: SuitesOrderParams
  }

  input SuiteMethod {
    method: String!
    id: Int!
    params: SuitesQueriesParams
  }
  
  input SuiteMultipleMethod {
    method: String!
    id: Int!
    params: [SuitesQueriesParams]
  }
  
  input SuitesRemoveParams {
    id: [String]
  }
  
  input SuitesRemoveMethod {
    method: String!
    id: Int!
    params: SuitesRemoveParams
  }
`
