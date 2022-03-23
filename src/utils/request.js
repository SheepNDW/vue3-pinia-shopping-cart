import axios from 'axios'
import { start, close } from './nprogress'

const baseURL = `${import.meta.env.VITE_BASE_URL}`

const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  start()
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  close()
  return res.data
}, err => {
  return Promise.reject(err)
})

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}