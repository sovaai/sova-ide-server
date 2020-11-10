import { gql } from 'apollo-server-core'

export const templateDefs = gql`
  type TemplateMetaLastUser {
    uuid: String
    name: String
    username: String
    user_role: String
  }

  type TemplateMeta {
    title: String
    description: String
    last_user: TemplateMetaLastUser
  }

  type TemplateStats {
    last_used: String!
    used_7d: Int!
    used_30d: Int!
  }

  type TemplateFile {
    id: String!
    content: String
    suite_id: String
    profile_id: String
    suite_title: String
    template_title: String
    is_enabled: Boolean
    is_compilable: Boolean
    position: Int
    created: Float
    updated: Float
    meta: TemplateMeta
    stats: TemplateStats
    hidden: Boolean
  }

  type TemplatesFiles {
    items: [TemplateFile]
    item: TemplateFile
    status: Boolean
    errors: ErrorsTemplates
  }

  type ResultTypeTemplates {
    id: Int
    status: Boolean
  }

  type TemplatesMutationsResult {
    status: Boolean
    response: TemplateFile
    errors: ErrorsTemplates
  }

  type ErrorsTemplates {
    message: String
    code: String
  }
  
  input TemplatesQueriesLastUser {
    uuid: String
    name: String
    username: String
    user_role: String
  }

  input TemplatesQueriesMeta {
    title: String
    description: String
    last_user: TemplatesQueriesLastUser
  }
  
  input TemplatesOrderParams {
    field: String
    order: Int
  }

  input TemplatesQueriesParams {
    suite_id: String
    id: [String]
    offset: Int
    limit: Int
    order: TemplatesOrderParams
  }

  input TemplatesMutationsParams {
    suite_id: String
    id: String
    offset: Int
    limit: Int
    content: String
    is_enabled: Boolean
    is_compilable: Boolean
    meta: TemplatesQueriesMeta
    order: TemplatesOrderParams
    position_before: String
    position_after: String
  }

  input TemplateQueriesMethod {
    method: String!
    id: Int!
    params: TemplatesQueriesParams
  }

  input TemplateMutationsMethod {
    method: String!
    id: Int!
    params: TemplatesMutationsParams
  }
  
  input TemplateMultipleMethod {
    method: String!
    id: Int!
    params: [TemplatesMutationsParams]
  }
`
