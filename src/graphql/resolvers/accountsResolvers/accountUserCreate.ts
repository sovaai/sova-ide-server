import axios from 'axios'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const accountUserCreateMutation = async (userProps, token) => {
  try {
    const user = await axios.post(
      `${API_URL}users/uuid`,
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
