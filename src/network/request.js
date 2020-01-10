import axios from 'axios'

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance1 = axios.create({
//       baseURL: 'http://localhost:3000',
//       timeout: 5000
//     })

//     instance1(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

export function request (config) {
  const instance1 = axios.create({
    baseURL: '/apis'
    // timeout: 5000
  })

  // 请求拦截
  // instance1.interceptors.request.use(config => {
  //   console.log('请求已成功拦截')
  //   return config
  // }, err => {
  //   console.log(err)
  // })

  // // 响应拦截
  // instance1.interceptors.response.use(res => {
  //   console.log('响应已成功拦截')
  //   return res
  // }, err => {
  //   console.log(err)
  // })

  return instance1(config)
}
