import axios from 'axios'
import { templatesDefaultConfig } from '../../../config/serviceTemplates/serviceTemplatesConfig'
import { templateParamsMock } from '../../../mocks/serviceTemplatesParams'

const API_URL = process.env.TEMPLATES_API_URL

const configCreator = (config: { method: String; params?: any; id: Number }) => {
  const [_, methodKey] = config.method.split('.')
  return templatesDefaultConfig.mapEntries(entry => {
    const [key] = entry
    if (!config.params && key === 'params') {
      return [key, templateParamsMock.get(methodKey)]
    }
    /*    if (key === 'params') {
      return [
        key,
        templateParamsMock.get(methodKey).mapEntries(entry => {
          const [key] = entry
          if (key in config.params) {
            return [key, config.params[key]]
          }
          return entry
        }),
      ]
    } */
    if (key in config) return [key, config[key]]
    return entry
  })
}

export const templatesQuery = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const templatesMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const templatesMultipleMutation = async config => {
  try {
    const response = await axios.post(API_URL, configCreator(config).toJS())
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}
