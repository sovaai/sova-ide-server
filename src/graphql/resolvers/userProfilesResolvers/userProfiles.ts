import axios from 'axios'
import { profilesDefaultConfig } from '../../../config/serviceTemplates/serviceTemplatesConfig'
import { userData } from '../../../middleware/mocks/user'
import { profilesParamsMock } from '../../../mocks/serviceProfilesParams'

const production = process.env.NODE_ENV === 'production'
const API_USERS_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV
const API_URL = process.env.TEMPLATES_API_URL

const configCreator = (config: { method: String; params?: any; id: Number }) => {
  const [_, methodKey] = config.method.split('.')
  return profilesDefaultConfig.mapEntries((entry) => {
    const [key] = entry
    if (!config.params && key === 'params') {
      return [key, profilesParamsMock.get(methodKey)]
    }
    if (key in config) return [key, config[key]]
    return entry
  })
}

export const userCurrentQuery = async (token) => {
  try {
    return userData
  } catch (error) {
    console.log(error)
  }
}

export const userProfilesQuery = async (config) => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const userProfilesCreateMutation = async (config) => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const userProfilesRemoveMutation = async (config) => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}
