import axios from 'axios'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const accountUserUpdateMutation = async (uuid, userProps, token) => {
  try {
    const user = await axios.put(
      `${API_URL}users/uuid/${uuid}`,
      { ...userProps },
      {
        headers: {
          authorization: token,
        },
      }
    )
    return user.data
  } catch (error) {
    console.log(error)
  }
}
