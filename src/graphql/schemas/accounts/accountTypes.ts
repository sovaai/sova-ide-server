import { gql } from 'apollo-server-core'

export const accountsDefs = gql`
  type UserFile {
    id: String!
    name: String
    username: String!
    email: String!
    provider: String
    confirmed: Boolean
    blocked: Boolean
    uuid: String
    role: RoleFile!
    groups: [GroupFile]
    theme: String
    font_family: String
    font_size: String
    animation: Boolean
    editors_opened: Boolean
    fav_templates_expanded: Boolean
    comments_expanded: Boolean
    show_lines_count: Boolean
  }

  type RoleFile {
    id: String!
    name: String!
    description: String
    type: String!
    role_id: String!
  }

  type ClientConfigFile {
    theme: String
  }

  type AccountUsers {
    account_id: String!
    id: Int!
    name: String
    created_at: String!
    updated_at: String!
    users: [UserFile]!
    user: UserFile!
    groups: [GroupFile]
    roles: [RoleFile]
  }

  type GroupFile {
    id: Int!
    group_name: String!
    group_id: String!
    group_type: String!
  }

  type AccountFile {
    id: Int!
    name: String!
    account_id: String!
  }

  type AccountsMutationsResult {
    status: Boolean
    response: UserFile
    errors: ErrorsAccounts
  }

  type ErrorsAccounts {
    message: String
    code: String
  }

  input UserCreateProps {
    username: String!
    name: String!
    email: String!
    password: String!
    confirmed: Boolean!
    role_id: String!
    account_id: String!
    group_ids: [String!]
  }

  input UserUpdateProps {
    uuid: String!
    name: String!
    email: String!
    confirmed: Boolean!
    blocked: Boolean
    account_ids: [String!]
    group_ids: [String!]
  }

  type UserAvatarProps {
    id: Int
    name: String
    ext: String
    mime: String
    size: String
    url: String
  }

  input UserFileProps {
    filename: String!
    mimetype: String!
    size: Int!
  }

  input UserAvatarMutationProps {
    uuid: String!
    file: UserFileProps!
    buffer: String!
  }

  type UserResult {
    id: Int!
    uuid: String!
    username: String!
    name: String!
    email: String!
    confirmed: Boolean!
    blocked: Boolean
    profile_img: UserAvatarProps
    provider: String
    role: RoleFile!
    groups: [GroupFile]
    accounts: [AccountFile]
    theme: String
    font_family: String
    font_size: String
    animation: Boolean
    editors_opened: Boolean
    fav_templates_expanded: Boolean
    comments_expanded: Boolean
    show_lines_count: Boolean
  }

  type TestDescription {
    test: String
    test1: String
  }

  type UserDestroyResult {
    response: [UserResult]
  }

  type UserAvatarResult {
    uuid: String
    profile_img: UserAvatarProps
    file: Upload
  }
`
