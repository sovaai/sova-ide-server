import axios from 'axios'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const accountUserAvatarMutation = async (uuid, props, token) => {
  try {
    const user = await axios.put(
      `${API_URL}users/avatar/${uuid}`,
      { ...props },
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return user.data
  } catch (error) {
    console.log(error)
  }
}
