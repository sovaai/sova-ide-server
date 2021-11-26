import { fromJS } from 'immutable'
import { templateListParams } from '../../mocks/serviceTemplatesParams'
import { suitesListParams } from '../../mocks/serviceSuitesParams'
import { profilesListParams } from '../../mocks/serviceProfilesParams'
import { dictionariesListParams } from '../../mocks/serviceDictionariesParams'

export const templatesDefaultConfig: any = fromJS({
  jsonrpc: '2.0',
  method: 'template.list',
  params: templateListParams,
  id: 1,
})

export const suitesDefaultConfig: any = fromJS({
  jsonrpc: '2.0',
  method: 'suite.list',
  params: suitesListParams,
  id: 1,
})

export const profilesDefaultConfig: any = fromJS({
  jsonrpc: '2.0',
  method: 'profile.list',
  params: profilesListParams,
  id: 1,
})

export const dictionariesDefaultConfig: any = fromJS({
  jsonrpc: '2.0',
  method: 'dictionary.list',
  params: dictionariesListParams,
  id: 1,
})
