import axios from 'axios'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const accountUserDestroyMutation = async (userId, token) => {
  try {
    const res = await axios.delete(`${API_URL}users/uuid/${userId}`, {
      headers: {
        authorization: token,
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
