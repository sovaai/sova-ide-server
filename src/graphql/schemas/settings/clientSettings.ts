import { gql } from 'apollo-server-core'

export const settingsDefs = gql`
  type UserSettings {
    theme: String
    font_family: String
    font_size: String
    animation: Boolean
    editors_opened: Boolean
    fav_templates_expanded: Boolean
    comments_expanded: Boolean
    show_lines_count: Boolean
    role: RoleFile
  }
  
  input UserSettingsProps {
    uuid: String!
    theme: String!
    font_family: String
    font_size: String
    animation: Boolean
    editors_opened: Boolean
    fav_templates_expanded: Boolean
    comments_expanded: Boolean
    show_lines_count: Boolean
  }
`
