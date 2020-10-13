import { gql } from 'apollo-server-core'

export const searchDefs = gql`
  type SourceType {
    id: String
    suite_id: String
    profile_id: String
    profile_ids: [String]
    created: Float
    updated: Float
    code: String
    content: String
    template_title: String
    suite_title: String
    common: Boolean
    meta: TemplateMeta
  }

  type HighlightItemType {
    field_name: String
    text: [String]
  }

  type HighlightType {
    items: [HighlightItemType]
  }

  type SearchHitsResult {
    _source: SourceType
    highlight: HighlightType
  }

  type SearchTotalType {
    value: Int
    relation: String
  }

  type SearchHitsType {
    total: SearchTotalType
    hits: [SearchHitsResult]
  }

  type SearchResponseType {
    took: Int
    timed_out: Boolean
    hits: SearchHitsType
  }

  type ErrorsSearch {
    message: String
    code: String
  }

  type SearchResultOutput {
    status: Boolean
    response: SearchResponseType
    errors: ErrorsSearch
  }

  type SearchResult {
    result: SearchResultOutput
  }

  input SearchOrderParams {
    field_name: String
    direction: String
  }

  input SearchFilterCondition {
    value: [String]
    prefix: String
  }

  input SearchQueriesFilter {
    field_name: String
    condition: SearchFilterCondition
    include_or_exclude: String
  }

  input SearchQueriesParams {
    offset: Int
    limit: Int
    highlight: Boolean
    name: String
    text: String
    exact_search: Boolean
    words_or_phrase: String
    words_mode: String
    fields: [String]
    fields_mode: String
    order: SearchOrderParams
    filters: [SearchQueriesFilter]
  }

  input SearchMethod {
    method: String!
    params: SearchQueriesParams
  }
`
