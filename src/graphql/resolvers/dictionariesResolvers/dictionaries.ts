import axios from 'axios'
import { dictionariesDefaultConfig } from '../../../config/serviceTemplates/serviceTemplatesConfig'
import { dictionariesParamsMock } from '../../../mocks/serviceDictionariesParams'

const API_URL = process.env.TEMPLATES_API_URL

const configCreator = (config: { method: String; params?: any; id: Number }) => {
  const [_, methodKey] = config.method.split('.')
  return dictionariesDefaultConfig.mapEntries(entry => {
    const [key] = entry
    if (!config.params && key === 'params') {
      return [key, dictionariesParamsMock.get(methodKey)]
    }
    if (key in config) return [key, config[key]]
    return entry
  })
}

export const dictionariesQuery = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const dictionariesMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const dictionariesMultipleMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const dictionariesRemoveMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}
