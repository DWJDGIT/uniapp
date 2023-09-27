import type { MISS_OBJECT } from '@/modules/base'
import instance, { type RequestDataConfig } from './request'

const token = uni.getStorageSync('token')

// 模拟axios的请求配置
instance.setConfig({
  baseURL: 'http://localhost:3000',
  timeout: 6000
})

// console.log(instance.getConfig())
instance.interceptors.request((instance: RequestDataConfig) => {
  if (token) {
    instance.header['Authorization'] = `Bearer ${token}`
  }
  return instance
})

instance.interceptors.response((response: MISS_OBJECT) => {
  //   if (response.data.isOverTime) {
  //     uni.showModal({
  //       title: '提示',
  //       content: '您已超时,请重新登录!',
  //       showCancel: false,
  //       icon: 'success',
  //       success: function (e) {
  //         if (e.confirm) {
  //           uni.redirectTo({
  //             url: '/pages/login/login'
  //           })
  //         }
  //       }
  //     })
  //   } else {
  //     return response
  //   }
  /**
   * 抓错处理
   * 404这些在uni里面也不算是错误
   * 这里要单独进行错误分发
   */
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response.data
  } else {
    return new Promise((reject) => reject({ code: response.statusCode, msg: 'fail', data: null }))
  }
})

export default instance
