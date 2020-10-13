import axios from 'axios'

const API_URL = process.env.TEMPLATES_API_URL

export const compilationMutation = async config => {
  try {
    const response = await axios.post(API_URL, { ...config, jsonrpc: '2.0', id: 1 })
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}

export const compilationQuery = async config => {
  try {
    const response = await axios.post(API_URL, { ...config, jsonrpc: '2.0', id: 1 })
    return response.data.result
  } catch (error) {
    console.log(error)
  }
}