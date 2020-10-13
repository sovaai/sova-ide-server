import axios from 'axios'
import { profilesDefaultConfig } from '../../../config/serviceTemplates/serviceTemplatesConfig'
import { profilesParamsMock } from '../../../mocks/serviceProfilesParams'

const API_URL = process.env.TEMPLATES_API_URL

const configCreator = (config: { method: String; params?: any; id: Number }) => {
  const [_, methodKey] = config.method.split('.')
  return profilesDefaultConfig.mapEntries(entry => {
    const [key] = entry
    if (!config.params && key === 'params') {
      return [key, profilesParamsMock.get(methodKey)]
    }
    if (key in config) return [key, config[key]]
    return entry
  })
}

export const accountProfilesQuery = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const accountProfilesMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}
