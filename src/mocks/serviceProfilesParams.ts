import { fromJS } from 'immutable'

export const profilesListParams = {
  offset: 0,
  limit: 50,
  /* "search": {
      "text": "",
      "options": {
      }
  } */
}

export const profileFetchParams = {
  id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
}

export const profilesCreateParams = {
  id: null,
  name: '',
  code: '',
  common: false,
}

export const profilesStoreParams = {
  id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
  name: '',
  code: '',
  state: 'active',
  common: false,
}

export const profilesRemoveParams = {
  id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
}

export const profilesParamsMock = fromJS({
  list: profilesListParams,
  fetch: profileFetchParams,
  create: profilesCreateParams,
  store: profilesStoreParams,
  remove: profilesRemoveParams,
})
