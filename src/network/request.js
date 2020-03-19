import axios from 'axios'

export function request (config) {
  const instance1 = axios.create({
    baseURL: '/apis'
  })
  return instance1(config)
}
