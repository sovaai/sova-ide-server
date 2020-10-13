import axios from 'axios'
import { userData } from '../../../middleware/mocks/user'
const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const settingsMutation = async ({ uuid, ...updatedSettings }, token) => {
  try {
    const response = await axios.put(`${API_URL}users/settings/${uuid}`, updatedSettings, {
      headers: {
        authorization: token,
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const settingsQuery = async (config, token) => {
  try {
    return userData
  } catch (error) {
    console.log(error)
  }
}
