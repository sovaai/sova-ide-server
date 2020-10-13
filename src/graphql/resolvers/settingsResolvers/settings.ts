import axios from 'axios'
const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const settingsMutation = async ({ uuid, ...updatedSettings }, token) => {
  try {
    const response = await axios.put(
      `${API_URL}users/settings/${uuid}`,
      updatedSettings,
      {
        headers: {
          authorization: token,
        },
      }
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const settingsQuery = async (config, token) => {
  /*const { uuid } = config*/
  try {
    const response = await axios.get(`${API_URL}users/me`, {
      headers: {
        authorization: token,
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
