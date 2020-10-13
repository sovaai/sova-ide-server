import axios from 'axios'

const production = process.env.NODE_ENV === 'production'
const API_URL = production ? process.env.STAPI_AUTH_URL : process.env.STAPI_AUTH_URL_DEV

export const accountUsersQuery = async (accountId, token) => {
  try {
    const resUsersList = await axios.get(`${API_URL}accounts/uuid/${accountId}`, {
      headers: {
        authorization: token,
      },
    })
    return resUsersList
  } catch (error) {
    console.log(error)
  }
}
