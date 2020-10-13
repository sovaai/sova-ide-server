import { fromJS } from 'immutable'

export const templateListParams = {
  suite_id: '3ef7340c-fb6d-4752-8a70-7c673cc7b3be',
  offset: 0,
  limit: 50,
}

export const templateFetchParams = {
  id: 'a1f55ab9-ed09-4f20-911c-b14c8c59e19f',
}

export const templateCreateParams = {
  content: '$ping\n#pong',
  suite_id: '0d162d94-82fb-4159-8f6b-0fcc76f34acf',
}

export const templateStoreParams = {
  content: '$ping\n#pong',
  suite_id: '0d162d94-82fb-4159-8f6b-0fcc76f34acf',
}

export const templateRemoveParams = {
  id: 100,
}

export const templateParamsMock = fromJS({
  list: templateListParams,
  fetch: templateFetchParams,
  create: templateCreateParams,
  store: templateStoreParams,
  remove: templateRemoveParams,
})
