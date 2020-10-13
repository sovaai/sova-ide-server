import { fromJS } from 'immutable'

export const dictionariesListParams = {
  profile_id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
  // offset: 0,
  // limit: 50,
  // search: {
  //   text: '',
  //   options: {},
  // },
}

export const dictionariesCreateParams = {
  code: 'yeasno',
  description: '',
  content: '',
  state: 'active',
  common: false,
}

export const dictionariesUpdateParams = {
  id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
  code: 'yeasno',
  description: '',
  content: '',
  state: 'active',
  common: false,
}

export const dictionariesFetchParams = {
  id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
}

export const dictionariesRemoveParams = {
  id: 'fb7d9734-09e5-4a40-a03f-c2c4b4254bff',
}

export const dictionariesParamsMock = fromJS({
  list: dictionariesListParams,
  create: dictionariesCreateParams,
  store: dictionariesUpdateParams,
  remove: dictionariesRemoveParams,
})
