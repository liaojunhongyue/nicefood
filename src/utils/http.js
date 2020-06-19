import axios from 'axios'

// 基础信息
axios.defaults.baseURL = 'http://192.168.18.9:9000/'
axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error.response)
  }
)

// 导出 get post 请求
export default {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: params
      }).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: params
      }).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
