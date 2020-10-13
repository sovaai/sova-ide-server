import { gql } from 'apollo-server-core'

export const userProfilesDefs = gql`
  type UserProfilesFile {
    user_id: String!
    profile_id: String
    profile_ids: [ProfileFilePermissions!]
    flags: Flags
    dl_read: Boolean
    dl_write: Boolean
    dict_read: Boolean
    dict_write: Boolean
    errors: ErrorsUserProfiles
  }

  type UserProfilesMutationsResult {
    status: Boolean
    response: UserProfilesFile
    errors: ErrorsUserProfiles
  }

  type ErrorsUserProfiles {
    message: String
    code: String
  }

  type ProfileFilePermissions {
    profile_id: String!
    permissions: ProfilePermissions!
  }

  input ProfileFilePermissionsInput {
    profile_id: String!
    permissions: ProfilePermissionsInput!
  }

  type Flags {
    sys_admin: Boolean
    acc_admin: Boolean
  }

  input InputFlags {
    sys_admin: Boolean
    acc_admin: Boolean
  }

  input UserProfilesCreateParams {
    user_id: String!
    profile_id: String
    profile_ids: [ProfileFilePermissionsInput!]
    flags: InputFlags
  }
  
  input UserProfilesRemoveParams {
    user_id: String!
    profile_ids: [String!]
  }

  input UserProfilesCreateMethod {
    method: String!
    id: Int!
    params: UserProfilesCreateParams
  }
  
  input UserProfilesRemoveMethod {
    method: String!
    id: Int!
    params: UserProfilesRemoveParams
  }
`
