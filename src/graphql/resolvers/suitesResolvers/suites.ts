import axios from 'axios'
import { suitesDefaultConfig } from '../../../config/serviceTemplates/serviceTemplatesConfig'
import { suitesParamsMock } from '../../../mocks/serviceSuitesParams'

const API_URL = process.env.TEMPLATES_API_URL

const configCreator = (config: { method: String; params?: any; id: Number }) => {
  const [_, methodKey] = config.method.split('.')
  return suitesDefaultConfig.mapEntries(entry => {
    const [key] = entry
    if (!config.params && key === 'params') {
      return [key, suitesParamsMock.get(methodKey)]
    }
    if (key in config) return [key, config[key]]
    return entry
  })
}

export const suitesQuery = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const suitesMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const suitesMultipleMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const suitesRemoveMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}
