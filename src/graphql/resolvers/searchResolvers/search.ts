import axios from 'axios'

const API_URL = process.env.SEARCH_API_URL

export const searchQuery = async config => {
  try {
    const response = await axios.post(API_URL, { ...config, jsonrpc: '2.0', id: 1 })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
