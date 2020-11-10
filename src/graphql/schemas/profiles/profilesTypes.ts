import { gql } from 'apollo-server-core'

export const profilesDefs = gql`
  type ProfilePermissions {
    dl_read: Boolean
    dl_write: Boolean
    dict_read: Boolean
    dict_write: Boolean
  }

  input ProfilePermissionsInput {
    dl_read: Boolean
    dl_write: Boolean
    dict_read: Boolean
    dict_write: Boolean
  }

  type ProfileFile {
    id: String!
    name: String!
    code: String!
    common: Boolean!
    is_enabled: Boolean!
    permissions: ProfilePermissions
  }

  type ProfilesFiles {
    items: [ProfileFile]
    item: ProfileFile
    status: Boolean
    errors: ErrorsProfiles
  }

  type ResultTypeProfiles {
    id: Int
    status: Boolean
  }

  type ProfilesMutationsResult {
    status: Boolean
    response: ProfileFile
    errors: ErrorsProfiles
  }

  type ErrorsProfiles {
    message: String
    code: String
  }

  input User {
    user_id: String
    role_id: String
    group_id: [String]
    profile_id: String
    account_id: String
    full_list: Boolean
  }
  
  input ProfilesOrderParams {
    field: String
    order: Int
  }

  input profilesQueriesParams {
    id: String
    offset: Int
    limit: Int
    name: String
    code: String
    common: Boolean
    is_enabled: Boolean
    user: User
    account_id: String
    full_list: Boolean
    order: ProfilesOrderParams
  }

  input ProfileMethod {
    method: String!
    id: Int!
    params: profilesQueriesParams
  }
`
