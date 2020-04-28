import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://malabarhangouts.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient;