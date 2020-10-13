import { gql } from 'apollo-server-core'

export const accountProfilesDefs = gql`
  type AccountProfilesFile {
    account_id: String
    profile_id: String
    profile_ids: [String!]
    items: [String!]
    errors: ErrorsAccountProfiles
  }

  type AccountProfilesResult {
    status: Boolean
    response: AccountProfilesFile
    errors: ErrorsAccountProfiles
  }

  type ErrorsAccountProfiles {
    message: String
    code: String
  }

  input AccountProfilesQueriesParams {
    account_id: String!
    profile_id: String
    profile_ids: [String!]
  }

  input AccountProfilesMethod {
    method: String!
    id: Int!
    params: AccountProfilesQueriesParams
  }
`
