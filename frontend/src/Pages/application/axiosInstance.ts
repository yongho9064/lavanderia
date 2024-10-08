import axios from 'axios'
import CryptoJS from 'crypto-js'

const secretKey = process.env.REACT_APP_CRYPTOJS_KEY

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token && secretKey) {
      const bytes = CryptoJS.AES.decrypt(token, secretKey)
      const decryptedToken = bytes.toString(CryptoJS.enc.Utf8)
      config.headers['access'] = decryptedToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
