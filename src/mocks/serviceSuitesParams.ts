import { fromJS } from 'immutable'

export const suitesListParams = {
  profile_ids: ['42c41e80-731f-4384-960e-8fbc2a255edd'],
  offset: 0,
  limit: 50,
}

export const suitesCreateParams = {
  id: null,
  title: '',
  state: 'active',
  profile_id: '42c41e80-731f-4384-960e-8fbc2a255edd',
}

export const suitesStoreParams = {
  id: 'a7e267a4-8f68-4d2e-85c3-46ce0c85fdce',
  title: '',
  state: 'inactive',
}

export const suitesRemoveParams = {
  id: 'a7e267a4-8f68-4d2e-85c3-46ce0c85fdce',
}

export const suitesParamsMock = fromJS({
  list: suitesListParams,
  create: suitesCreateParams,
  store: suitesStoreParams,
  remove: suitesRemoveParams,
})
