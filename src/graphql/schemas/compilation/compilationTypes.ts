import { gql } from 'apollo-server-core'

export const compilationDefs = gql`
  input CompilationOrderParams {
    field: String
    order: Int
  }
  
  input CompilationExtraParams {
    complect_id: String
    complect_revision_id: String
  }

  input CompilationParams {
    offset: Int
    limit: Int
    complect_id: String
    task_id: String
    order: CompilationOrderParams
    try_create_revision: Boolean
    complect_revision_id: String
    extra: CompilationExtraParams
  }
  
  input CompilationMethod {
    method: String!
    params: CompilationParams
  }
  
  type CompilationTaskExtra {
    complect_id: String
    complect_revision_id: String
  }
  
  type CompilationTaskItem {
    task_id: String
    status: String
    success: Boolean
    created: Float
    updated: Float
    extra: CompilationTaskExtra
  }
  
  type CompilationMessage {
    type: String
    status: String
    message: String
    near_text: String
    profile_id: String
    suite_id: String
    template_id: String
    template_meta: TemplateMeta
  }
  
  type CompilationOutput {
    output: String
    messages: [CompilationMessage]
    complect_revision_id: String
    complect_revision_code: String
  }
  
  type CompilationResponse {
    items: [CompilationTaskItem]
    task_id: String
    status: String
    success: Boolean
    created: Float
    updated: Float
    errortext: String
    result: CompilationOutput
  }
  
  type ErrorsCompilation {
    message: String
    code: String
  }
  
  type CompilationResult {
    status: Boolean
    response: CompilationResponse
    errors: ErrorsCompilation
  }
  
  input CompilationComplectUserParams {
    user_id: String
  }
  
  input CompilationComplectParams {
    user: CompilationComplectUserParams
    account_id: String
  }
  
  input CompilationComplectMethod {
    method: String
    params: CompilationComplectParams
  }
  
  type CompilationComplect {
    id: String
    name: String
    code: String
    state: String
    profile_ids: [String]
    updated: Float
    is_enabled: Boolean
    compiler_target: String
  }
  
  type CompilationComplectResponse {
     items: [CompilationComplect]
  }
  
  type CompilationComplectResult {
    status: Boolean
    response: CompilationComplectResponse
  }
  
  type CompilationDeployMeta {
    complect_revision_id: String
  }
  
  type CompilationDeployResponse {
    task_id: String
    status: String
    meta: CompilationDeployMeta
    created: Float
    updated: Float
  }
  
  type CompilationDeployResult {
    status: Boolean
    response: CompilationDeployResponse
  }
`