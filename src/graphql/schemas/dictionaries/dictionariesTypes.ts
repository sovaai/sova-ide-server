import { gql } from 'apollo-server-core'

export const dictionariesDefs = gql`
  type DictionaryMetaLastUser {
    uuid: String
    name: String
    username: String
    user_role: String
  }

  type DictionaryMeta {
    last_user: DictionaryMetaLastUser
  }

  type DictionaryStats {
    last_used: String!
    used_7d: Int!
    used_30d: Int!
  }
  type DictionaryFile {
    id: String!
    profile_ids: [String]
    code: String!
    description: String!
    content: String
    common: Boolean!
    updated: Float!
    is_enabled: Boolean!
    meta: DictionaryMeta
    stats: DictionaryStats
    hidden: Boolean
  }

  type DictionariesFiles {
    items: [DictionaryFile]
    item: DictionaryFile
    status: Boolean
    errors: ErrorsDictionaries
  }

  type ResultTypeDictionaries {
    id: Int
    status: Boolean
  }

  type DictionariesMutationsResult {
    status: Boolean
    response: DictionaryFile
    errors: ErrorsDictionaries
  }

  type ErrorsDictionaries {
    message: String
    code: String
  }

  input DictionariesQueriesUserRole {
    type: String
    name: String
  }

  input DictionariesQueriesLastUser {
    uuid: String
    name: String
    username: String
    user_role: String
  }

  input DictionariesQueriesMeta {
    last_user: DictionariesQueriesLastUser
  }
  
  input DictionariesOrderParams {
    field: String
    order: Int
  }

  input DictionariesQueriesParams {
    offset: Int
    limit: Int
    profile_id: String
    profile_ids: [String]
    id: String
    code: String
    content: String
    description: String
    common: Boolean
    is_enabled: Boolean
    meta: DictionariesQueriesMeta
    ids: [String!]
    file_name: String
    data: [Int!]
    order: DictionariesOrderParams
  }

  input DictionaryMethod {
    method: String!
    id: Int!
    params: DictionariesQueriesParams
  }
  
  input DictionaryMultipleMethod {
    method: String!
    id: Int!
    params: [DictionariesQueriesParams]
  }
  
  input DictionariesRemoveParams {
    id: [String]
  }
  
  input DictionariesRemoveMethod {
    method: String!
    id: Int!
    params: DictionariesRemoveParams
  }
`
